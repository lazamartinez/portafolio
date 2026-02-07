import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface NeonButtonProps extends HTMLMotionProps<"button"> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "outline";
    className?: string;
}

export function NeonButton({ children, variant = "primary", className, ...props }: NeonButtonProps) {
    const variants = {
        primary: "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_30px_-5px_var(--color-primary)] border-transparent",
        secondary: "bg-secondary text-secondary-foreground shadow-[0_0_20px_-5px_var(--color-secondary)] hover:shadow-[0_0_30px_-5px_var(--color-secondary)] border-transparent",
        outline: "bg-transparent border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary shadow-[0_0_10px_-5px_var(--color-primary)]",
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
                "relative px-6 py-3 rounded-full font-bold transition-all duration-300 flex items-center gap-2",
                variants[variant],
                className
            )}
            {...props}
        >
            {children}
            {/* Inner Glow for Primary */}
            {variant === "primary" && (
                <div className="absolute inset-0 rounded-full bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 animate-[shimmer_2s_infinite]" />
            )}
        </motion.button>
    );
}
