"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/lib/language-context";
import { educationData, Subject } from "@/data/education";
import { GraduationCap, School, X, ChevronRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { SectionHeading } from "@/components/ui/section-heading";

export function Education() {
    const { t } = useLanguage();
    const [selectedDegree, setSelectedDegree] = useState<string | null>(null);

    const activeDegree = educationData.find(d => d.title === selectedDegree);

    const getStatusColor = (status: Subject["status"]) => {
        switch (status) {
            case "Promocionado":
                return "bg-green-500/10 text-green-400 border-green-500/20";
            case "Aprobado":
                return "bg-blue-500/10 text-blue-400 border-blue-500/20";
            case "Equivalencia":
                return "bg-purple-500/10 text-purple-400 border-purple-500/20";
            case "Regular":
                return "bg-yellow-500/10 text-yellow-400 border-yellow-500/20";
            default:
                return "bg-slate-500/10 text-slate-400 border-slate-500/20";
        }
    };

    return (
        <section className="py-24" id="education">
            <div className="container mx-auto px-4">
                <SectionHeading title={t("academicHistory")} subtitle={t("education")} />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {educationData.map((degree, index) => (
                        <GlassCard
                            key={degree.title}
                            className="p-8 flex flex-col items-start justify-between h-full group"
                            hoverEffect={true}
                        >
                            <div className="space-y-6 w-full">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center text-primary group-hover:scale-110 transition-transform border border-white/10 group-hover:border-primary/50 group-hover:shadow-[0_0_20px_-10px_var(--color-primary)]">
                                    <School className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white leading-tight mb-3 min-h-[56px] flex items-center">
                                        {degree.title}
                                    </h3>
                                    <p className="text-slate-400 text-sm font-medium">{degree.institution}</p>
                                </div>
                                <div className="flex items-center gap-3 text-xs font-medium">
                                    <span className="bg-white/10 text-white px-2 py-1 rounded border border-white/10">
                                        {t("plan")} {degree.plan}
                                    </span>
                                    <span className={`${degree.state === "Completo" ? "text-green-400" : "text-primary"} uppercase tracking-wider`}>
                                        {degree.state}
                                    </span>
                                </div>
                            </div>

                            {degree.subjects.length > 0 && (
                                <button
                                    onClick={() => setSelectedDegree(degree.title)}
                                    className="mt-8 w-full py-3 px-4 rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-white hover:bg-primary hover:border-primary transition-all flex items-center justify-center gap-2 group/btn"
                                >
                                    {t("viewDetails")}
                                    <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            )}
                        </GlassCard>
                    ))}
                </div>
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
                            className="absolute inset-0 bg-black/80 backdrop-blur-md"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative bg-[#0b1121] border border-white/10 w-full max-w-4xl max-h-[85vh] rounded-3xl shadow-2xl flex flex-col overflow-hidden"
                        >
                            {/* Header */}
                            <div className="p-6 border-b border-white/10 flex justify-between items-start bg-white/5">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{activeDegree.title}</h3>
                                    <p className="text-slate-400">{activeDegree.institution}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedDegree(null)}
                                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                                >
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            {/* Content */}
                            <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {activeDegree.subjects.map((subject, idx) => (
                                        <div key={idx} className="flex flex-col p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors">
                                            <div className="flex justify-between items-start gap-2 mb-2">
                                                <span className="font-medium text-sm text-slate-200 leading-tight">{subject.name}</span>
                                                {subject.grade && (
                                                    <span className="font-bold text-sm text-primary">{subject.grade}</span>
                                                )}
                                            </div>
                                            <div className="flex justify-between items-center mt-auto">
                                                <span className="text-xs text-slate-500">{subject.period}</span>
                                                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-0.5 rounded border ${getStatusColor(subject.status)}`}>
                                                    {subject.status}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-4 border-t border-white/10 bg-white/5 text-center text-xs text-slate-500">
                                {activeDegree.subjects.length} {t("subjectsRegistered")}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
