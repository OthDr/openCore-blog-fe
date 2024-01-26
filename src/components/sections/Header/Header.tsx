
import gridBg from "../../../assets/img/gridBg.svg";
import laptopImg from "../../../assets/img/laptopBg.svg";
import { ReactComponent as DotIcon } from "../../../assets/dot.svg";

const Header: React.FC = () => {
    return (
        <header className="pt-8 lg:pt-8">
            <div className="px-4 lg:px-40 flex flex-col gap-y-4 lg:gap-y-10">

                <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="w-full flex flex-col items-center justify-center lg:items-start">
                        <h1 className="text-3xl lg:text-6xl font-bold max-w-xs lg:max-w-lg text-darkBlue">Atlas Premier  Knowledge Blogs:</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-base lg:text-xl font-normal max-w-xs lg:max-w-md text-darkBlue drop-shadow-sm">
                            "Immerse yourself in the latest knowledge and research from our team of software engineers and design professionals."
                        </p>
                    </div>
                </div>

                <div className="bg-white p-2 lg:p-3 rounded-xl shadow-lg">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-xl bg-lightGray">
                        <img className="w-full h-full bg-cover rounded-xl lg:rounded-l-xl lg:rounded-r-none" src={laptopImg} alt="grid bg" />
                        <div className="flex flex-col justify-center items-center py-4 lg:py-0">
                            <div className="lg:h-[65%] flex flex-col items-center lg:items-start justify-between gap-y-3 lg:gap-y-4">
                                <div className="flex flex-col gap-y-4 lg:gap-y-8">
                                    <div className="flex items-center gap-x-2 lg:gap-x-3 text-sm lg:text-sm text-darkBlue">
                                        <p>FREELANCING 101</p>
                                        <DotIcon />
                                        <p>Joseph Patrick</p>
                                    </div>
                                    <h1 className="text-2xl lg:text-4xl text-darkBlue max-w-60 font-semibold lg:max-w-sm pb-6 lg:pb-10 text-center lg:text-start">
                                        07 Ways to get Consistent Clients from Social Media
                                    </h1>
                                </div>
                                <div className="flex items-center gap-x-2 lg:gap-x-3 text-sm lg:text-sm text-darkBlue">
                                    <p>15 Min Read</p>
                                    <DotIcon />
                                    <p>23 - 05 -2023</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <img className="hidden lg:block w-full h-full bg-cover rotate-180" src={gridBg} alt="grid bg" />
        </header>
    );
}

export default Header;