import gridBg from "../../../assets/img/gridBg.svg";

const BottomHero: React.FC = () => {
    return (
        <div className="px-4 lg:px-48 overflow-hidden">
            <div className="flex flex-col items-center justify-center bg-gradient-to-b from-mediumBlue1 to-mediumBlue2 rounded-xl overflow-hidden">
                <img loading="lazy" className="h-full lg:max-h-[400px] w-full bg-cover rounded-t-xl lg:rounded-l-xl lg:rounded-r-none" src={gridBg} alt="grid bg" />
                <div className="grid grid-cols-1 gap-6 place-items-center lg:grid-cols-2 py-4 lg:py-8">
                    <div className="flex flex-col gap-y-2 lg:gap-y-4">
                        <h1 className="text-xl lg:text-6xl max-w-44 lg:max-w-md font-bold text-white">
                            Transforming your Ideas into reality
                        </h1>
                        <p className="text-xs lg:text-base text-white max-w-60 lg:max-w-md">
                            Let's build something extraordinary together to  captivate your audience.
                        </p>
                    </div>
                    <button className="group hover:shadow-lg shadow shadow-white h-fit w-fit flex items-center justify-center border-white border-2 rounded-full hover:bg-white duration-150">
                        <h3 className="text-white hover:text-navyBlue text-base lg:text-3xl max-w-[113px] px-6 py-5 lg:max-w-56 lg:px-12 lg:py-14">
                            Let’s Work Together!
                        </h3>
                    </button>

                </div>
                <img loading="lazy" className="h-full rotate-180 lg:max-h-[400px] w-full bg-cover rounded-t-xl lg:rounded-l-xl lg:rounded-r-none" src={gridBg} alt="grid bg" />
            </div>
        </div>
    );
};

export default BottomHero;