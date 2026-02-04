"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Github, Linkedin, Mail, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/language-context";

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const toggleLanguage = () => {
        setLanguage(language === "es" ? "en" : "es");
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: t("about"), href: "#about" },
        { name: t("projects"), href: "#projects" },
        { name: t("contact"), href: "#contact" },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-md border-b border-border h-16"
                    : "bg-transparent h-20"
            )}
        >
            <div className="container mx-auto px-4 h-full flex items-center justify-between">
                <Link href="/" className="font-heading font-bold text-xl tracking-tight">
                    Martinez <span className="text-primary">Lázaro Ezequiel</span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hover:glow"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 ml-4 border-l border-border pl-4">
                        <button
                            onClick={toggleLanguage}
                            className="px-3 py-1 rounded-full border border-border bg-secondary/50 text-xs font-medium hover:border-primary/50 transition-colors flex items-center gap-2"
                        >
                            <Globe className="w-3 h-3" />
                            {language === "es" ? "English" : "Español"}
                        </button>

                        <Link href="https://github.com/lazamartinez" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Github className="w-5 h-5" />
                        </Link>
                        <Link href="https://linkedin.com" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                            <Linkedin className="w-5 h-5" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 text-foreground"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden p-4 flex flex-col gap-4 shadow-2xl"
                    >
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-lg font-medium text-foreground py-2 border-b border-border/50 last:border-0"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}

                        <button
                            onClick={() => {
                                toggleLanguage();
                                setIsMobileMenuOpen(false);
                            }}
                            className="flex items-center gap-2 text-sm font-medium text-primary py-2"
                        >
                            <Globe className="w-4 h-4" />
                            {language === "es" ? "Switch to English" : "Cambiar a Español"}
                        </button>

                        <div className="flex gap-4 mt-2">
                            <Link href="https://github.com/lazamartinez" target="_blank" className="p-2 bg-secondary rounded-full">
                                <Github className="w-5 h-5" />
                            </Link>
                            <Link href="https://linkedin.com" target="_blank" className="p-2 bg-secondary rounded-full">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="mailto:contact@example.com" className="p-2 bg-secondary rounded-full">
                                <Mail className="w-5 h-5" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
