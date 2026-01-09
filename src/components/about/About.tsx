import { FaHandPointRight } from "react-icons/fa6";
import { useCodingActivity } from "../../hooks/useCodingActivity"
import { CodingActivity } from "./CodingActivity";
import { cn } from "../../utils/cn";
import HeroImage from "../../assets/about.png";
import { Techstack } from "./Techstack";
import { Toolstack } from "./Toolstack";
import { Reachout } from "../Reachout";

const SECTION_HEADER = 'text-3xl text-center pb-4'

export const About = ()=>{
    const {data,loading,error} = useCodingActivity();
    if(error){
        console.log(error);
    }
    return(<div className="flex flex-col justify-center items-center gap-y-16 pb-8">
        <Card className="flex flex-col md:flex-row gap-8 ">
            <div className="md:flex-2 w-full">
                <h1 className="pb-5 text-3xl">
                    Know Who <strong className="text-primary">I AM</strong>
                </h1>
                <blockquote className="space-y-4 text-lg text-text-200 flex-col flex">
                    <p className="text-justify leading-relaxed">
                        Hi everyone! I'm <span className="text-primary font-medium">Shubham Jha</span> from <span className="text-primary">Mumbai, India</span>.
                        <br />
                        I’m currently a <span className="text-primary">Student</span> at <span className="text-primary">VESIT</span> pursuing my BE in <span className="text-primary font-semibold">Information Technology</span>.
                    </p>

                    <div>
                        <p className="mb-4 text-text-100">Beyond the screen, I find balance in:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-2">
                            <li className="flex gap-3 items-center hover:text-primary transition-colors">
                                <FaHandPointRight className="text-primary" /> Reading 📖
                            </li>
                            <li className="flex gap-3 items-center hover:text-primary transition-colors">
                                <FaHandPointRight className="text-primary" /> Anime & Cinema 🎞️
                            </li>
                            <li className="flex gap-3 items-center hover:text-primary transition-colors">
                                <FaHandPointRight className="text-primary" /> Fitness & Walks 🚶‍♂️
                            </li>
                        </ul>
                    </div>

                    <div className="pt-4 border-t border-primary/20 italic text-center">
                        <p className="text-primary">"If you always make the best move irrespective of your position, its very hard to lose!"</p>
                        <footer className="mt-1 text-sm text-text-400">— Shubham</footer>
                    </div>
                </blockquote>
            </div>
            <div className="relative group md:flex-1 flex items-center justify-center">
                <div
                    className="absolute inset-0 scale-125 border-accent-400 border-2 blur-3xl rounded-full  bg-primary/10 group-hover:blur-2xl transition-all duration-700"
                />
                <img src={HeroImage} alt="person using laptop"/>
            </div>
        </Card>
        <Card>
            <h2 className={`${SECTION_HEADER}`}>
                Professional <strong className="text-primary">Skillset </strong>
            </h2>
            <Techstack />
        </Card>
        <Card>
            <h2 className={`${SECTION_HEADER}`}>
                <strong className="text-primary">Tools</strong> I use
            </h2>
            <Toolstack />
        </Card>
        <Card className="w-full flex flex-col justify-center items-center">
            <p className={`${SECTION_HEADER}`}>
                Days I <strong className="text-primary">Code</strong>
            </p>
            <CodingActivity data={data} loading={loading} />
        </Card>
        <Reachout />
    </div>
    )
}

const Card = ({children,className}: React.HTMLAttributes<HTMLDivElement>)=><div 
className={cn("rounded-md px-4 py-2 ",className)}
>
    {children}
</div>