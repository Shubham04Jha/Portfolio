import { FaHand,  } from "react-icons/fa6"
import DATA from "../../config";
import HomeImage from "../../assets/Home.png";
import { Type } from "./Type";
import { SocialSection } from "./SocialSection";
import { Introduction } from "./Introduction";

export const Home = ()=>{
    return <section className="px-4 py-8 max-w-5xl space-y-8 ">
        {/* <p>Home</p> */}
        <Hero/>
        <Introduction/>
        <SocialSection/>
    </section>
}

const Hero = ()=>{
    return(
        <div className="flex flex-wrap items-center gap-8">
                <div className=" md:flex-2 md:text-4xl text-3xl tracking-wide space-y-6 -mb-4">
                    <div className="flex gap-16 items-center">
                        <h1 className="mt-3">Hi&nbsp; There!</h1>
                        <HandWave/>
                    </div>
                    <h1 className="heading-name tracking-widest leading-tight">
                        I'M&nbsp;
                        <strong className="text-primary uppercase drop-shadow-[0_0_10px_rgba(142,235,232,0.3)]">{DATA.name}</strong>
                    </h1>
                    <div className="py-8 ">
                        <Type />
                    </div>
                </div>
            <div className="relative group md:flex-1 md:order-last order-first">
                <div
                    className="absolute inset-0 scale-125 border-accent-400 border-2 blur-2xl rounded-full  bg-primary/5 group-hover:blur-xl transition-all duration-300"
                />
                <img src={HomeImage} alt="person using laptop"
                className="w-full drop-shadow-2xl animate-float aspect-square object-cover"/>
            </div>
        </div>
    )
}



const HandWave = ()=>{
    return(
        <span className="text-primary ">
            <FaHand className="inline-block origin-bottom animate-wave -rotate-24 scale-x-[-1]"/>
        </span>
    )
}