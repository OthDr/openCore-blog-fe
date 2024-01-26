import gridBg from "../../assets/img/gridBg.svg";
import imgBehance from "../../assets/icons/links/behance.svg";
import imgFacebook from "../../assets/icons/links/facebook.svg";
import imgInstagram from "../../assets/icons/links/instagram.svg";
import imgDribble from "../../assets/icons/links/dribbble.svg";
import imgLinkedin from "../../assets/icons/links/linkedin.svg";

const SocialBlock: React.FC = () => {
    return (
        <div className="w-full h-full lg:h-[400px] relative rounded-t-xl overflow-hidden">
            <img className="absolute top-0 bg-cover" src={gridBg} alt="grid bg" />
            <div className="py-16 lg:py-0 w-full h-full flex items-center justify-center gap-x-2 lg:gap-x-6">
                {socialMediaLinks.map((link, index) => (
                    <a
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.url}
                        className="hover:scale-110 hover:brightness-125 duration-200"
                    >
                        <img src={link.icon} alt="social-media" className="w-9 lg:w-16 h-9 lg:h-16" />
                    </a>
                ))}
            </div>
            <img className="hidden lg:block absolute bottom-0 bg-cover rotate-180" src={gridBg} alt="grid bg" />
        </div>
    );
}

const socialMediaLinks = [
    {
        url: "https://www.facebook.com/opencore-group",
        icon: imgFacebook
    },
    {
        url: "https://www.linkedin.com/company/opencore-group/?originalSubdomain=ca",
        icon: imgLinkedin
    },
    {
        url: "https://www.instagram.com/opencore-group",
        icon: imgInstagram
    },
    {
        url: "https://www.behance.com/opencore-group",
        icon: imgBehance
    },
    {
        url: "https://www.dribbble.com/opencore-group",
        icon: imgDribble
    }
];

export default SocialBlock;
