"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

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
        <section className="py-24 bg-background" id="projects">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary font-medium tracking-wider uppercase text-sm">{t("projects")}</span>
                    <h2 className="text-3xl md:text-4xl font-bold mt-2">{t("featuredProjects")}</h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-card border border-primary/10 rounded-xl overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5 flex flex-col"
                        >
                            {project.images && project.images.length > 0 ? (
                                <ImageCarousel images={project.images} />
                            ) : (
                                <div className="aspect-video bg-secondary/50 relative overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                                    <Code className="w-12 h-12 text-primary/40 group-hover:text-primary/80 transition-all group-hover:scale-110" />
                                </div>
                            )}

                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-3 text-sm">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-secondary text-xs rounded-md text-secondary-foreground font-medium">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-border">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                        <Github className="w-4 h-4" /> Code
                                    </a>
                                    {project.demo !== "#" && (
                                        <a href={project.demo} className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
                                            <ExternalLink className="w-4 h-4" /> Live Demo
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
