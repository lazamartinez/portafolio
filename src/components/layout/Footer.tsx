import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-black/40 border-t border-white/10 text-white pt-16 pb-8 backdrop-blur-md">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold tracking-tight">Lazaro Martinez</h3>
                        <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                            Analista en Sistemas de Computación y Desarrollador Full Stack. Creando soluciones digitales eficientes y escalables.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white/90">Navegación</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-slate-400 hover:text-white transition-colors text-sm">Sobre Mí</a>
                            </li>
                            <li>
                                <a href="#experience" className="text-slate-400 hover:text-white transition-colors text-sm">Experiencia</a>
                            </li>
                            <li>
                                <a href="#projects" className="text-slate-400 hover:text-white transition-colors text-sm">Proyectos</a>
                            </li>
                            <li>
                                <a href="#contact" className="text-slate-400 hover:text-white transition-colors text-sm">Contacto</a>
                            </li>
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-semibold text-white/90">Conectemos</h4>
                        <div className="flex gap-4">
                            <a
                                href="https://github.com/lazamartinez"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all text-slate-300 hover:text-white"
                                aria-label="GitHub"
                            >
                                <Github className="w-5 h-5" />
                            </a>
                            <a
                                href="mailto:lazamartinez1999@gmail.com"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all text-slate-300 hover:text-white"
                                aria-label="Email"
                            >
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                        <p className="text-slate-500 text-xs">
                            Posadas, Misiones, Argentina
                        </p>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
                    <p>
                        © {new Date().getFullYear()} Martinez Lazaro Ezequiel. Todos los derechos reservados.
                    </p>
                    <div className="flex gap-6">
                        <span className="cursor-not-allowed">Privacidad</span>
                        <span className="cursor-not-allowed">Términos</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
