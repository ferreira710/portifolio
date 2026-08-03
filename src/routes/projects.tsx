import { createFileRoute } from "@tanstack/react-router";
import { useLanguage } from "../contexts/LanguageContext";
import { translations } from "../locales";

export const Route = createFileRoute("/projects")({
	head: () => ({
		meta: [
			{ title: "Projetos - Gabriel Ferreira" },
			{
				name: "description",
				content:
					"Cases de impacto e projetos desenvolvidos por Gabriel Ferreira, com foco em performance e experiência do usuário.",
			},
			{ property: "og:title", content: "Projetos - Gabriel Ferreira" },
			{ property: "og:image", content: "/og.webp" },
			{
				property: "og:description",
				content: "Conheça os principais projetos de Gabriel Ferreira.",
			},
		],
		links: [{ rel: "canonical", href: "https://ferreira710.dev/projects" }],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	const { language } = useLanguage();
	const t = translations[language].projects;

	return (
		<main className="page-wrap px-4 py-12">
			<section className="island-shell rounded-2xl p-6 sm:p-8">
				<p className="island-kicker mb-2">{t.kicker}</p>
				<h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
					{t.title}
				</h1>
				<p className="m-0 max-w-3xl text-base leading-8 text-(--sea-ink-soft)">
					{t.description}{" "}
					<a
						href="https://github.com/ferreira710"
						target="_blank"
						rel="noopener noreferrer"
						className="font-medium text-(--lagoon-deep) underline transition hover:opacity-80"
					>
						GitHub
					</a>
					.
				</p>
			</section>

			<section className="mt-8">
				<h2 className="mb-4 text-2xl font-semibold text-(--sea-ink)">
					{t.featuredTitle}
				</h2>
				<div className="grid gap-4 sm:grid-cols-2">
					{t.featured.map((project, index) => (
						<div
							key={project.title}
							className="island-shell rise-in group relative rounded-2xl p-6 transition hover:-translate-y-1 hover:shadow-lg"
							style={{ animationDelay: `${index * 100 + 80}ms` }}
						>
							<span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-emerald-700">
								{project.metric}
							</span>
							<h3 className="mt-3 text-lg font-bold text-(--sea-ink) group-hover:text-(--lagoon-deep)">
								{project.title}
							</h3>
							<p className="m-0 text-sm leading-relaxed text-(--sea-ink-soft)">
								{project.description}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="mt-12">
				<h2 className="mb-4 text-2xl font-semibold text-(--sea-ink)">
					{t.otherTitle}
				</h2>
				<div className="grid gap-4 sm:grid-cols-2">
					{t.other.map((project, index) => (
						<a
							key={project.title}
							href="https://github.com/ferreira710"
							target="_blank"
							rel="noopener noreferrer"
							className="island-shell rise-in rounded-2xl p-5 transition hover:bg-(--sea-ink)/5"
							style={{ animationDelay: `${index * 100 + 400}ms` }}
						>
							<h3 className="text-base font-semibold text-(--sea-ink)">
								{project.title}
							</h3>
							<p className="m-0 text-sm text-(--sea-ink-soft)">
								{project.description}
							</p>
						</a>
					))}
				</div>
			</section>
		</main>
	);
}
