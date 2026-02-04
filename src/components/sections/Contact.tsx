"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Download } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export function Contact() {
    const { t } = useLanguage();

    const handleDownloadPDF = async () => {
        // Dynamic import to avoid SSR issues
        const html2pdf = (await import('html2pdf.js')).default;

        const element = document.body;
        const opt = {
            margin: 0,
            filename: 'CV_Lazaro_Martinez.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Temporarily hide the download button for the PDF
        const btn = document.getElementById('download-btn');
        if (btn) btn.style.display = 'none';

        html2pdf().set(opt).from(element).save().then(() => {
            if (btn) btn.style.display = 'flex';
        });
    };

    return (
        <section className="py-24 bg-[#0B1120] text-white" id="contact">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white tracking-tight">{t("getInTouch")}</h2>
                    </div>

                    <div className="flex flex-col items-center">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="space-y-8 bg-white/5 p-8 rounded-2xl border border-white/10 w-full max-w-2xl backdrop-blur-sm"
                        >
                            <h3 className="text-xl font-bold mb-6 text-center text-white/90">Información de Contacto</h3>

                            <div className="flex flex-col md:flex-row justify-around gap-8">
                                <div className="flex flex-col items-center gap-4 text-center group">
                                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Mail className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/60 mb-1 uppercase tracking-wider font-semibold">Email</p>
                                        <a href="mailto:lazamartinez1999@gmail.com" className="font-medium hover:text-blue-400 transition-colors text-lg text-white">
                                            lazamartinez1999@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex flex-col items-center gap-4 text-center group">
                                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Phone className="w-7 h-7" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-white/60 mb-1 uppercase tracking-wider font-semibold">Teléfono</p>
                                        <a href="tel:+543764677571" className="font-medium hover:text-blue-400 transition-colors text-lg text-white">
                                            +54 376 467-7571
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col items-center gap-4 text-center pt-8 border-t border-white/10 group">
                                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <p className="text-sm text-white/60 mb-1 uppercase tracking-wider font-semibold">Ubicación</p>
                                    <p className="font-medium text-lg text-white">Posadas, Misiones</p>
                                </div>
                            </div>
                        </motion.div>

                        <div className="flex flex-col items-center gap-8 mt-12 w-full max-w-2xl">
                            <motion.button
                                id="download-btn"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                onClick={handleDownloadPDF}
                                className="group flex items-center gap-3 bg-white text-[#0B1120] px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-100 transition-all shadow-lg hover:shadow-white/20"
                            >
                                <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                                Descargar CV
                            </motion.button>

                            <motion.p
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.3 }}
                                className="text-white/60 text-center text-lg font-medium italic px-4"
                            >
                                "Estoy disponible para nuevas oportunidades de colaboración. Podés contactarme por los medios indicados."
                            </motion.p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
