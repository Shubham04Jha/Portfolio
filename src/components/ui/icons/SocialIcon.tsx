import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

interface SocialIconProps {
  href: string;
  icon: IconType|LucideIcon; 
  label: string; 
  size?:'sm'|'md'|'lg';
}

const sizeStyle={
  'sm':'size-4',
  'md':'size-6',
  'lg':'size-8',
}

const parentStlye={
  'sm':'size-8',
  'md':'size-12',
  'lg':'size-16',
}
export const SocialIcon = ({href, icon: Icon, label, size='md'}: SocialIconProps)=>(
    <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className={`group relative flex items-center justify-center bg-background-900/50 border border-primary/20 rounded-full transition-all duration-300 hover:border-primary hover:-translate-y-1 shadow-lg shadow-primary/5 ${parentStlye[size]}`}
  >
    <div className="absolute inset-0 bg-primary/10 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity" />
    <Icon className={`${sizeStyle[size]} text-primary relative z-10 transition-transform group-hover:scale-110`} />
    <span className="sr-only">{label}</span>
  </a>
)