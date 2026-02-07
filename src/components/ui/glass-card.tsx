import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface GlassCardProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -5, boxShadow: "0 20px 40px -10px rgba(124, 58, 237, 0.1)" } : {}}
            transition={{ duration: 0.3 }}
            className={cn(
                "relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl",
                "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-linear-to-r before:from-transparent before:via-white/10 before:to-transparent",
                className
            )}
            {...props}
        >
            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" style={{ backgroundImage: "url('/noise.png')" }}></div>

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>

            {/* Subtle Gradient Border Glow */}
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 pointer-events-none"></div>
        </motion.div>
    );
}
