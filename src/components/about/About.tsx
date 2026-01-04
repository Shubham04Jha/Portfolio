import { FaHandPointRight } from "react-icons/fa6";
import { useCodingActivity } from "../../hooks/useCodingActivity"
import { CodingActivity } from "./CodingActivity";
import { cn } from "../../utils/cn";
import HeroImage from "../../assets/about.png";

export const About = ()=>{
    const {data,loading,error} = useCodingActivity();
    if(error){
        console.log(error);
    }
    return(<div className="flex flex-col justify-center items-center gap-y-16 mx-auto md:px-24">
        <Card className="flex flex-col md:flex-row gap-8">
            <div className="md:flex-2 w-full">
                <h1 className="pb-5 text-3xl">
                    Know Who <strong className="text-primary">I'M</strong>
                </h1>
                <blockquote >
                    <p className="text-lg text-justify">
                        Hi everyone! I'm <span className="text-primary">Shubham Jha</span>{" "}
                        from <span className="purple">Mumbai, India</span>.
                        <br />
                        I’m currently a{" "}
                        <span className="text-primary">Student</span> at{" "}
                        <span className="text-primary">VESIT, Mumbai</span>.
                        <br />I am pursuing a Bachelors's of Engineering (BE) in{" "}
                        <span className="text-primary">Information Technology</span>.
                        <br />
                        <br />
                        Outside of coding, I love engaging in activities such as:
                    </p>

                    <ul>
                        <li className="flex gap-4 items-center">
                            <FaHandPointRight /> Reading 📖
                        </li>
                        <li className="flex gap-4 items-center">
                            <FaHandPointRight /> Watching Animes/Movies 🎞️🎬
                        </li>
                        <li className="flex gap-4 items-center">
                            <FaHandPointRight /> Workout and Walks 🚶‍♂️
                        </li>
                    </ul>

                    <p className="text-primary">
                        "Strive to build things that make a difference!"{" "}
                    </p>
                    <footer className="blockquote-footer">Shubham</footer>
                </blockquote>
            </div>
            <div className="md:flex-1 flex items-center justify-center">
                <img src={HeroImage}/>
            </div>
        </Card>
        <div className="w-full">
        <p className="project-heading pb-4 text-2xl text-center">
            Days I <strong className="text-primary">Code</strong>
        </p>
        <CodingActivity data={data} loading={loading} />
        </div>
    </div>
    )
}

const Card = ({children,className}: React.HTMLAttributes<HTMLDivElement>)=><div 
className={cn("rounded-md px-4 py-2",className)}
>
    {children}
</div>