export const languages = {
  de: "Deutsch",
  en: "English",
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = "de";

export const ui = {
  de: {
    // Navigation
    "nav.home": "Startseite",
    "nav.experience": "Erleben",
    "nav.discover": "Entdecken",
    "nav.plan": "Planen",
    "nav.events": "Veranstaltungen",
    "nav.regional": "Regional",

    // Experience sub-nav
    "nav.hiking": "Wandern",
    "nav.cycling": "Radfahren",
    "nav.climbing": "Klettern",
    "nav.nature": "Natur & Foto-Spots",
    "nav.culture": "Kultur & Geschichte",
    "nav.families": "Familien",

    // Discover sub-nav
    "nav.salzhemmendorf": "Salzhemmendorf",
    "nav.coppenbruegge": "Coppenbrügge",
    "nav.map": "Interaktive Karte",

    // Plan sub-nav
    "nav.accommodation": "Unterkünfte",
    "nav.gastronomy": "Gastronomie",
    "nav.arrival": "Anreise & Parken",
    "nav.accessible": "Barrierefrei",

    // Common
    "common.learnMore": "Mehr erfahren",
    "common.backToHome": "Zurück zur Startseite",
    "common.contact": "Kontakt",
    "common.imprint": "Impressum",
    "common.privacy": "Datenschutz",
    "common.allRights": "Alle Rechte vorbehalten",

    // Slogan
    "brand.slogan": "Jeder Weg ist dein Erlebnis",
    "brand.name": "Ith-Region",

    // Homepage
    "home.heroTitle": "Jeder Weg ist dein Erlebnis",
    "home.heroSubtitle": "Entdecke die Ith-Region im Weserbergland – Wandern, Klettern, Radfahren und Natur pur in Salzhemmendorf & Coppenbrügge.",
    "home.discoverRegion": "Region entdecken",
    "home.viewActivities": "Aktivitäten ansehen",
    "home.whatToExperience": "Was möchtest du erleben?",
    "home.experienceDesc": "Die Ith-Region bietet für jeden das passende Erlebnis – ob sportlich aktiv, naturverbunden oder kulturinteressiert.",
    "home.aboutRegion": "Über die Region",
    "home.twoTowns": "Zwei Flecken, eine Region",
    "home.planVisit": "Plane deinen Besuch",
    "home.findAccommodation": "Unterkünfte finden",
    "home.residents": "Einwohner in der Region",

    // Footer
    "footer.experienceSection": "Erleben",
    "footer.planSection": "Besuch planen",
    "footer.contactSection": "Kontakt",
    "footer.copyright": "Ith-Region – Flecken Salzhemmendorf & Coppenbrügge",
  },
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.experience": "Experience",
    "nav.discover": "Discover",
    "nav.plan": "Plan",
    "nav.events": "Events",
    "nav.regional": "Regional",

    // Experience sub-nav
    "nav.hiking": "Hiking",
    "nav.cycling": "Cycling",
    "nav.climbing": "Climbing",
    "nav.nature": "Nature & Photo Spots",
    "nav.culture": "Culture & History",
    "nav.families": "Families",

    // Discover sub-nav
    "nav.salzhemmendorf": "Salzhemmendorf",
    "nav.coppenbruegge": "Coppenbrügge",
    "nav.map": "Interactive Map",

    // Plan sub-nav
    "nav.accommodation": "Accommodation",
    "nav.gastronomy": "Dining",
    "nav.arrival": "Getting Here",
    "nav.accessible": "Accessibility",

    // Common
    "common.learnMore": "Learn more",
    "common.backToHome": "Back to home",
    "common.contact": "Contact",
    "common.imprint": "Imprint",
    "common.privacy": "Privacy Policy",
    "common.allRights": "All rights reserved",

    // Slogan
    "brand.slogan": "Every Path is Your Adventure",
    "brand.name": "Ith-Region",

    // Homepage
    "home.heroTitle": "Every Path is Your Adventure",
    "home.heroSubtitle": "Discover the Ith-Region in the Weserbergland – hiking, climbing, cycling and pure nature in Salzhemmendorf & Coppenbrügge.",
    "home.discoverRegion": "Discover the region",
    "home.viewActivities": "View activities",
    "home.whatToExperience": "What would you like to experience?",
    "home.experienceDesc": "The Ith-Region offers the perfect experience for everyone – whether you're sporty, nature-loving or culturally curious.",
    "home.aboutRegion": "About the Region",
    "home.twoTowns": "Two Towns, One Region",
    "home.planVisit": "Plan Your Visit",
    "home.findAccommodation": "Find accommodation",
    "home.residents": "residents in the region",

    // Footer
    "footer.experienceSection": "Experience",
    "footer.planSection": "Plan Your Visit",
    "footer.contactSection": "Contact",
    "footer.copyright": "Ith-Region – Salzhemmendorf & Coppenbrügge",
  },
} as const;
