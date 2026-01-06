import { NavigationMenu } from "radix-ui";
import { Link } from "react-router-dom";
import {Menu as MenuIcon, Home as HomeIcon, User as UserIcon,Star as StarIcon, type LucideIcon, Mail} from "lucide-react"
import { useState } from "react";
import DATA from "../../config";
import type { IconType } from "react-icons";

export const Navbar1 = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { Root, List, Item, Link: RadixLink } = NavigationMenu;
    const {initials} = DATA;
    return (
        <Root className="bg-secondary-900/75 fixed top-0 left-0 right-0  z-50">
            <div className="flex flex-col justify-center min-h-16 px-[8%]">
                <div className="flex items-center justify-between font-bold text-accent">
                    <Link to={'/about'} className="text-4xl">{initials}.</Link>
                    <MenuIcon 
                        className="size-10 cursor-pointer" 
                        strokeWidth={3} 
                        onClick={() => setIsOpen(p => !p)} 
                    />
                </div>
            </div>
            {isOpen && (
                <List className="flex flex-col justify-center items-center  list-none" onClick={()=>setIsOpen(false)}>
                    <Item>
                        <RadixLink asChild>
                            <MenuItem icon={HomeIcon} text="Home" to="/home" />
                        </RadixLink>
                    </Item>
                    <Item>
                        <RadixLink asChild>
                            <MenuItem icon={UserIcon} text="About" to="/about" />
                        </RadixLink>
                    </Item>
                    <Item>
                        <RadixLink asChild>
                            <MenuItem icon={Mail} text="Reachout" to="/reach-out" />
                        </RadixLink>
                    </Item>
                    <Item>
                        <RadixLink asChild>
                            <MenuItem icon={StarIcon} text="Stars" to="/stars" />
                        </RadixLink>
                    </Item>
                </List>
            )}
        </Root>
    );
};

interface MenuItemProps {
    icon: LucideIcon|IconType; 
    text: string;
    to: string;
}

// Pass the Icon component itself as a prop
const MenuItem = ({ icon: Icon, text, to }: MenuItemProps) => {
    return (
        <div className="flex items-center gap-4 text-2xl py-2">
            <Icon className="size-7" />
            <Link to={to}>{text}</Link>
        </div>
    );
};


import { X as CloseIcon, Home, User, Star } from "lucide-react";
import { cn } from "../../utils/cn"; // Using your existing utility
import { useIsMobile } from "../../hooks/useIsMobile";
import { NavMobile } from "./NavMobile";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { Root, List, Item, Link: RadixLink } = NavigationMenu;
  const {isMobile} = useIsMobile();
  return (
    <Root className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className={cn(
        "flex items-center justify-between px-[8%] min-h-20 transition-all",
        isOpen ? "bg-background/75 backdrop-blur-md" : "bg-background/75  border-b border-primary/10"
      )}>
        <Link to="/about" className="text-3xl font-bold text-accent tracking-tighter">SJ.</Link>
        
        {isMobile?
          <NavMobile />:
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary p-2 hover:bg-primary/10 rounded-lg transition-colors"
          >
            {isOpen ? <CloseIcon size={32} /> : <MenuIcon size={32} />}
          </button>}
      </div>

      {/* Full Screen Drawer */}
      <div className={cn(
        "absolute top-20 left-0 w-full bg-background/75 backdrop-blur-md transition-all duration-500 ease-in-out overflow-hidden border-b border-primary/20",
        isOpen ? "h-[calc(100vh-80px)] opacity-100" : "h-0 opacity-0 pointer-events-none"
      )}>
        <List className="flex flex-col items-start px-[10%] pt-10 gap-8 ">
          <NavItem to="/home" icon={Home} text="Home"  onClick={() => setIsOpen(false)} />
          <NavItem to="/about" icon={User} text="About"  onClick={() => setIsOpen(false)} />
          <NavItem to="/reach-out" icon={Mail} text="Reach Out"  onClick={() => setIsOpen(false)} />
          <NavItem to="/stars" icon={Star} text="Stars"  onClick={() => setIsOpen(false)} />
        </List>
      </div>
    </Root>
  );
};

const NavItem = ({ to, icon: Icon, text,onClick }: any) => (
  <NavigationMenu.Item className={cn("w-full transform transition-all duration-500 translate-x-0")}>
    <NavigationMenu.Link asChild>
      <Link 
        to={to} 
        onClick={onClick}
        className="group flex items-center gap-6 text-3xl font-medium text-text-200 hover:text-primary transition-colors"
      >
        <Icon className="size-8 text-primary group-hover:scale-125 transition-transform duration-300" />
        <span>{text}</span>
      </Link>
    </NavigationMenu.Link>
  </NavigationMenu.Item>
);