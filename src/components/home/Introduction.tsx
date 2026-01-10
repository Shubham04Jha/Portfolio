import Avatar from "../../assets/avatar.png"; 
import { cn } from "../../utils/cn";
import DATA from "../../config";

export const Introduction = () => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-12 py-20 px-4 mx-auto">
            <div className="md:flex-2 space-y-8 text-lg md:text-xl text-text-200 leading-relaxed">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight uppercase">
                    LET ME <span className="text-primary">INTRODUCE</span> MYSELF
                </h2>

                <div className="space-y-6">
                    <p>
                        I'm a <span className="text-primary font-semibold">Software Engineer</span> currently pursuing my B.E. in IT at <span className="text-primary">VESIT, Mumbai</span> (CGPA: 9.35). I'm passionate about building high-performance systems and seamless user experiences.
                    </p>

                    <p>
                        I am proficient in <span className="text-accent italic">Java, JavaScript, Python, and TypeScript</span>. My internship at <span className="text-primary">AudioPod AI</span> involved building functional UIs in React and designing scalable backend features.
                    </p>

                    <p>
                        My key areas of interest include developing <span className="text-accent">Full Stack Web Applications</span> and exploring <span className="text-accent">Autonomous Neural Engines</span>, like my scratch-built Micrograd autograd engine.
                    </p>

                    <p>
                        As a <span className="text-primary font-bold tracking-widest">Knight on LeetCode (1840+)</span> and a Pupil on Codeforces, I thrive on solving complex algorithmic challenges and have solved over <span className="text-primary">900+ questions</span>.
                    </p>
                </div>
            </div>
            
            <div className="md:flex-1 flex justify-center order-first md:order-last">
                <div className="relative group">
                    <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full scale-110 group-hover:bg-primary/30 transition-all duration-700" />
                    <div className={cn("relative size-64 md:size-80 rounded-full  border-primary/20 p-2 overflow-hidden "," backdrop-blur-sm border-4 bg-background-900/50")}>
                        <img 
                            src={Avatar} 
                            alt={`${DATA.name} Avatar `}
                            className="w-[125%] h-[125%] object-cover animate-float"
                        />
                    </div>
                </div>
            </div>


            
        </div>
    );
};