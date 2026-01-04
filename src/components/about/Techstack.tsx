import { FaJava, FaReact, FaC, 
    FaPython,FaNodeJs, FaJs, FaGitAlt
} from "react-icons/fa6";

import { SiTailwindcss, SiRadixui, SiTurborepo,
    SiTypescript, SiPostgresql, SiPrisma,
    SiExpress, SiMongodb, SiPostman} from "react-icons/si";

import { RiNextjsFill, } from "react-icons/ri";


const SkillBadge = ({ icon: Icon, name }: { icon: any, name: string }) => (
  <div className="flex items-center gap-3 px-6 py-3 border-2 border-primary/40 rounded-full hover:border-primary transition-all duration-300 bg-background/20 group">
    <Icon className="text-2xl text-primary group-hover:scale-120 transition-transform" />
    <span className="text-text font-medium whitespace-nowrap">{name}</span>
  </div>
);

export const Techstack = () => {
  const skills = [
    { icon: FaJs, name: "Javascript" },
    { icon: SiTypescript, name: "Typescript" },
    { icon: FaNodeJs, name: "Node.Js" },
    { icon: SiExpress, name: "Express" },
    { icon: FaReact, name: "React.Js" },
    { icon: RiNextjsFill, name: "Next.js" },
    { icon: SiMongodb, name: "Mongo DB" },
    { icon: SiPostgresql, name: "Postgresql" },
    { icon: SiPrisma, name: "Prisma" },
    { icon: FaGitAlt, name: "Git" },
    { icon: FaPython, name: "Python" },
    { icon: FaJava, name: "Java" },
    { icon: SiTailwindcss, name: "Tailwind CSS" },
    { icon: SiRadixui, name: "Radix UI" },
    { icon: SiTurborepo, name: "Turborepo" },
    { icon: SiPostman, name: "Postman" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-5 pt-8 max-w-5xl mx-auto hover:cursor-pointer">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} icon={skill.icon} name={skill.name} />
      ))}
    </div>
  );
};