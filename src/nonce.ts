import { AsyncLocalStorage } from "node:async_hooks";

// Carregado só no bundle de servidor: o acesso passa por createIsomorphicFn
// em src/router.tsx, cuja ramificação .server() é removida do bundle cliente.
export const nonceStorage = new AsyncLocalStorage<string>();
