import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeading({ title, subtitle, className, align = "center" }: SectionHeadingProps) {
    const alignment = {
        left: "text-left items-start",
        center: "text-center items-center",
        right: "text-right items-end",
    };

    return (
        <div className={cn("flex flex-col gap-2 mb-12", alignment[align], className)}>
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-medium tracking-wider uppercase text-sm"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-bold font-heading text-white drop-shadow-lg"
            >
                {title}
                <div className="h-2 w-32 bg-gradient-to-r from-primary via-secondary to-primary rounded-full mt-4 mx-auto shadow-[0_0_20px_rgba(124,58,237,0.6)]" />
            </motion.h2>
        </div>
    );
}
