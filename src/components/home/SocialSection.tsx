import { FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import DATA from "../../config";
import { SocialIcon } from "../ui/icons/SocialIcon";

export const SocialSection = () => {
  const socials = [
    { href: DATA.xLink, icon: FaTwitter, label: "X (Twitter)" },
    { href: DATA.instagramLink, icon: FaInstagram, label: "Instagram" },
    { href: DATA.linkedinLink, icon: FaLinkedinIn, label: "LinkedIn" },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="text-center space-y-2">
        <h2 className="text-4xl font-bold tracking-widest uppercase">
          Find Me <span className="text-primary">On</span>
        </h2>
        <p className="text-text-400">Feel free to <span className="text-primary">connect</span> with me</p>
      </div>
      
      <div className="flex gap-6">
        {socials.map((social) => (
          <SocialIcon key={social.label} {...social} size="lg" />
        ))}
      </div>
    </div>
  );
};