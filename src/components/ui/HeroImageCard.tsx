import { cn } from "../../utils/cn";

interface HeroImageCardProps extends React.HTMLAttributes<HTMLDivElement> {
  img: string;
  alt?: string;
}

export const HeroImageCard = ({ 
  img, 
  alt = "hero image", 
  className, 
  ...props 
}: HeroImageCardProps) => {
  return (
    <div className={cn("relative group w-full max-w-md mx-auto", className)} {...props}>
      {/* 1. THE AURA (Ambient Glow) */}
      <div
        className="absolute inset-0 scale-110 border-accent/30 border-2 blur-3xl rounded-full bg-primary/10 group-hover:scale-125 group-hover:blur-2xl transition-all duration-700"
        aria-hidden="true"
      />

      {/* 2. THE CONTAINER (Glass Frame) */}
      <div className="relative rounded-full overflow-hidden  border-primary/20 bg-background-900/40 p-2 shadow-2xl">
        <img
          src={img}
          alt={alt}
          className="w-full h-full aspect-square object-contain animate-float drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]"
        />
      </div>
    </div>
  );
};