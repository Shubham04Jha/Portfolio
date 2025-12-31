import { Link } from "react-router-dom";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import DATA from "../config";
import { SocialIcon } from "./icons/SocialIcon";

export const Footer = ()=>{
    const year = new Date().getFullYear();
    const {name,initials,githubLink,xLink,linkedinLink,firstName} = DATA;
    return(
        <div className="  text-lg flex flex-col md:grid md:grid-cols-12 gap-2 py-4 ">
            <p className="flex justify-center items-center col-span-5">Designed and Developed by&nbsp;
                <Link to={'/about'} className="text-primary">{name}</Link>
            </p>
            <p className="flex items-center justify-center col-span-4">Copyright © {year} &nbsp;
                <Link to={'/about'} className="text-primary">{initials}</Link>
            </p>
            <div className='flex justify-center items-center gap-4 text-primary col-span-3'>
                <SocialIcon href={githubLink} label={`${firstName}'s github`} icon={FaGithub}/>
                <SocialIcon href={xLink} label={`${firstName}'s x profile`} icon={FaXTwitter }/>
                <SocialIcon href={linkedinLink} label={`${firstName}'s linkedin`} icon={FaLinkedinIn}/>
            </div>
        </div>
    )
}