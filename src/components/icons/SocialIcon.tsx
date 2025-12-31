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
    className="text-gray-400 hover:text-primary transition-all"
  >
    <Icon className="size-6 text-primary" />
    <span className="sr-only">{label}</span>
  </a>
)