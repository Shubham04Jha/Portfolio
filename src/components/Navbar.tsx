import { NavigationMenu } from "radix-ui";
import { Link } from "react-router-dom";
import {Menu as MenuIcon, Home as HomeIcon, User as UserIcon,Star as StarIcon, type LucideIcon} from "lucide-react"
import { useState } from "react";
import DATA from "../config";
import type { IconType } from "react-icons";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { Root, List, Item, Link: RadixLink } = NavigationMenu;
    const {initials} = DATA;
    return (
        <Root className="opacity-75 fixed top-0 left-0 right-0 bg-secondary-900 z-50">
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
                <List className="flex flex-col justify-center items-center  bg-secondary-900 list-none" onClick={()=>setIsOpen(false)}>
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