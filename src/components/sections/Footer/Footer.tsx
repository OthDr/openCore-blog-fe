import { ReactComponent as Instagram } from "../../../assets/icons/links/blueInstagram.svg";
import { ReactComponent as LinkedIn } from "../../../assets/icons/links/blueLinkedIn.svg";
import { ReactComponent as Facebook } from "../../../assets/icons/links/blueFacebook.svg";
import { ReactComponent as Twitter } from "../../../assets/icons/links/blueTwitter.svg";

const Footer: React.FC = () => {
    return (
        <div className="p-4 lg:px-40 lg:py-12 bg-gradient-to-tr from-mediumBlue1 to-mediumBlue2">
            <div className="relative flex flex-col gap-y-4 items-center justify-center bg-white rounded-xl overflow-hidden p-4 lg:p-8">
                <div className="w-full flex flex-col gap-y-6 lg:flex-row items-center lg:justify-between">

                    <div className="flex flex-col gap-y-4 text-navyBlue">
                        <div className="flex flex-col gapy-3">
                            <h3 className="font-bold text-lg">Say Hello!</h3>
                            <h3 className="font-normal text-neutral-500">Atlaspremier@gmail.com</h3>
                        </div>
                        <div className="flex items-center gap-x-6 lg:gap-x-12">
                            <a href="##" className="group hover:shadow-xl p-2 bg-lightBlue">
                                <Instagram className="group-hover:scale-110 duration-150" />
                            </a>
                            <a href="##" className="group hover:shadow-xl p-2 bg-lightBlue">
                                <Facebook className="group-hover:scale-110 duration-150" />
                            </a>
                            <a href="##" className="group hover:shadow-xl p-2 bg-lightBlue">
                                <Twitter className="group-hover:scale-110 duration-150" />
                            </a>
                            <a href="##" className="group hover:shadow-xl p-2 bg-lightBlue">
                                <LinkedIn className="group-hover:scale-110 duration-150" />
                            </a>
                        </div>
                    </div>

                    <div className="flex flex-col text-neutral-500">
                        <div className="flex items-start gap-x-12">
                            <div className="flex flex-col gap-y-2 lg:gap-y-3">

                                <a href="##" className="font-normal hover:text-navyBlue">home</a>
                                <a href="##" className="font-normal hover:text-navyBlue">About us</a>
                                <a href="##" className="font-normal hover:text-navyBlue">Work</a>
                            </div>
                            <div className="flex flex-col gap-y-2 lg:gap-y-3">
                                <a href="##" className="font-normal hover:text-navyBlue">Services</a>
                                <a href="##" className="font-normal hover:text-navyBlue">Contact us</a>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-full flex flex-col gap-y-2 lg:gap-y-3 lg:flex-row items-center lg:justify-between pt-4 pb-10 lg:pb-16">
                    <h3 className="font-normal text-neutral-500">NewYork, US</h3>
                    <h3 className="font-normal text-neutral-500">AtlasPremier. All Rights Reserved</h3>
                </div>

                <h1 className="absolute -bottom-2 text-3xl lg:text-7xl font-bold text-navyBlue">Atlas Premier</h1>
            </div>
        </div>
    );
};

export default Footer;