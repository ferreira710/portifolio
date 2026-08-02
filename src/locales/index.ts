export type TranslationKey = keyof typeof pt;

export const pt = {
	home: {
		greeting: "👋 Olá, eu sou",
		name: "Gabriel Ferreira",
		title: "Frontend Engineer | React & Next.js",
		description:
			"Construo interfaces de alto impacto, unindo performance, experiência do usuário e segurança da informação.",
		ctaEmail: "Vamos conversar",
		ctaLinkedin: "LinkedIn",
		ctaGithub: "GitHub",
		aboutKicker: "Sobre mim",
		aboutTitle: "Minha jornada",
		aboutP1:
			"Minha jornada no desenvolvimento começou onde muitos evitam: no suporte técnico. Lá, no KaBuM!, aprendi a ouvir o usuário e a entender a complexidade de uma operação de e-commerce em tempo real. Essa experiência me deu a habilidade de antecipar problemas e criar soluções que realmente fazem sentido para o negócio.",
		aboutP2:
			"Como Desenvolvedor Frontend, especializei-me em React e Next.js para construir interfaces rápidas, acessíveis e com forte apelo visual. Meu foco é a performance e a experiência do usuário, sempre buscando melhorar métricas como LCP e reduzir taxas de abandono.",
		aboutP3:
			"Atualmente, estou expandindo meu horizonte para a Segurança Cibernética (Tecnólogo pela FIAP). Acredito que o futuro do desenvolvimento é construir aplicações não apenas funcionais, mas intrinsecamente seguras e confiáveis. Estou em busca de desafios onde eu possa unir minha paixão por código de alta performance com minha crescente expertise em segurança da informação.",
		footerAvailable: "Disponível para novos desafios",
		footerDownload: "[PT-BR] Baixar currículo (PDF)",
		resumeLink: "/Gabriel_Ferreira_CV_PT.pdf",
	},
	header: {
		home: "Início",
		projects: "Projetos",
	},
	projects: {
		kicker: "Projetos",
		title: "Cases de impacto",
		description:
			"Uma seleção dos meus principais trabalhos, com foco em resultados mensuráveis e escalabilidade. Para mais experimentos, visite meu",
		featuredTitle: "⭐ Principais entregas",
		featured: [
			{
				title: "Otimização do Checkout - KaBuM!",
				description:
					"Reconstrução do fluxo de checkout para reduzir abandono de carrinho. Implementação de nova interface com gerenciamento de estado global e testes para garantir zero regressões em uma área crítica.",
				metric: "-15% abandono",
			},
			{
				title: "Refatoração de Componentes - KaBuM!",
				description:
					"Migração de componentes legados para Next.js (SSR/ISR) e TypeScript, com foco em lazy loading e otimização de imagens, resultando em melhorias drásticas de SEO e experiência.",
				metric: "+30% performance (LCP)",
			},
		],
		otherTitle: "📁 Outros projetos",
		other: [
			{
				title: "Mariella Giacon",
				description:
					"Landing Page para a arquiteta e paisagista Mariella Giacon, com design moderno e responsivo.",
			},
			{
				title: "Limeira ON",
				description:
					"Plataforma de serviços para a cidade de Limeira, com foco em acessibilidade e usabilidade, além de um Dashboard administrativo.",
			},
		],
	},
};

export const en: typeof pt = {
	home: {
		greeting: "👋 Hello, I'm",
		name: "Gabriel Ferreira",
		title: "Frontend Engineer | React & Next.js",
		description:
			"I build high-impact interfaces, combining performance, user experience, and information security.",
		ctaEmail: "Let's talk",
		ctaLinkedin: "LinkedIn",
		ctaGithub: "GitHub",
		aboutKicker: "About me",
		aboutTitle: "My journey",
		aboutP1:
			"My journey in development started where many avoid: in technical support. There, at KaBuM!, I learned to listen to the user and understand the complexity of an e-commerce operation in real time. This experience gave me the ability to anticipate problems and create solutions that truly make sense for the business.",
		aboutP2:
			"As a Frontend Developer, I specialized in React and Next.js to build fast, accessible, and visually appealing interfaces. My focus is on performance and user experience, always seeking to improve metrics like LCP and reduce abandonment rates.",
		aboutP3:
			"Currently, I am expanding my horizons into Cybersecurity (Technology degree at FIAP). I believe the future of development is to build applications that are not only functional but also intrinsically secure and reliable. I am looking for challenges where I can combine my passion for high-performance code with my growing expertise in information security.",
		footerAvailable: "Available for new challenges",
		footerDownload: "[EN] Download Resume (PDF)",
		resumeLink: "/Gabriel_Ferreira_CV_EN.pdf",
	},
	header: {
		home: "Home",
		projects: "Projects",
	},
	projects: {
		kicker: "Projects",
		title: "Impact cases",
		description:
			"A selection of my main works, focusing on measurable results and scalability. For more experiments, visit my",
		featuredTitle: "⭐ Featured deliveries",
		featured: [
			{
				title: "Checkout Optimization - KaBuM!",
				description:
					"Rebuilt the checkout flow to reduce cart abandonment. Implemented a new interface with global state management and tests to ensure zero regressions in a critical area.",
				metric: "-15% abandonment",
			},
			{
				title: "Legacy Component Refactoring - KaBuM!",
				description:
					"Migrated legacy components to Next.js (SSR/ISR) and TypeScript, focusing on lazy loading and image optimization, resulting in drastic improvements in SEO and user experience.",
				metric: "+30% performance (LCP)",
			},
		],
		otherTitle: "📁 Other projects",
		other: [
			{
				title: "Mariella Giacon",
				description:
					"Landing page for architect and landscape designer Mariella Giacon, with modern and responsive design.",
			},
			{
				title: "Limeira ON",
				description:
					"Service platform for the city of Limeira, focusing on accessibility and usability, plus an administrative dashboard.",
			},
		],
	},
};

export const translations = { pt, en };
