"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { useLanguage } from "@/lib/language-context";

const experienceData = [
    {
        title: "Estudiante Universitario",
        organization: "Universidad Nacional de Misiones",
        period: "2020 - Actualidad",
        description: "Cursando Licenciatura en Sistemas de Información y Analista en Sistemas de Computación. Formación académica avanzada en desarrollo de software, algoritmos y gestión de sistemas.",
        type: "education"
    },
    {
        title: "Atención al Cliente",
        organization: "Comercio - Shopping de Posadas",
        period: "2019 - 2022",
        description: "Experiencia en trato directo con clientes, resolución de problemas y trabajo en equipo en un entorno dinámico.",
        type: "work"
    },
    {
        title: "Maestro Mayor de Obras",
        organization: "E.P.E.T. N°1 (UNESCO)",
        period: "2013 - 2018",
        description: "Formación técnica secundaria completa. Título obtenido: Maestro Mayor de Obras.",
        type: "education"
    }
];

export function Experience() {
    const { t } = useLanguage();

    return (
        <section className="py-24 relative overflow-hidden" id="experience">
            <div className="container mx-auto px-4 relative z-10">
                <SectionHeading title={t("experienceTitle")} subtitle={t("experienceSubtitle")} />

                <div className="max-w-5xl mx-auto space-y-8">
                    {experienceData.map((item, index) => (
                        <GlassCard
                            key={index}
                            className="p-8 relative overflow-hidden group transition-all duration-300 hover:bg-white/10"
                            hoverEffect={true}
                        >
                            {/* Decorative Gradient Background on Hover */}
                            <div className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-2xl bg-black/40 backdrop-blur-xl flex items-center justify-center border border-white/10 shadow-lg group-hover:scale-110 group-hover:shadow-primary/25 transition-all duration-300 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        {item.type === "education" ?
                                            <GraduationCap className="w-7 h-7 text-primary group-hover:text-white transition-colors relative z-10" /> :
                                            <Briefcase className="w-7 h-7 text-secondary group-hover:text-white transition-colors relative z-10" />
                                        }
                                    </div>
                                </div>

                                <div className="flex-1 w-full">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                                        <div>
                                            <h3 className={`text-xl font-bold transition-colors ${item.type === 'education' ? 'text-primary' : 'text-white'} group-hover:text-white`}>
                                                {item.title}
                                            </h3>
                                            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium mt-1">
                                                <MapPin className="w-3.5 h-3.5 text-primary/70" />
                                                {item.organization}
                                            </div>
                                        </div>

                                        <span className="self-start md:self-center px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/5 border border-white/10 text-slate-400 group-hover:text-white group-hover:bg-primary/20 group-hover:border-primary/30 transition-all">
                                            {item.period}
                                        </span>
                                    </div>

                                    <p className="text-slate-300/90 text-sm leading-relaxed mt-4 border-t border-white/5 pt-4">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </GlassCard>
                    ))}
                </div>
            </div>
        </section>
    );
}
