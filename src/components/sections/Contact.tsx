"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Download } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { NeonButton } from "@/components/ui/neon-button";

export function Contact() {
    const { t } = useLanguage();

    const handleDownloadCV = () => {
        // Create a link to the static PDF file in the public folder
        const link = document.createElement('a');
        link.href = '/cv-laza.pdf';
        link.download = 'cv-laza.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className="py-24 relative" id="contact">
            <div className="container mx-auto px-4">
                <SectionHeading title={t("getInTouch")} subtitle="Contacto" />

                <div className="flex flex-col items-center max-w-4xl mx-auto">
                    {/* Contact Info */}
                    <GlassCard
                        className="w-full p-10 backdrop-blur-xl"
                        hoverEffect={false}
                    >
                        <h3 className="text-2xl font-bold mb-8 text-center text-white">Información de Contacto</h3>

                        <div className="grid md:grid-cols-3 gap-8">
                            <div className="flex flex-col items-center gap-4 text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg">
                                    <Mail className="w-7 h-7" />
                                </div>
                                <div className="flex flex-col items-center">
                                    <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">Email</p>
                                    <a href="mailto:lazamartinez1999@gmail.com" className="font-medium hover:text-primary transition-colors text-sm text-white break-all">
                                        lazamartinez1999@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg">
                                    <Phone className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">Teléfono</p>
                                    <a href="tel:+543764677571" className="font-medium hover:text-primary transition-colors text-sm text-white">
                                        +54 376 467-7571
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 text-center group">
                                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-primary border border-white/10 group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary/50 transition-all duration-300 shadow-lg">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-bold">Ubicación</p>
                                    <p className="font-medium text-sm text-white">Posadas, Misiones</p>
                                </div>
                            </div>
                        </div>
                    </GlassCard>

                    <div className="flex flex-col items-center gap-8 mt-12 w-full max-w-xl">
                        <motion.div
                            id="download-btn"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <NeonButton onClick={handleDownloadCV} className="px-10 py-4 text-lg">
                                <Download className="w-5 h-5 mr-2" />
                                {t("downloadCV")}
                            </NeonButton>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-slate-400 text-center text-base italic px-4"
                        >
                            "Estoy disponible para nuevas oportunidades de colaboración. Podés contactarme por los medios indicados."
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
