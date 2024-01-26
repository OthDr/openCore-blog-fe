import React from 'react';
import gridBg from "../../../assets/img/gridBg.svg";
import laptopImg from "../../../assets/img/laptopBg.svg";
import BlogCard from '../../inc/BlogCard';

const Header: React.FC = () => {
    return (
        <header className="pt-6 lg:pt-12">
            <div className="px-4 lg:px-48 flex flex-col gap-y-6 lg:gap-y-14">

                <div className="h-full grid grid-cols-1 lg:grid-cols-2 gap-4">
                    <div className="w-full flex flex-col items-center justify-center lg:items-start">
                        <h1 className="text-3xl lg:text-6xl font-bold max-w-xs lg:max-w-lg text-darkBlue leading-normal">Atlas Premier  Knowledge Blogs:</h1>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className="text-base lg:text-xl font-normal max-w-xs lg:max-w-md text-darkBlue drop-shadow-sm">
                            "Immerse yourself in the latest knowledge and research from our team of software engineers and design professionals."
                        </p>
                    </div>
                </div>

                <BlogCard
                    img={laptopImg}
                    title="07 Ways to get Consistent Clients from Social Media"
                    author="Joseph Patrick"
                    date="23 - 05 -2023"
                    readTime="15 Min Read"
                />
                
            </div>
            <img className="hidden lg:block w-full h-full bg-cover rotate-180" src={gridBg} alt="grid bg" />
        </header>
    );
};

export default Header;
