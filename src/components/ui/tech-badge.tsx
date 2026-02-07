import { cn } from "@/lib/utils";

interface TechBadgeProps {
    name: string;
    icon?: React.ReactNode;
    className?: string;
}

export function TechBadge({ name, icon, className }: TechBadgeProps) {
    return (
        <div
            className={cn(
                "px-4 py-2 rounded-full text-sm font-medium bg-white/5 border border-white/10 backdrop-blur-sm text-muted-foreground hover:text-primary hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default flex items-center gap-2 group",
                className
            )}
        >
            {icon && <span className="text-muted-foreground group-hover:text-primary transition-colors">{icon}</span>}
            {name}
        </div>
    );
}
