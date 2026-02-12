import { FaHand,  } from "react-icons/fa6"
import DATA from "../../config";
import HomeImage from "../../assets/scaledDownHome.png";
import { Type } from "./Type";
import { SocialSection } from "./SocialSection";
import { Introduction } from "./Introduction";
import { HeroImageCard } from "../ui/HeroImageCard";
import { useVisitorCount } from "../../hooks/visitorCount";

export const Home = ()=>{
    return <section className="px-4 py-8 max-w-5xl space-y-8 ">
        <Hero/>
        <Introduction/>
        <SocialSection/>
    </section>
}

const getOrdinalSuffix = (count: number)=>{
    const s = ["th", "st", "nd", "rd"];
    const v = count % 100;
    return s[(v-20)%10] || s[v] || s[0]
}
const Hero = ()=>{
    const {count} = useVisitorCount();
    
    return(
        <div className="flex flex-wrap items-center gap-8">
            <div className=" md:flex-2 md:text-4xl text-3xl tracking-wide space-y-6 -mb-4">
                <div className="flex gap-16 items-center">
                    <h1 className="mt-3 text-xl">Hi There!
                        {count?<span className="text-primary">{" "+count+getOrdinalSuffix(count)} visitor</span> :<></>}
                    </h1>
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
            <HeroImageCard img={HomeImage} className="md:flex-1 flex items-center justify-center md:order-last order-first" />
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