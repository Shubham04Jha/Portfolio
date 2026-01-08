import { NavigationMenu } from "radix-ui";
import { Link, useLocation} from "react-router-dom";
import { Home, User, Star, type LucideIcon, FileUser, FileChartLine} from "lucide-react"
import DATA from "../../config";
import { cn } from "../../utils/cn";
import { useIsMobile } from "../../hooks/useIsMobile";
import { NavMobile } from "./NavMobile";
import type { IconType } from "react-icons";
import { useState } from "react";



const NAV_ITEMS = [
    { label: "Home", path: "/", icon: Home },
    { label: "About", path: "/about", icon: User },
    { label: "Projects", path: "/projects", icon: FileChartLine },
    { label: "Resume", path: "/resume", icon: FileUser },
];

export const Navbar = () => {
  const {isMobile} = useIsMobile();
  const {initials} = DATA;
  return (
    <NavigationMenu.Root className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/75 px-20">
      {/* Top Bar */}
      <div className={cn(
        "flex items-center justify-between py-1 transition-all max-w-5xl mx-auto border-b border-primary/10"
      )}>
        <Link to="/about" className="text-3xl font-bold text-accent ">{initials}.</Link>
        {isMobile?
          <NavMobile NAV_ITEMS={NAV_ITEMS} />:
          <NavDesktop/>}
      </div>
    </NavigationMenu.Root>
  );
};

const NavDesktop = ()=>{
    const location = useLocation();
    const [selected,setIsSelected] = useState<string>(location.pathname);
    return (
        <NavigationMenu.List className={cn("flex items-center w-full justify-around gap-8")} >
          {
            NAV_ITEMS.map((item)=>
            <NavItem 
                selected={selected}
                icon={item.icon}
                text={item.label}
                key={item.path}
                path={item.path}
                onClick= {()=>{
                    setIsSelected(item.path);
                }}
            />)
          }
          <NavigationMenu.Indicator className="border-b border-accent/10"/>
        </NavigationMenu.List>
    )
}

const NavItem = ({ icon: Icon, text, path, onClick, selected }: { path: string, icon: LucideIcon | IconType; text: string; onClick?: () => void; selected: string }) => (
  <NavigationMenu.Item className={cn("w-full group transform transition-all duration-500 translate-x-0","py-1 px-4 hover:bg-accent/10 rounded-md","text-xl hover:cursor-pointer",selected===path&&"bg-accent/10")} value={text} onClick={onClick}>
    <Link className="flex gap-2 items-center" to={path}>
        <Icon className="size-6 text-primary group-hover:scale-125 transition-transform duration-300" />
        <span>{text}</span>
    </Link>
  </NavigationMenu.Item>
);