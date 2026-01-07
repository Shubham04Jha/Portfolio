import { useState } from "react";
import {DropdownMenu}  from "radix-ui";
import { Menu as MenuIcon } from "lucide-react";
import { ButtonIcon } from "../icons/ButtonIcon";
import { cn } from "../../utils/cn";
import { FaDotCircle } from "react-icons/fa";
import { useDrag } from "../../hooks/useDrag";
import { useNavigate } from "react-router-dom";


export const NavMobile = ()=>{
    const {isDragging, position, isOpen, onOpenChange, dragHandlers} = useDrag();
    const [selected,setSelected] = useState('about');
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
        className={cn("fixed touch-none z-50 transition-transform ",isDragging&&"scale-150")}
      >
        < ButtonIcon icon={MenuIcon} iconSize={36} className="bg-background/50 rounded-full backdrop-blur-lg" />
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content>
            <DropdownMenu.Label className="DropdownMenuLabel">
            People
            </DropdownMenu.Label>
            <DropdownMenu.RadioGroup value={selected} onValueChange={setSelected}>
                <DropdownMenu.RadioItem
                    className="DropdownMenuRadioItem"
                    value="about"
                >
                    <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                        <FaDotCircle />
                    </DropdownMenu.ItemIndicator>
                    about
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem
                    className="DropdownMenuRadioItem"
                    value="stars"
                >
                    <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                        <FaDotCircle />
                    </DropdownMenu.ItemIndicator>
                    stars
                </DropdownMenu.RadioItem>
            </DropdownMenu.RadioGroup>

            <DropdownMenu.Arrow className="DropdownMenuArrow" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}