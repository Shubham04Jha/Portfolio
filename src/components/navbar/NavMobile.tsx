import { useState } from "react";
import {DropdownMenu}  from "radix-ui";
import { Menu as MenuIcon } from "lucide-react";
import { ButtonIcon } from "../icons/ButtonIcon";
import { cn } from "../../utils/cn";

const IconSize = 40;

export const NavMobile = () => {
    const [position, setPosition] = useState({ x: window.innerWidth*0.9, y: window.innerHeight*0.9 });
    const [isDragging, setIsDragging] = useState(false);

    const handlePointerMove = (e: React.PointerEvent) => {
        if(isDragging) setSafePosition({x: e.clientX,y:e.clientY})
    };

    const setSafePosition=({x,y}:{x: number, y: number})=>{
        const offset = IconSize/2;
        if(x<offset*3){ // offset*3 because of transform (-50%)
            x = offset*3;
        }else if (x>=window.innerWidth-offset){
            x = window.innerWidth-offset
        }
        if(y<offset*3){
            y = offset*3;
        }else if(y>=window.innerHeight-offset){
            y = window.innerHeight-offset;
        }
        setPosition({x,y});
    }

    const handleSnap = () => {
        const horizontalMidpoint = window.innerWidth / 2;
        const isMiddleRegion = position.x>0.3*window.innerWidth&&position.x<0.7*window.innerWidth;
        const isPastMidpoint = position.x<horizontalMidpoint;
        if(isMiddleRegion) setPosition(prev => ({
            ...prev, // current y.
            x: isPastMidpoint ? 0.2*window.innerWidth : window.innerWidth*0.8 
        }));
        setIsDragging(false);
    };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger
        onPointerDown={() => setIsDragging(true)}
        onPointerMove={handlePointerMove}
        onPointerUp={handleSnap}
        style={{ 
          left: position.x, 
          top: position.y,
          transition: isDragging ? 'none' : 'all 0.3s ease-out',
          transform: 'translate(-50%,-50%)'
        }}
        // The scale-150 makes it grow when dragging
        className={cn("fixed touch-none z-50 transition-transform ",isDragging&&"scale-150")}
      >
        < ButtonIcon icon={MenuIcon} iconSize={36} className="bg-background/50 rounded-full backdrop-blur-lg" />
      </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  );
};