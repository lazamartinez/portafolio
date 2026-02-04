"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Github } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import Image from "next/image";

export function Hero() {
    const { t } = useLanguage();

    return (
        <section className="min-h-[calc(100vh-80px)] flex items-center py-20 overflow-hidden relative" id="hero">
            {/* Background Decor */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full -z-10" />

            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center z-10">
                <div className="flex flex-col items-start text-left gap-6 order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-primary text-sm font-medium">
                            Desarrollador Backend & Analista en Sistemas
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold font-heading tracking-tight text-foreground"
                    >
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-foreground to-primary/80">
                            Martinez Lázaro Ezequiel
                        </span>
                        <br />
                        <span className="text-foreground">Desarrollador Backend & Analista en Sistemas.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted-foreground max-w-2xl"
                    >
                        Construyendo sistemas escalables y soluciones robustas.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row gap-4 mt-2"
                    >
                        <a
                            href="#projects"
                            className="group px-8 py-3 bg-primary text-primary-foreground font-medium rounded-full flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25"
                        >
                            {t("viewProjects")}
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="https://github.com/lazamartinez"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 border border-border bg-background text-foreground font-medium rounded-full flex items-center gap-2 hover:bg-secondary transition-all"
                        >
                            <Github className="w-4 h-4" />
                            GitHub
                        </a>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative flex justify-center lg:justify-end order-1 lg:order-2"
                >
                    <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px]">
                        <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-3xl opacity-60"></div>
                        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-background shadow-2xl">
                            <Image
                                src="/profile.png"
                                alt="Martinez Lázaro Ezequiel"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="absolute bottom-10 -left-6 bg-background/90 backdrop-blur-sm border border-border p-4 rounded-xl shadow-lg"
                        >
                            <span className="block text-sm font-bold text-foreground">Desarrollo en sistemas</span>
                            <span className="text-xs text-muted-foreground">Analista en Sistemas</span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
