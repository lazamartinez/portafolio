"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { Code2, Database, Layout, Terminal, Server, Cpu, User } from "lucide-react";

const skillCategories = [
    {
        name: "Desarrollo",
        icon: <Code2 className="w-5 h-5" />,
        skills: ["Software Engineering", "System Analysis", "Algorithms", "OOP", "Design Patterns"]
    },
    {
        name: "Frontend & Backend",
        icon: <Layout className="w-5 h-5" />,
        skills: ["React", "Next.js", "Node.js", "C++", "Go", "TypeScript"]
    },
    {
        name: "Datos & Infraestructura",
        icon: <Database className="w-5 h-5" />,
        skills: ["SQL", "PostgreSQL", "Firebase", "AWS", "Docker", "Git"]
    }
];

export function About() {
    const { t } = useLanguage();

    return (
        <section className="py-24 bg-[#0284c7] text-white" id="about">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex flex-col lg:flex-row gap-12 items-start">
                        {/* Professional Profile Card */}
                        <div className="flex-1 w-full lg:w-3/5">
                            <div className="flex items-center gap-2 mb-6">
                                <User className="w-5 h-5 text-white/90" />
                                <span className="text-white/90 font-medium tracking-wider uppercase text-sm">Perfil Profesional</span>
                            </div>

                            <motion.div
                                className="bg-white/10 border border-white/20 rounded-2xl p-8 shadow-sm relative overflow-hidden backdrop-blur-sm"
                                whileHover={{ scale: 1.01 }}
                                transition={{ duration: 0.2 }}
                            >
                                {/* Decorative background element */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -z-10" />

                                <div className="prose prose-lg text-white/90 leading-relaxed space-y-4">
                                    <p className="font-medium text-white text-xl">
                                        Analista en Sistemas de Computación, con formación universitaria en Sistemas de Información, enfocado en el desarrollo y la mejora de soluciones de software orientadas a procesos y requerimientos reales del negocio.
                                    </p>
                                    <p>
                                        Poseo una base técnica sólida en programación, algoritmos y estructuras de datos, bases de datos, ingeniería de software, sistemas operativos y redes, lo que me permite abordar los sistemas de manera integral y comprender su funcionamiento en diferentes niveles. He participado en el análisis de requerimientos, diseño lógico y desarrollo de soluciones, interviniendo en diversas etapas del ciclo de vida del software.
                                    </p>
                                    <p>
                                        Realicé proyectos académicos y sistemas de gestión, aplicando programación orientada a objetos, buenas prácticas de desarrollo y criterios de diseño mantenible. Mi perfil es principalmente backend, con conocimientos en frontend, y un marcado interés en la automatización de procesos, optimización de flujos de trabajo y mejora continua de soluciones tecnológicas.
                                    </p>
                                    <p>
                                        Me destaco por el pensamiento analítico, la responsabilidad y la capacidad de aprendizaje constante, con el objetivo de integrarme a equipos de desarrollo y aportar valor mientras continúo creciendo profesionalmente.
                                    </p>
                                </div>
                            </motion.div>
                        </div>

                        {/* Skills Categories */}
                        <div className="flex-1 w-full lg:w-2/5 space-y-8 lg:pt-12">
                            {skillCategories.map((category, idx) => (
                                <motion.div
                                    key={category.name}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                >
                                    <div className="flex items-center gap-2 mb-4 text-white font-semibold">
                                        <div className="p-2 bg-white/10 rounded-lg text-white">
                                            {category.icon}
                                        </div>
                                        {category.name}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-white/10 border border-white/20 rounded-md text-sm text-white/90 hover:bg-white hover:text-[#0284c7] transition-colors shadow-sm"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
