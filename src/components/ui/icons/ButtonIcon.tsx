import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";
import { cn } from "../../../utils/cn";

interface Props extends React.HTMLAttributes<HTMLButtonElement>{
    icon: LucideIcon|IconType;
    iconSize: number|string;
    label?:string;
}

export const ButtonIcon = ({icon: Icon, className, iconSize,label, ...props}:Props)=>{
    return(
        <button {...props} className={cn("background-none border-2 p-2 border-primary/40 rounded-full hover:border-primary transition-all duration-300 text-primary group ",className)}
        aria-label={label}>
            <Icon size={iconSize} className="group-hover:scale-110" />
        </button>
    )
} 