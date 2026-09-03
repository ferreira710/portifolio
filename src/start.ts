import { createMiddleware, createStart } from "@tanstack/react-start";

// Netlify não aplica headers de netlify.toml/_headers em respostas de SSR
// (docs: "custom headers apply only to files Netlify serves from our own
// backing store"). O documento HTML deste site é renderizado por função, então
// os headers de segurança precisam sair daqui.
const contentSecurityPolicy = [
	"default-src 'self'",
	// 'unsafe-inline': o TanStack Start injeta um <script> inline de hidratação
	// ($tsr-stream-barrier) cujo conteúdo muda a cada resposta — sem nonce por
	// requisição, hash não serve. Ver README/nota sobre o upgrade para nonce.
	"script-src 'self' 'unsafe-inline'",
	// fonts.googleapis.com: styles.css faz @import da folha do Google Fonts.
	// 'unsafe-inline': atributos style= usados nas animações de /projects.
	"style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
	"font-src 'self' https://fonts.gstatic.com",
	"img-src 'self' data:",
	"connect-src 'self'",
	"object-src 'none'",
	"base-uri 'self'",
	"form-action 'none'",
	"frame-ancestors 'none'",
	"upgrade-insecure-requests",
].join("; ");

const securityHeaders: Record<string, string> = {
	"content-security-policy": contentSecurityPolicy,
	"x-frame-options": "DENY",
	"x-content-type-options": "nosniff",
	"referrer-policy": "strict-origin-when-cross-origin",
	"permissions-policy":
		"camera=(), microphone=(), geolocation=(), payment=(), usb=(), midi=(), serial=(), bluetooth=()",
	"strict-transport-security": "max-age=31536000; includeSubDomains",
};

const securityHeadersMiddleware = createMiddleware({ type: "request" }).server(
	async ({ next }) => {
		const result = await next();
		const headers = new Headers(result.response.headers);

		for (const [name, value] of Object.entries(securityHeaders)) {
			headers.set(name, value);
		}

		return {
			...result,
			response: new Response(result.response.body, {
				status: result.response.status,
				statusText: result.response.statusText,
				headers,
			}),
		};
	},
);

export const startInstance = createStart(() => ({
	requestMiddleware: [securityHeadersMiddleware],
}));
