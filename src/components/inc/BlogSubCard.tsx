import { ReactComponent as DotIcon } from "../../assets/dot.svg";

interface BlogSubCardProps {
    title: string;
    author: string;
    date: string;
    readTime: string;
    imgUrl?: string;
}

const BlogSubCard: React.FC<BlogSubCardProps> = ({ title, author, date, readTime, imgUrl }) => {
    return (
        <div className="animate-slideleft lg:animate-slideup bg-white rounded-xl overflow-hidden shadow-md hover:brightness-110 hover:shadow-xl hover:scale-[102%] duration-150 cursor-pointer">
            <div className="grid grid-cols-1 rounded-xl overflow-hidden bg-lightGray h-full">
                <img
                    src={imgUrl}
                    alt="grid bg"
                    className="h-52 w-full object-contain rounded-t-xl lg:rounded-l-xl lg:rounded-r-none"
                    loading="lazy"
                />
                <div className="p-4 lg:p-6 flex flex-col justify-between">
                    <div className="flex flex-col gap-2 lg:gap-3">
                        <div className="flex items-center gap-2 lg:gap-3 text-sm text-darkBlue">
                            <p>FREELANCING 101</p>
                            <DotIcon />
                            <p>{author}</p>
                        </div>
                        <h1 className="text-xl lg:text-2xl text-navyBlue font-semibold pb-2 lg:pb-4">{title}</h1>
                    </div>
                    <div className="flex items-center gap-2 lg:gap-3 text-sm text-darkBlue">
                        <p>{readTime}</p>
                        <DotIcon />
                        <p>{date}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogSubCard;
