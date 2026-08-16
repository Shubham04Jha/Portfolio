import Avatar from "../../assets/userAvatar.png"; 
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
                        I'm a <span className="text-primary font-semibold">Software Engineer at CarWale (CarTrade Tech)</span>, working with engineering teams to build and maintain web applications as part of a full-stack development environment. I completed my B.E. in Information Technology from <span className="text-primary font-semibold">VESIT, Mumbai</span>, with a <span className="text-primary font-semibold font-bold">CGPA of 9.43/10</span>.
                    </p>

                    <p>
                        I'm proficient in <span className="text-accent italic">Java, JavaScript, Python, and TypeScript</span>, with hands-on experience across React, Node.js, ASP.NET Core, C#, and SQL.
                    </p>

                    <p>
                        My current interests lie in <span className="text-accent">building scalable systems, understanding system design, and learning how well-engineered software evolves under real-world constraints</span>. I'm also exploring how to work effectively with <span className="text-accent">AI agents and developer tools</span>, using them to accelerate development while maintaining correctness, security, and responsible engineering practices.
                    </p>

                    <p>
                        I enjoy understanding systems from first principles, from building secure client-side cryptographic systems and performant interactive interfaces to implementing an automatic differentiation engine from scratch.
                    </p>

                    <p>
                        As a <span className="text-primary font-bold tracking-widest">1900+ rated LeetCode Knight</span> and <span className="text-primary font-semibold">Pupil on Codeforces</span>, I've solved <span className="text-primary font-bold">1000+ DSA problems</span> and continue to use competitive programming to strengthen my problem-solving and algorithmic thinking.
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