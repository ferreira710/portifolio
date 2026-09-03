import { createRouter as createTanStackRouter } from "@tanstack/react-router";
import { createIsomorphicFn } from "@tanstack/react-start";
import { nonceStorage } from "./nonce";
import { routeTree } from "./routeTree.gen";

// No servidor, o nonce vem do middleware de headers (src/start.ts). No cliente
// ele é lido de <meta property="csp-nonce"> pelo próprio TanStack durante a
// hidratação, então aqui basta devolver undefined.
const getRequestNonce = createIsomorphicFn()
	.client(() => undefined)
	.server(() => nonceStorage.getStore());

export function getRouter() {
	const nonce = getRequestNonce();

	const router = createTanStackRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0,
		ssr: nonce ? { nonce } : undefined,
	});

	return router;
}

declare module "@tanstack/react-router" {
	interface Register {
		router: ReturnType<typeof getRouter>;
	}
}
