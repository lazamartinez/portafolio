"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { Code2, Database, Layout, Terminal, Server, Cpu, User } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

// skillCategories moved inside component

export function About() {
    const { t } = useLanguage();

    const skillCategories = [
        {
            name: t("catDev"),
            icon: <Code2 className="w-5 h-5" />,
            skills: ["Software Engineering", "System Analysis", "Algorithms", "OOP", "Design Patterns"]
        },
        {
            name: t("catFrontend"),
            icon: <Layout className="w-5 h-5" />,
            skills: ["React", "Next.js", "Node.js", "C++", "Go", "TypeScript"]
        },
        {
            name: t("catData"),
            icon: <Database className="w-5 h-5" />,
            skills: ["SQL", "PostgreSQL", "Firebase", "AWS", "Docker", "Git"]
        }
    ];

    return (
        <section className="py-24 relative overflow-hidden" id="about">
            <div className="container mx-auto px-4">
                <SectionHeading title={t("about")} subtitle="Perfil Profesional" />

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
                            <GlassCard className="p-8 h-full" hoverEffect={false}>
                                <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                                    <div className="p-2 rounded-lg bg-primary/20 text-primary">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <span className="text-white font-bold tracking-wider uppercase text-sm">{t("profileSummary")}</span>
                                </div>

                                <div className="prose prose-lg text-slate-300 leading-relaxed space-y-4">
                                    <p className="font-medium text-white text-lg">
                                        {t("bio1")}
                                    </p>
                                    <p className="text-sm">
                                        {t("bio2")}
                                    </p>
                                    <p className="text-sm">
                                        {t("bio3")}
                                    </p>
                                </div>
                            </GlassCard>
                        </div>

                        {/* Skills Categories */}
                        <div className="flex-1 w-full lg:w-2/5 space-y-6">
                            {skillCategories.map((category, idx) => (
                                <GlassCard
                                    key={category.name}
                                    className="p-6"
                                    hoverEffect={true}
                                >
                                    <div className="flex items-center gap-3 mb-4 text-white font-semibold">
                                        <div className="p-2 bg-secondary/20 rounded-lg text-secondary">
                                            {category.icon}
                                        </div>
                                        {category.name}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map(skill => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-xs text-slate-300 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-colors cursor-default"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </GlassCard>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
