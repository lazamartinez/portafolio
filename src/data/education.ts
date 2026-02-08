export interface Subject {
    name: string;
    grade?: number;
    status: "Aprobado" | "Promocionado" | "Regular" | "Equivalencia" | "Pendiente";
    year?: number; // Optional, as it's not strictly provided for all, but we can infer or leave out
    period?: string;
}

export interface Degree {
    title: string;
    institution: string;
    plan: string;
    state: string; // e.g., "En curso", "Completo"
    subjects: Subject[];
}

export const educationData: Degree[] = [
    {
        title: "Licenciatura en Sistemas de Información",
        institution: "Universidad Nacional de Misiones",
        plan: "2020 - 2026",
        state: "En curso",
        subjects: [
            { name: "Matemática I", grade: 6, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Algoritmos y Estructuras de Datos I", grade: 8, status: "Promocionado", period: "1° anual" },
            { name: "Introducción a la Informática", grade: 8, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Sistemas y Organización", grade: 7, status: "Promocionado", period: "1er. Cuatrimestre" },
            { name: "Inglés Técnico I", grade: 9, status: "Aprobado", period: "1° anual" },
            { name: "Matemática II", grade: 6, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Estadística I", grade: 9, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Arquitectura de Computadoras", grade: 8, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Matemática III", status: "Regular", period: "1er. Cuatrimestre" },
            { name: "Estadística II", grade: 8, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Algoritmos y Estructuras de Datos II", grade: 8, status: "Promocionado", period: "1er. Cuatrimestre" },
            { name: "Seminario de Lenguajes I", grade: 9, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Inglés Técnico II", grade: 9, status: "Aprobado", period: "1° anual" },
            { name: "Sistemas Operativos", grade: 8, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Seminario de Lenguajes II", grade: 7, status: "Promocionado", period: "2do. Cuatrimestre" },
            { name: "Ingeniería de Software I", grade: 7, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Sistemas Administrativos", grade: 7, status: "Promocionado", period: "2do. Cuatrimestre" },
            { name: "Introducción a las Bases de Datos", grade: 9, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Programación Orientada a Objetos I", grade: 7, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Comunicación y Redes I", grade: 9, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Ingeniería de Software II", grade: 7, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Base de Datos", grade: 9, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Matemática IV", status: "Pendiente", period: "1er. Cuatrimestre" },
            { name: "Investigación Operativa", status: "Pendiente", period: "2do. Cuatrimestre" },
            { name: "Programación Orientada a Objetos II", grade: 9, status: "Promocionado", period: "2do. Cuatrimestre" },
            { name: "Proyecto de Software", status: "Pendiente", period: "2do. Cuatrimestre" },
            { name: "Comunicación y Redes II", grade: 9, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Sistemas de Información", grade: 8, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Ingeniería de Software III", grade: 9, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Diseño y Aplicaciones en la Web", grade: 9, status: "Promocionado", period: "1er. Cuatrimestre" },
            { name: "Sistemas Distribuidos", status: "Pendiente", period: "1er. Cuatrimestre" },
            { name: "Teoría de la Computación", grade: 8, status: "Promocionado", period: "1er. Cuatrimestre" },
            { name: "Modelo y Simulación", status: "Pendiente", period: "1er. Cuatrimestre" },
            { name: "Metodología de la Investigación", status: "Pendiente", period: "2do. Cuatrimestre" },
            { name: "Inteligencia Artificial y Sistemas Expertos", status: "Pendiente", period: "2do. Cuatrimestre" },
            { name: "Auditoría en Informática", grade: 10, status: "Promocionado", period: "2do. Cuatrimestre" },
            { name: "Paradigmas y Lenguajes de Programación", status: "Pendiente", period: "2do. Cuatrimestre" },
            { name: "Planeamiento y Control de Gestión", status: "Pendiente", period: "1er. Cuatrimestre" },
            { name: "Recursos Humanos", status: "Pendiente", period: "2do. Cuatrimestre" },
            { name: "Tesis de Grado", status: "Pendiente", period: "1° anual" },
        ]
    },
    {
        title: "Analista en Sistemas de Computación",
        institution: "Universidad Nacional de Misiones",
        plan: "2020 - 2026",
        state: "En curso",
        subjects: [
            { name: "Algoritmo y Estructura de Datos I", grade: 8, status: "Equivalencia", period: "1° anual" },
            { name: "Inglés Técnico I", grade: 9, status: "Equivalencia", period: "1° anual" },
            { name: "Matemática I", grade: 6, status: "Promocionado", period: "1er. Cuatrimestre" },
            { name: "Introducción a la Informática", grade: 8, status: "Equivalencia", period: "1er. Cuatrimestre" },
            { name: "Sistemas Administrativos I", grade: 7, status: "Equivalencia", period: "1er. Cuatrimestre" },
            { name: "Arquitectura de Computadoras", grade: 8, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Matemática II", grade: 6, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Estadística I", grade: 9, status: "Equivalencia", period: "2do. Cuatrimestre" },
            { name: "Algoritmo y Estructura de Datos II", grade: 8, status: "Equivalencia", period: "1er. Cuatrimestre" },
            { name: "Inglés Técnico II", grade: 9, status: "Equivalencia", period: "1° anual" },
            { name: "Matemática III", status: "Regular", period: "1er. Cuatrimestre" },
            { name: "Seminario de Lenguajes I", grade: 9, status: "Equivalencia", period: "1er. Cuatrimestre" },
            { name: "Estadística II", grade: 8, status: "Equivalencia", period: "1er. Cuatrimestre" },
            { name: "Introducción a las Bases de Datos", grade: 9, status: "Equivalencia", period: "2do. Cuatrimestre" },
            { name: "Seminario de Lenguajes II", grade: 7, status: "Equivalencia", period: "2do. Cuatrimestre" },
            { name: "Introducción al Análisis de Sistemas", grade: 7, status: "Equivalencia", period: "2do. Cuatrimestre" },
            { name: "Sistemas Administrativos II", grade: 7, status: "Equivalencia", period: "2do. Cuatrimestre" },
            { name: "Sistemas Operativos", grade: 8, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Análisis de Sistemas", grade: 7, status: "Equivalencia", period: "1er. Cuatrimestre" },
            { name: "Actualidad Informática", grade: 9, status: "Equivalencia", period: "1er. Cuatrimestre" },
            { name: "Base de Datos", grade: 9, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Comunicación y Redes I", grade: 9, status: "Aprobado", period: "1er. Cuatrimestre" },
            { name: "Sistemas de Información", grade: 8, status: "Equivalencia", period: "2do. Cuatrimestre" },
            { name: "Comunicación y Redes II", grade: 9, status: "Aprobado", period: "2do. Cuatrimestre" },
            { name: "Investigación Operativa", status: "Pendiente", period: "2do. Cuatrimestre" },
            { name: "Trabajo Final", status: "Pendiente", period: "2do. Cuatrimestre" },
        ]
    },
    {
        title: "Maestro Mayor de Obras",
        institution: "E.P.E.T. N°1 (UNESCO)",
        plan: "2013-2018",
        state: "Completo",
        subjects: []
    }
];
