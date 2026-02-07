"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";
import { NeonButton } from "@/components/ui/neon-button";
import { GlassCard } from "@/components/ui/glass-card";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden" id="hero">
            {/* Background Spotlights */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -z-10 animate-pulse delay-1000" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center z-10">
                <div className="flex flex-col items-start text-left gap-6 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-bold tracking-wide uppercase shadow-[0_0_15px_-5px_var(--color-primary)]">
                            {t("role")}
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-white leading-[1.1]"
                    >
                        {t("greeting")} <span className="text-transparent bg-clip-text bg-[linear-gradient(to_right,#7c3aed,#db2777)] animate-gradient-x">
                            Martinez Lázaro Ezequiel
                        </span>
                        <br />
                        <span className="text-4xl md:text-6xl text-muted-foreground">{t("role")}.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed"
                    >
                        {t("heroDescription")}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mt-4"
                    >
                        <NeonButton variant="primary">
                            {t("viewProjects")}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </NeonButton>
                        <NeonButton variant="outline" onClick={() => window.open('https://github.com/lazamartinez', '_blank')}>
                            <Github className="w-4 h-4" />
                            GitHub
                        </NeonButton>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
                    className="relative flex justify-center lg:justify-end order-1 lg:order-2 perspective-1000"
                >
                    <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                        {/* Card Reflection/Glow Behind */}
                        <div className="absolute inset-0 bg-linear-to-tr from-primary to-secondary rounded-full blur-2xl opacity-40 -rotate-6 scale-95"></div>

                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl z-10 bg-black">
                            <Image
                                src="/profile.png"
                                alt="Martinez Lázaro Ezequiel"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Floating Badge */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -right-4 bottom-10 z-20"
                        >
                            <GlassCard className="px-4 py-2 flex items-center gap-2 !rounded-full !bg-black/60 !border-primary/50">
                                <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-xs font-bold text-white">{t("openToWork")}</span>
                            </GlassCard>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
