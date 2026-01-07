import { useState } from "react";
import {DropdownMenu}  from "radix-ui";
import { Menu as MenuIcon } from "lucide-react";
import { ButtonIcon } from "../icons/ButtonIcon";
import { cn } from "../../utils/cn";
import { FaDotCircle } from "react-icons/fa";
import { useDrag, useDrag2, useDrag3 } from "../../hooks/useDrag";
import { useNavigate } from "react-router-dom";


export const NavMobile2 = () => {
    const [selected, setSelected] = useState<string>('about');
    const {position, isDragging, isOpen, onOpenChange, dragHandlers } = useDrag();
    const navigate = useNavigate();
  return (
    <DropdownMenu.Root open={isOpen} onOpenChange={onOpenChange} >
      <DropdownMenu.Trigger asChild
        {...dragHandlers}
        style={{ 
          left: position.x, 
          top: position.y,
          transition: isDragging ? 'none' : 'all 0.3s ease-out',
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
};

export const NavMobile3 = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const {position, isDragging, dragHandlers } = useDrag2();
    // The Gatekeeper Function
    const handleOpenChange = (requestedOpenState: boolean) => {
      // If we are currently dragging, OR if we are requesting to open 
      // but the interaction was actually a drag, we block it.
      if (isDragging && requestedOpenState === true) {
        return; 
      }
      
      setIsOpen(requestedOpenState);
    };

    return (
        <DropdownMenu.Root open={isOpen&&!isDragging} onOpenChange={handleOpenChange} >
        <DropdownMenu.Trigger asChild
            {...dragHandlers}
            style={{ 
            left: position.x, 
            top: position.y,
            transition: isDragging ? 'none' : 'all 0.3s ease-out',
            transform: 'translate(-60%,-50%)'
            }}
            className={cn("fixed touch-none z-50 transition-transform ",isDragging&&"scale-150")}
            
        >
            < ButtonIcon icon={MenuIcon} iconSize={36} className="bg-background/50 rounded-full backdrop-blur-lg" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
            <DropdownMenu.Content>
                <DropdownMenu.Item>Item 1</DropdownMenu.Item>
                <DropdownMenu.Item>Item 2</DropdownMenu.Item>
            </DropdownMenu.Content>
        </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
};

export const NavMobile = ()=>{
    const {isDragging, isOpen, setIsOpen, position, dragHandlers} = useDrag3();
    const [selected,setSelected] = useState('about');
    return (
    <DropdownMenu.Root open={isOpen&&!isDragging} onOpenChange={(val: boolean)=>{
        console.log('inside onOpenChange with requestedopen: '+val);
        setIsOpen(val);
    }}>
      <DropdownMenu.Trigger asChild
        {...dragHandlers}
        style={{ 
          left: position.x, 
          top: position.y,
          transition: isDragging ? 'none' : 'all 0.3s ease-out',
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