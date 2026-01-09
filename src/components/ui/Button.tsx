import { cn } from "../../utils/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary'|'secondary'|'accent',
    size?:'sm'|'md'|'lg'|'xl',
}
export const Button = ({
    variant = "primary",
    size = "md",
    className,
    children,
    ...props
}:ButtonProps)=>{
    const sizeStyles = {
        sm: "px-3 py-1.5 text-xs",
        md: "px-4 py-2 text-sm",
        lg: "px-6 py-3 text-base",
        xl: "px-8 py-4 text-lg font-bold",
    };
    const variantStyles = {
        primary: "bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 shadow-[0_0_15px_rgba(142,235,232,0.1)]",
        secondary: "bg-secondary/10 text-secondary-300 border border-secondary/20 hover:bg-secondary/20",
        accent: "bg-accent/10 text-accent border border-accent/20 hover:bg-accent/30 shadow-[0_0_15px_rgba(84,212,212,0.15)]",
    };
    return(
        <button 
        className={cn(
            "relative inline-flex items-center justify-center rounded-xl transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none overflow-hidden group",
            "hover:cursor-pointer",
            sizeStyles[size],
            variantStyles[variant],
            className
        )}
        {...props}
        >
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="relative z-10">{children}</span>
        </button>
    )
}