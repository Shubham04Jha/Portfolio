import { useCodingActivity } from "../../hooks/useCodingActivity"
import { CodingActivity } from "./CodingActivity";
import { cn } from "../../utils/cn";
import HeroImage from "../../assets/scaledDownAbout.png";
import { Techstack } from "./Techstack";
import { Toolstack } from "./Toolstack";
import { Reachout } from "../Reachout";
import { HeroImageCard } from "../ui/HeroImageCard";
import { FaBookReader } from "react-icons/fa";

const SECTION_HEADER = 'text-3xl text-center pb-4';

const Hobbies = [
                    { icon: <FaBookReader />, text: "Reading" },
                    { icon: "🎞️", text: "Anime & Cinema" },
                    { icon: "🚶‍♂️", text: "Fitness & Walks" },
                    { icon: "🧠", text: "Deep Work" },
                    {icon: "♟️", text: "Playing strategy games."}
                ]

export const About = ()=>{
    const {data,loading,error} = useCodingActivity();
    if(error){
        console.log(error);
    }
    return(<section className="px-4 py-8 max-w-5xl space-y-8 ">
        <Hero/>
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
            <p className="text-xs mt-4">
                *created by aggregating both my development and dsa activity
            </p>
        </Card>
        <Reachout />
    </section>
    )
}

const Hero = ()=>{
    return(
        <div className="flex flex-wrap items-start gap-8">
            <div className="md:flex-2 w-full space-y-10 mx-auto">
                {/* Header */}
                <header className="space-y-2">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                        Know Who <span className="text-primary">I AM</span>
                    </h1>
                    <div className="h-1 w-20 bg-primary rounded-full" /> {/*underline*/}
                </header>

                <div className="space-y-6 text-lg text-text-200">
                    <p className="leading-relaxed">
                        Hi everyone! I'm <span className="text-primary font-semibold">Shubham Jha</span> from <span className="text-primary">Mumbai, India</span>.
                        <br />
                        Currently navigating my final years at <span className="text-primary">VESIT</span>, pursuing a degree in <span className="text-primary">Information Technology</span>.
                    </p>

                    {/*Hobby Grid */}
                    <div className="space-y-4">
                        <p className="text-text-100 font-medium">Beyond the screen, I find balance in:</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Hobbies.map((hobby) => (
                                <li key={hobby.text} className="flex gap-4 items-center p-3 rounded-xl bg-background-900/50 border border-primary/10 hover:border-primary/40 hover:bg-primary/5 transition-all 
                                duration-500 group">
                                    <span className="text-2xl  group-hover:scale-125 transition-transform">{hobby.icon}</span>
                                    <span className="font-medium">{hobby.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quote Box */}
                    <div className="relative p-6 mt-8 rounded-2xl bg-linear-to-br from-primary/10 to-transparent border-l-4 border-primary italic">
                        <p className="text-primary text-xl font-serif">
                            "If you always make the best move irrespective of your position, it's very hard to lose!"
                        </p>
                        <footer className="mt-2 text-sm text-text-400 not-italic">— A wise Chess Philosophy</footer>
                    </div>
                </div>
            </div>
                {/* <div className="md:flex-1 h-full">
                </div> */}
                <HeroImageCard img={HeroImage} className="md:flex-1 " />
        </div>
    )
}

const Card = ({children,className}: React.HTMLAttributes<HTMLDivElement>)=><div 
className={cn("rounded-md px-4 py-2 ",className)}
>
    {children}
</div>