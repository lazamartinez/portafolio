"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { ImageCarousel } from "@/components/ui/ImageCarousel";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { TechBadge } from "@/components/ui/tech-badge";
import { NeonButton } from "@/components/ui/neon-button";

const projects = [
    {
        title: "CUBOOLAP",
        description: "Sistema OLAP multidimensional con visualización 2.5D interactiva. Incluye diagnóstico inteligente de esquemas, modelado de dimensiones, carga optimizada de datos y generación de reportes.",
        tags: ["C++20", "Qt 6.5", "PostgreSQL", "OLAP", "Data Visualization"],
        github: "https://github.com/lazamartinez/CUBOOLAP",
        demo: "#",
        images: [
            "/projects/cuboolap/slide1.png",
            "/projects/cuboolap/slide2.png",
            "/projects/cuboolap/slide3.png"
        ]
    },
    {
        title: "Sistema Distribuido IoT",
        description: "Plataforma de monitoreo de consumo eléctrico en tiempo real. Arquitectura distribuida para la recolección, procesamiento y visualización de datos energéticos.",
        tags: ["Go", "Node.js", "Express", "MQTT", "Firebase", "ESP32"],
        github: "https://github.com/lazamartinez/Monitoreo-Consumo",
        demo: "#",
        images: []
    }
];

export function Projects() {
    const { t } = useLanguage();

    return (
        <section className="py-24 relative" id="projects">
            <div className="container mx-auto px-4">
                <SectionHeading title={t("featuredProjects")} subtitle={t("projects")} />

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project, index) => (
                        <GlassCard
                            key={index}
                            className="flex flex-col h-full !p-0 border-white/10 bg-white/5"
                            hoverEffect={true}
                        >
                            <div className="relative w-full h-56 bg-black/50 overflow-hidden group">
                                {project.images && project.images.length > 0 ? (
                                    <ImageCarousel images={project.images} />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/10 to-secondary/10">
                                        <Code className="w-16 h-16 text-primary/40" />
                                    </div>
                                )}
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-linear-to-t from-[#020617] to-transparent opacity-60" />
                            </div>

                            <div className="p-8 flex flex-col flex-1 relative z-10">
                                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-300 mb-6 line-clamp-3 text-sm leading-relaxed">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                    {project.tags.map((tag) => (
                                        <TechBadge key={tag} name={tag} />
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                                        <NeonButton variant="outline" className="w-full justify-center text-xs h-10">
                                            <Github className="w-4 h-4" /> {t("sourceCode")}
                                        </NeonButton>
                                    </a>
                                    {project.demo !== "#" && (
                                        <a href={project.demo} className="flex-1">
                                            <NeonButton variant="primary" className="w-full justify-center text-xs h-10">
                                                <ExternalLink className="w-4 h-4" /> {t("liveDemo")}
                                            </NeonButton>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
