"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { educationData, Subject } from "@/data/education";
import { GraduationCap, School, X, BookOpen, ChevronRight } from "lucide-react";

export function Education() {
    const { t } = useLanguage();
    const [selectedDegree, setSelectedDegree] = useState<string | null>(null);

    const activeDegree = educationData.find(d => d.title === selectedDegree);

    const getStatusColor = (status: Subject["status"]) => {
        switch (status) {
            case "Promocionado":
                return "bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800";
            case "Aprobado":
                return "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-400 dark:border-blue-800";
            case "Equivalencia":
                return "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-400 dark:border-purple-800";
            case "Regular":
                return "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-400 dark:border-yellow-800";
            default:
                return "bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-700";
        }
    };

    return (
        <section className="py-24 bg-background" id="education">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-6xl mx-auto"
                >
                    <div className="flex items-center gap-2 mb-2 justify-center text-center">
                        <GraduationCap className="w-5 h-5 text-primary" />
                        <span className="text-primary font-medium tracking-wider uppercase text-sm">{t("education")}</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">{t("academicHistory")}</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {educationData.map((degree, index) => (
                            <motion.div
                                key={degree.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/50 transition-all flex flex-col items-start justify-between h-full"
                            >
                                <div className="space-y-4 w-full">
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <School className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground leading-tight mb-2 min-h-[56px] flex items-center">
                                            {degree.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm">{degree.institution}</p>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-medium">
                                        <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded">
                                            Plan {degree.plan}
                                        </span>
                                        <span className={`${degree.state === "Completo" ? "text-green-500" : "text-primary "}`}>
                                            {degree.state}
                                        </span>
                                    </div>
                                </div>

                                {degree.subjects.length > 0 && (
                                    <button
                                        onClick={() => setSelectedDegree(degree.title)}
                                        className="mt-6 w-full py-2 px-4 rounded-lg border border-border bg-transparent text-sm font-medium hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all flex items-center justify-center gap-2"
                                    >
                                        Ver detalles
                                        <ChevronRight className="w-4 h-4" />
                                    </button>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Modal */}
            <AnimatePresence>
                {selectedDegree && activeDegree && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedDegree(null)}
                            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-card border border-border w-full max-w-4xl max-h-[85vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-border flex justify-between items-start bg-secondary/30">
                                <div>
                                    <h3 className="text-2xl font-bold text-foreground">{activeDegree.title}</h3>
                                    <p className="text-muted-foreground">{activeDegree.institution}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedDegree(null)}
                                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                                >
                                    <X className="w-6 h-6 text-muted-foreground" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
                                    {activeDegree.subjects.map((subject, idx) => (
                                        <div key={idx} className="flex flex-col p-3 rounded-lg border border-border/50 bg-background hover:border-border transition-colors">
                                            <div className="flex justify-between items-start gap-2 mb-1">
                                                <span className="font-medium text-sm text-foreground/90 leading-tight">{subject.name}</span>
                                                {subject.grade && (
                                                    <span className="font-bold text-sm text-primary">{subject.grade}</span>
                                                )}
                                            </div>
                                            <div className="flex justify-between items-center mt-auto">
                                                <span className="text-xs text-muted-foreground">{subject.period}</span>
                                                <span className={`text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded border ${getStatusColor(subject.status)}`}>
                                                    {subject.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 border-t border-border bg-secondary/30 text-center text-xs text-muted-foreground">
                                {activeDegree.subjects.length} materias registradas
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
