"use client";

import React, { createContext, useContext, useState } from "react";

type Language = "es" | "en";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations = {
    es: {
        about: "Sobre Mí",
        projects: "Proyectos",
        education: "Educación",
        academicHistory: "Historial Académico",
        status: "Estado",
        contact: "Contacto",
        downloadCV: "Descargar CV",
        viewProjects: "Ver Proyectos",
        available: "Disponible para trabajar",
        building: "Construyendo Experiencias",
        digital: "Digitales",
        description: "Soy Martinez Lazaro Ezequiel, un Desarrollador Full Stack apasionado por crear aplicaciones web hermosas, funcionales y de alto rendimiento.",
        techStack: "Tecnologías",
        featuredProjects: "Proyectos Destacados",
        getInTouch: "Contacto",
        letsWork: "Trabajemos Juntos",
        sayHello: "Saludar",
        rights: "Todos los derechos reservados."
    },
    en: {
        about: "About",
        projects: "Projects",
        education: "Education",
        academicHistory: "Academic History",
        status: "Status",
        contact: "Contact",
        downloadCV: "Download CV",
        viewProjects: "View Projects",
        available: "Available for Hire",
        building: "Building Digital",
        digital: "Experiences",
        description: "I'm Martinez Lazaro Ezequiel, a Full Stack Developer passionate about creating beautiful, functional, and performant web applications.",
        techStack: "Tech Stack",
        featuredProjects: "Featured Projects",
        getInTouch: "Get In Touch",
        letsWork: "Let's work together",
        sayHello: "Say Hello",
        rights: "All rights reserved."
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("es");

    const t = (key: string) => {
        // @ts-expect-error - simple key access
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
