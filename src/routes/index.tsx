import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales";

export const Route = createFileRoute("/")({
	head: () => ({
		meta: [
			{ title: "Gabriel Ferreira - Portfólio" },
			{
				name: "description",
				content:
					"Desenvolvedor frontend especializado em React e Next.js, com foco em performance e experiência do usuário.",
			},
			{ property: "og:title", content: "Gabriel Ferreira - Portfólio" },
			{ property: "og:image", content: "/og.webp" },
			{
				property: "og:description",
				content: "Portfólio de Gabriel Ferreira, desenvolvedor full stack.",
			},
		],
		links: [{ rel: "canonical", href: "https://ferreira710.dev/" }],
		script: [
			{
				type: "application/ld+json",
				innerHTML: JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					name: "Gabriel Ferreira",
					jobTitle: "Frontend Engineer",
					url: "https://ferreira710.dev",
					sameAs: [
						"https://linkedin.com/in/yferreirinha",
						"https://github.com/ferreira710",
					],
				}),
			},
		],
	}),
	component: App,
});

function App() {
	const { language } = useLanguage();
	const t = translations[language].home;

	return (
		<main className="page-wrap px-4 py-12">
			<section className="island-shell rounded-2xl p-6 sm:p-10">
				<div className="grid items-center gap-8 md:grid-cols-2">
					<div>
						<p className="island-kicker mb-2 text-sm font-semibold uppercase tracking-wide text-(--lagoon-deep)">
							{t.greeting}
						</p>
						<h1 className="display-title mb-2 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
							{t.name}
						</h1>
						<p className="mb-4 text-xl font-medium text-(--lagoon-deep)">
							{t.title}
						</p>
						<p className="m-0 max-w-xl text-base leading-relaxed text-(--sea-ink-soft)">
							{t.description}
						</p>
						<div className="mt-6 flex flex-wrap items-center gap-3">
							<a
								href="mailto:gabriel@ferreira710.dev"
								className="inline-flex items-center gap-2 rounded-full bg-(--sand) px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-(--sand)/80 hover:scale-[1.02] active:scale-[0.98]"
							>
								<svg
									className="h-4 w-4"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<title>Email</title>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								{t.ctaEmail}
							</a>
							<a
								href="https://linkedin.com/in/yferreirinha"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-full bg-(--sand) px-6 py-2.5 text-sm font-medium text-(--sea-ink) transition hover:bg-(--sand)"
							>
								<svg
									className="h-4 w-4"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<title>LinkedIn</title>
									<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
								</svg>
								{t.ctaLinkedin}
							</a>
							<a
								href="https://github.com/ferreira710"
								target="_blank"
								rel="noopener noreferrer"
								className="inline-flex items-center gap-2 rounded-full bg-(--sand) px-6 py-2.5 text-sm font-medium text-(--sea-ink) transition hover:bg-(--sand)"
							>
								<svg
									className="h-4 w-4"
									fill="currentColor"
									viewBox="0 0 24 24"
								>
									<title>GitHub</title>
									<path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.15 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.62.24 2.85.12 3.15.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
								</svg>
								{t.ctaGithub}
							</a>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="flex h-52 w-52 items-center justify-center rounded-full bg-linear-to-br from-(--lagoon-deep) to-emerald-400 text-6xl text-white shadow-xl sm:h-64 sm:w-64">
							<img
								src="/gabriel.webp"
								alt="Gabriel Ferreira"
								className="h-full w-full rounded-full object-cover"
								loading="eager"
								fetchPriority="high"
							/>
						</div>
					</div>
				</div>
			</section>

			<section className="island-shell mt-6 rounded-2xl p-6 sm:p-8">
				<p className="island-kicker mb-2">{t.aboutKicker}</p>
				<h2 className="display-title mb-3 text-3xl font-bold text-(--sea-ink) sm:text-4xl">
					{t.aboutTitle}
				</h2>
				<p className="m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)">
					{t.aboutP1}
				</p>
				<br />
				<p className="m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)">
					{t.aboutP2}
				</p>
				<br />
				<p className="m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)">
					{t.aboutP3}
				</p>

				<div className="mt-8 border-t border-(--line) pt-6 text-center text-sm text-(--sea-ink-soft)">
					<p className="mb-2">
						<a
							href={t.resumeLink}
							download
							className="font-medium text-(--lagoon-deep) underline hover:opacity-80"
						>
							{t.footerDownload}
						</a>
					</p>
					<p>
						{t.footerAvailable} •
						<a
							href="mailto:gabriel@ferreira710.dev"
							className="ml-1 text-(--lagoon-deep) hover:underline"
						>
							gabriel@ferreira710.dev
						</a>
					</p>
				</div>
			</section>
		</main>
	);
}
