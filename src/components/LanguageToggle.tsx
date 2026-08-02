import { useLanguage } from "../contexts/LanguageContext";

export default function LanguageToggle() {
	const { language, toggleLanguage } = useLanguage();

	const label =
		language === "pt"
			? "Idioma: Português. Clique para mudar para Inglês."
			: "Language: English. Click to switch to Portuguese.";

	return (
		<button
			type="button"
			onClick={toggleLanguage}
			aria-label={label}
			title={label}
			className="rounded-full border border-(--chip-line) bg-(--chip-bg) px-3 py-1.5 text-sm font-semibold text-(--sea-ink) shadow-[0_8px_22px_rgba(30,90,72,0.08)] transition hover:-translate-y-0.5"
		>
			{language === "pt" ? "PT" : "EN"}
		</button>
	);
}
