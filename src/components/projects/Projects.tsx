import { cn } from "../../utils/cn"
import { ProjectsList, type Project } from "./projectList"
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Button } from "../ui/Button";
import { useState } from "react"

export const Projects = ()=>{
    return(
        <div className="space-y-16 mx-auto flex justify-center px-4 pb-8 flex-col">
            <header className="space-y-4 text-center">
                <h1 className="tracking-wide text-4xl font-semibold">
                    My Recent {" "}
                    <span className="text-primary">
                        Works
                    </span>
                </h1>
                <p className="leading-relaxed">
                    Here are few projects I have worked up on recently.
                </p>
            </header>
            <ul className="grid md:grid-cols-3 grid-cols-1 gap-8">
                {ProjectsList.map(project=><ProjectCard project={project} className="" key={project.title} />)}
            </ul>
        </div>
    )
}

interface ProjectCardProps extends React.HTMLAttributes<HTMLDataListElement>{
    project: Project
}
const ProjectCard = ({ project, className }: ProjectCardProps) => {
    const { description, imageLink, hostedLink, githubLink, title } = project;
    const [imgError,setImgError] = useState<boolean>(false);
    return (
        <li className={cn(
            "group flex flex-col bg-background-950/40 backdrop-blur-md rounded-2xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-all duration-500 shadow-xl hover:shadow-primary/5",
            className
        )}>
            {/*Image sec*/}
            <div className="relative aspect-video overflow-hidden border-b border-primary/10">
                {!imgError && imageLink ? (
                    <img 
                        src={imageLink} 
                        onError={() => setImgError(true)}
                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                    />
                ) : (
                    /*Fallback */
                    <div className="flex flex-col h-full items-center justify-center gap-2 opacity-40 group-hover:scale-110">
                        <div className="size-12 rounded-full border-2 border-dashed border-primary animate-load" />
                        <span className="text-xs uppercase tracking-widest text-primary">Preview Unavailable</span>
                    </div>
                )}
                {/*if img is background less this will look cool*/}
                <div className="absolute inset-0 bg-linear-to-t from-secondary-800/30 to-transparent opacity-60" />
            </div>

            {/*content sec*/}
            <div className="p-6 flex flex-col grow space-y-6">
                <div className="w-fit">
                    {hostedLink ? (
                        <a
                        href={hostedLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block group"
                        >
                            <h3 className="text-2xl text-primary font-semibold tracking-wide">
                                {title}
                            </h3>
                        </a>
                    ) : (
                        <h3 className="text-2xl text-primary font-semibold tracking-wide">
                            {title}
                        </h3>
                    )}
                    <div className="h-1 w-full bg-primary rounded-full origin-left group-hover:scale-x-110 transition-transform duration-500" />
                </div>

                <p className="text-text-200 leading-relaxed text-justify text-sm md:text-base">
                    {description}
                </p>

                {/* action links */}
                <div className="flex items-center gap-4 pt-4 mt-auto">
                    <a href={githubLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="secondary" size="sm" className="w-full bg-secondary/40 hover:bg-secondary/60">
                            <div className="flex gap-2 items-center">
                                <FaGithub /> GitHub
                            </div>
                        </Button>
                    </a>

                    {hostedLink && (
                        <a href={hostedLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <Button variant="primary" size="sm" className="w-full  bg-secondary/40 hover:bg-secondary/60">
                                <div className="flex gap-2 items-center">
                                    <FaExternalLinkAlt size={12} /> Demo
                                </div>
                            </Button>
                        </a>
                    )}
                </div>
            </div>
        </li>
    );
};