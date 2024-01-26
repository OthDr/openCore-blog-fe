import React from 'react';
import { ReactComponent as DotIcon } from "../../assets/dot.svg";

interface BlogCardProps {
    title: string;
    author: string;
    date: string;
    readTime: string;
    img: any;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, author, date, readTime, img }) => {
    return (
        <div className="bg-white p-2 lg:p-3 rounded-xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 rounded-xl bg-lightGray">
                <img className="w-full h-full bg-cover rounded-xl lg:rounded-l-xl lg:rounded-r-none" src={img} alt="grid bg" />
                <div className="flex flex-col justify-center items-center py-4 lg:py-0">
                    <div className="lg:h-[65%] flex flex-col items-center lg:items-start justify-between gap-y-3 lg:gap-y-4">
                        <div className="flex flex-col gap-y-4 lg:gap-y-8">
                            <div className="flex items-center gap-x-2 lg:gap-x-3 text-sm lg:text-sm text-darkBlue">
                                <p>FREELANCING 101</p>
                                <DotIcon />
                                <p>{author}</p>
                            </div>
                            <h1 className="text-2xl lg:text-4xl text-darkBlue max-w-60 font-semibold lg:max-w-sm pb-6 lg:pb-10 text-center lg:text-start">
                                {title}
                            </h1>
                        </div>
                        <div className="flex items-center gap-x-2 lg:gap-x-3 text-sm lg:text-sm text-darkBlue">
                            <p>{readTime}</p>
                            <DotIcon />
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;
