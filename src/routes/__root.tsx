import { TanStackDevtools } from "@tanstack/react-devtools";
import { createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { LanguageProvider } from "#/contexts/LanguageContext";
import Footer from "../components/Footer";
import Header from "../components/Header";
import appCss from "../styles.css?url";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
		],
		links: [{ rel: "stylesheet", href: appCss }],
	}),
	shellComponent: RootDocument,
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<LanguageProvider>
			<html lang={"pt-BR"} suppressHydrationWarning>
				<head>
					<HeadContent />
					<link
						rel="preload"
						as="image"
						href="/gabriel.webp"
						fetchPriority="high"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link
						rel="preconnect"
						href="https://fonts.gstatic.com"
						crossOrigin="anonymous"
					/>
				</head>
				<body className="font-sans antialiased wrap-anywhere selection:bg-[rgba(79,184,178,0.24)]">
					<Header />
					{children}
					<Footer />
					{import.meta.env.DEV && (
						<TanStackDevtools
							config={{ position: "bottom-right" }}
							plugins={[
								{
									name: "Tanstack Router",
									render: <TanStackRouterDevtoolsPanel />,
								},
							]}
						/>
					)}
					<Scripts />
				</body>
			</html>
		</LanguageProvider>
	);
}
