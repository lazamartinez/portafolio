"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";
import { NeonButton } from "@/components/ui/neon-button";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "es" ? "en" : "es");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: t("about"), href: "#about" },
        { name: t("projects"), href: "#projects" },
        { name: t("contact"), href: "#contact" },
    ];

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '/cv-laza.pdf';
        link.download = 'cv-laza.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-4 left-0 right-0 z-50 transition-all duration-300 mx-auto max-w-5xl rounded-full px-6 overflow-hidden",
                    isScrolled
                        ? "bg-black/40 backdrop-blur-xl border border-white/10 shadow-lg py-3"
                        : "bg-transparent py-5"
                )}
            >
                <div className="flex items-center justify-between relative z-10">
                    <Link href="/" className="font-heading font-bold text-xl tracking-tight flex items-center gap-2">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden border border-white/10 shadow-lg shadow-primary/20">
                            <Image
                                src="/profile.png"
                                alt="Profile"
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="hidden sm:inline">Martinez <span className="text-primary">Lázaro Ezequiel</span></span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-1">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-1/2 transition-all duration-300" />
                            </Link>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="text-xs font-medium text-muted-foreground hover:text-white transition-colors"
                        >
                            {language === "es" ? "EN" : "ES"}
                        </button>

                        <div className="flex items-center gap-3 border-l border-white/10 pl-4">
                            <Link href="https://github.com/lazamartinez" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-white transition-colors">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <a href="mailto:lazamartinez1999@gmail.com" className="text-muted-foreground hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>

                        <NeonButton onClick={handleDownloadCV} variant="primary" className="px-5 py-2 text-xs ml-2">
                            {t("downloadCV")} <FileText className="w-3 h-3 ml-1" />
                        </NeonButton>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Scroll Progress Border */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary via-secondary to-primary origin-left"
                    style={{ scaleX }}
                />
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-24 px-6 flex flex-col items-center justify-center gap-8 md:hidden"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-2xl font-bold text-white hover:text-primary transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <div className="flex gap-6 mt-8">
                            <Link href="https://github.com/lazamartinez" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                <Github className="w-6 h-6" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="p-4 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
