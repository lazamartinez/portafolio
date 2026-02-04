"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, GraduationCap } from "lucide-react";

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
    return (
        <section className="py-24 bg-[#0284c7] text-white overflow-hidden relative" id="experience">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-10 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-white/90 text-xs font-semibold tracking-wider uppercase mb-4 backdrop-blur-sm">
                            Experiencia
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Mi Trayectoria</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {experienceData.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-white/10 border border-white/20 rounded-2xl p-8 backdrop-blur-md hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
                            >
                                <div className="flex items-center justify-between mb-6">
                                    <div className="p-3 bg-white/10 rounded-xl text-white group-hover:scale-110 transition-transform duration-300">
                                        {item.type === "education" ? <GraduationCap className="w-6 h-6" /> : <Briefcase className="w-6 h-6" />}
                                    </div>
                                    <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full text-white/90">
                                        {item.period}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>

                                <div className="flex items-center gap-2 text-white/80 mb-4 text-sm font-medium">
                                    <MapPin className="w-4 h-4" />
                                    {item.organization}
                                </div>

                                <p className="text-white/80 text-sm leading-relaxed mt-auto">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
