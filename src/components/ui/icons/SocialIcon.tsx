import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

interface SocialIconProps {
  href: string;
  icon: IconType|LucideIcon; 
  label: string; 
}

export const SocialIcon = ({href, icon: Icon, label}: SocialIconProps)=>(
    <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="group relative flex items-center justify-center size-12 bg-background-900/50 border border-primary/20 rounded-full transition-all duration-300 hover:border-primary hover:-translate-y-1 shadow-lg shadow-primary/5"
  >
    <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
    <Icon className="size-6 text-primary relative z-10 transition-transform group-hover:scale-110" />
    <span className="sr-only">{label}</span>
  </a>
)