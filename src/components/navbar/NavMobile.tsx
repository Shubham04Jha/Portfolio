import { useState } from "react";
import {DropdownMenu}  from "radix-ui";
import { Menu as MenuIcon, type LucideIcon } from "lucide-react";
import { ButtonIcon } from "../icons/ButtonIcon";
import { cn } from "../../utils/cn";
import { FaDotCircle } from "react-icons/fa";
import { useDrag } from "../../hooks/useDrag";
import { useLocation, useNavigate } from "react-router-dom";
import type { IconType } from "react-icons";



export const NavMobile = ({NAV_ITEMS}:{NAV_ITEMS:{label: string, path: string, icon: LucideIcon|IconType}[]})=>{
    const location = useLocation();
    const navigate = useNavigate();
    const {isDragging, position, isOpen, onOpenChange, dragHandlers} = useDrag();
    const [selected,setSelected] = useState(location.pathname);
    const handleNavigation = (path: string) => {
        setSelected(path);
        navigate(path);
    };
    return (
    <DropdownMenu.Root open={isOpen} onOpenChange={onOpenChange}>
      <DropdownMenu.Trigger asChild
        {...dragHandlers}
        style={{ 
          left: position.x, 
          top: position.y,
          transition: isDragging ? 'none' : 'all 0.2s ease-out',
          transform: 'translate(-60%,-50%)'
        }}
        className={cn("fixed touch-none z-50 transition-transform ",isDragging&&"scale-120 cursor-grabbing","shadow-md shadow-accent/30")}
      >
        < ButtonIcon icon={MenuIcon} iconSize={36} className="bg-background/50 rounded-full backdrop-blur-md" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content 
        side="left"
        sideOffset={15}
        className="min-w-50 bg-background-950/50 backdrop-blur-lg border border-primary/20 rounded-2xl p-2 shadow-lg shadow-accent/10 "
        >
          <DropdownMenu.RadioGroup value={selected} onValueChange={handleNavigation}>
            {
            NAV_ITEMS.map((item) =>
              <DropdownMenu.RadioItem
                key={item.path}
                value={item.path}
                className={cn("relative flex items-center gap-4 px-4 py-3 text-lg text-text-200 rounded-xl",selected===item.path&&'bg-primary/5 rounded-xl border border-primary/10')}
              >
                {/* Custom Indicator logic */}
                <div className={cn("flex items-center justify-center w-6")}>
                  <DropdownMenu.ItemIndicator>
                    <FaDotCircle className="text-primary size-3 animate-pulse" />
                  </DropdownMenu.ItemIndicator>
                  {!selected.includes(item.path) && (
                    <item.icon className="size-5 text-text-400 group-hover:text-primary transition-colors" />
                  )}
                </div>
                <span className="font-medium tracking-wide">{item.label}</span>
                
                {/* Active Highlight Glow  I like this way of thinking!*/}
                {/* {selected === item.value && (
                  <div className="absolute inset-0 bg-primary/5 rounded-xl border border-primary/10 -z-10" />
                )} */}
              </DropdownMenu.RadioItem>
            )
            }
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Arrow className="fill-primary/20" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}