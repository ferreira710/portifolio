import type React from "react";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

type Language = "pt" | "en";

interface LanguageContextType {
	language: Language;
	toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

function getInitialLanguage(): Language {
	if (typeof window === "undefined") return "pt";
	const stored = localStorage.getItem("language");
	if (stored === "pt" || stored === "en") return stored;
	const browserLang = navigator.language.slice(0, 2);
	return browserLang === "en" ? "en" : "pt";
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
	const [language, setLanguage] = useState<Language>("pt");

	const applyLanguage = useCallback(function applyLanguage(lang: Language) {
		document.documentElement.lang = lang;
		document.documentElement.setAttribute("data-lang", lang);
	}, []);

	useEffect(() => {
		const initial = getInitialLanguage();
		setLanguage(initial);
		applyLanguage(initial);
	}, [applyLanguage]);

	function toggleLanguage() {
		const next: Language = language === "pt" ? "en" : "pt";
		setLanguage(next);
		applyLanguage(next);
		localStorage.setItem("language", next);
	}

	return (
		<LanguageContext.Provider value={{ language, toggleLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
}

export function useLanguage() {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
}
