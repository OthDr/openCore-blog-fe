import React from 'react';
import { ReactComponent as DotIcon } from "../../assets/dot.svg";
import gridBg from "../../assets/img/gridBg.svg";

interface BlogCardProps {
    title: string;
    author: string;
    date: string;
    readTime: string;
    img?: any;
    block?: any;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, author, date, readTime, img, block }) => {
    return (
        <div className="animate-slideleft lg:animate-slideup bg-white p-2 lg:p-3 rounded-xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-xl overflow-hidden bg-lightGray h-full"> {/* Ensure the parent container has a defined height */}
                {block ? block : <img className="h-full lg:max-h-[400px] w-full bg-cover rounded-t-xl lg:rounded-l-xl lg:rounded-r-none" src={img} alt="grid bg" />}
                <div className="flex flex-col justify-center items-center lg:py-6">
                    <div className="lg:h-full flex flex-col items-center py-4 lg:py-0 lg:items-start justify-between gap-y-3 lg:gap-y-4">
                        <div className="flex flex-col gap-y-4 lg:gap-y-8">
                            <div className="flex items-center gap-x-2 lg:gap-x-3 text-sm lg:text-sm text-darkBlue">
                                <p>FREELANCING 101</p>
                                <DotIcon />
                                <p>{author}</p>
                            </div>
                            <h1 className="text-3xl lg:text-4xl text-navyBlue max-w-64 leading-normal lg:leading-relaxed font-semibold lg:max-w-sm pb-4 lg:pb-8 text-center lg:text-start">
                                {title}
                            </h1>
                        </div>
                        <div className="flex items-center gap-x-2 lg:gap-x-3 text-sm lg:text-sm text-darkBlue">
                            <p>{readTime}</p>
                            <DotIcon />
                            <p>{date}</p>
                        </div>
                    </div>

                    {block && <img className="lg:hidden bg-cover rotate-180" src={gridBg} alt="grid bg" />}
                </div>
            </div>

        </div>

    );
};

export default BlogCard;
