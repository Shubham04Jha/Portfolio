import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import DATA from "../config";
import { SocialIcon } from "./icons/SocialIcon";

export const Footer = ()=>{
    const year = new Date().getFullYear();
    const {name,initials,githubLink,xLink,linkedinLink,firstName} = DATA;
    return(
        <div className=" bg-secondary-950 text-lg min-h-20 flex flex-col gap-4 mb-4">
            <p className="flex justify-center items-center">Designed and Developed by&nbsp;
                <Link to={'/about'} className="text-primary">{name}</Link>
            </p>
            <p className="flex items-center justify-center">Copyright © {year} &nbsp;
                <Link to={'/about'} className="text-primary">{initials}</Link>
            </p>
            <div className='flex justify-center items-center gap-4 text-primary '>
                <SocialIcon href={githubLink} label={`${firstName}'s github`} icon={FaGithub}/>
                <SocialIcon href={xLink} label={`${firstName}'s x profile`} icon={FaXTwitter }/>
                <SocialIcon href={linkedinLink} label={`${firstName}'s linkedin`} icon={FaLinkedinIn}/>
            </div>
        </div>
    )
}