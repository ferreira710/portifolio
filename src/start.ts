import { createMiddleware, createStart } from "@tanstack/react-start";
import { nonceStorage } from "./nonce";

// Netlify não aplica headers de netlify.toml/_headers em respostas de SSR
// (docs: "custom headers apply only to files Netlify serves from our own
// backing store"). O documento HTML deste site é renderizado por função, então
// os headers de segurança precisam sair daqui.
function contentSecurityPolicy(nonce: string) {
	return [
		"default-src 'self'",
		// O único <script> inline é o de hidratação do TanStack, cujo conteúdo
		// muda a cada resposta (hash não serve). O nonce é gerado por requisição
		// e o próprio framework o aplica nos scripts que injeta.
		`script-src 'self' 'nonce-${nonce}'`,
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
}

const staticSecurityHeaders: Record<string, string> = {
	"x-frame-options": "DENY",
	"x-content-type-options": "nosniff",
	"referrer-policy": "strict-origin-when-cross-origin",
	"permissions-policy":
		"camera=(), microphone=(), geolocation=(), payment=(), usb=(), midi=(), serial=(), bluetooth=()",
	"strict-transport-security": "max-age=31536000; includeSubDomains",
};

const securityHeadersMiddleware = createMiddleware({ type: "request" }).server(
	async ({ next }) => {
		const nonce = crypto.randomUUID().replaceAll("-", "");

		const result = await nonceStorage.run(nonce, () => next());
		const headers = new Headers(result.response.headers);

		headers.set("content-security-policy", contentSecurityPolicy(nonce));
		for (const [name, value] of Object.entries(staticSecurityHeaders)) {
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
