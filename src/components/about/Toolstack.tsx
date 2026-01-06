import { VscVscodeInsiders } from "react-icons/vsc";
import { FaChrome } from "react-icons/fa6";

export const Toolstack = () => {
  const tools = [
    { icon: FaChrome, name: "Google Chrome" },
    { icon: VscVscodeInsiders, name: "Vs Code" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 pt-8 max-w-5xl mx-auto">
      {tools.map((tool) => (
        <div key={tool.name} className="flex items-center gap-3 px-6 py-3 border-2 border-accent/30 rounded-full hover:border-accent hover:cursor-default transition-all bg-background/20 group">
          <tool.icon className="text-2xl text-accent group-hover:scale-110" />
          <span className="text-text font-medium">{tool.name}</span>
        </div>
      ))}
    </div>
  );
};