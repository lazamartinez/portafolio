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
        // Hero
        greeting: "Soy",
        role: "Desarrollador Backend & Analista en Sistemas",
        heroDescription: "Desarrollo aplicaciones y plataformas web de alto nivel con tecnologías líderes del mercado.",
        openToWork: "Disponible para trabajar",
        // About
        profileSummary: "Resumen Profesional",
        bio1: "Soy desarrollador de software con enfoque en backend, actualmente finalizando las carreras de Analista en Sistemas y Licenciatura en Sistemas de Información. Me dedico a crear aplicaciones y sistemas que transforman necesidades reales en soluciones digitales claras, eficientes y escalables.",
        bio2: "Trabajo principalmente en el desarrollo del lado servidor, bases de datos y lógica de negocio, participando en el análisis de requerimientos, diseño y construcción de aplicaciones. He desarrollado sistemas de gestión y proyectos académicos aplicando buenas prácticas, programación orientada a objetos y diseño mantenible.",
        bio3: "Tengo conocimientos en frontend que me permiten comprender el producto de forma integral, y un fuerte interés en la automatización de procesos, optimización de flujos de trabajo y mejora continua. Me caracterizo por el pensamiento analítico, la responsabilidad y el aprendizaje constante, buscando aportar valor real en cada proyecto y seguir creciendo como profesional.",
        bio4: "",
        catDev: "Desarrollo",
        catFrontend: "Frontend & Backend",
        catData: "Datos & Infraestructura",
        // Projects
        sourceCode: "Código Fuente",
        liveDemo: "Demo en Vivo",
        // Experience & Education
        experienceTitle: "Mi Trayectoria",
        experienceSubtitle: "Experiencia",
        educationTitle: "Historial Académico",
        educationSubtitle: "Educación",
        viewDetails: "Ver detalles",
        subjectsRegistered: "materias registradas",
        plan: "Período",
        // Statuses
        promoted: "Promocionado",
        approved: "Aprobado",
        equivalence: "Equivalencia",
        regular: "Regular",
        // General
        description: "Soy Martinez Lázaro Ezequiel, un Desarrollador Full Stack apasionado por crear aplicaciones web hermosas, funcionales y de alto rendimiento.",
        techStack: "Tecnologías",
        featuredProjects: "Proyectos Destacados",
        getInTouch: "Contacto",
        letsWork: "Trabajemos Juntos",
        sayHello: "Saludar",
        rights: "Todos los derechos reservados.",
        contactInfo: "Información de Contacto",
        location: "Ubicación",
        phone: "Teléfono",
        email: "Email"
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
        // Hero
        greeting: "I am",
        role: "Backend Developer & Systems Analyst",
        heroDescription: "Developing high-level web applications and platforms with market-leading technologies.",
        openToWork: "Open to Work",
        // About
        profileSummary: "Professional Summary",
        bio1: "I am a software developer focused on backend, currently finishing my degrees in Systems Analysis and Information Systems. I dedicate myself to creating applications and systems that transform real needs into clear, efficient, and scalable digital solutions.",
        bio2: "I work primarily on server-side development, databases, and business logic, participating in requirements analysis, design, and application building. I have developed management systems and academic projects applying best practices, object-oriented programming, and maintainable design.",
        bio3: "I have frontend knowledge that allows me to understand the product comprehensively, and a strong interest in process automation, workflow optimization, and continuous improvement. I am characterized by analytical thinking, responsibility, and constant learning, seeking to add real value to every project and continue growing as a professional.",
        bio4: "",
        catDev: "Development",
        catFrontend: "Frontend & Backend",
        catData: "Data & Infrastructure",
        // Projects
        sourceCode: "Source Code",
        liveDemo: "Live Demo",
        // Experience & Education
        experienceTitle: "My Journey",
        experienceSubtitle: "Experience",
        educationTitle: "Academic History",
        educationSubtitle: "Education",
        viewDetails: "View Details",
        subjectsRegistered: "subjects registered",
        plan: "Period",
        // Statuses
        promoted: "Promoted",
        approved: "Approved",
        equivalence: "Equivalence",
        regular: "Regular",
        // General
        description: "I'm Martinez Lázaro Ezequiel, a Full Stack Developer passionate about creating beautiful, functional, and performant web applications.",
        techStack: "Tech Stack",
        featuredProjects: "Featured Projects",
        getInTouch: "Get In Touch",
        letsWork: "Let's work together",
        sayHello: "Say Hello",
        rights: "All rights reserved.",
        contactInfo: "Contact Information",
        location: "Location",
        phone: "Phone",
        email: "Email"
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
