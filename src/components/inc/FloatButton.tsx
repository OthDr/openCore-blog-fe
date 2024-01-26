import { ReactComponent as AIcon } from "../../assets/icons/aIcon.svg";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";

const FloatButton: React.FC = () => {
    return (
        <div className="fixed top-6 lg:top-14 flex items-center rounded-full">
            <button className="bg-white px-3 lg:px-4 py-2 lg:py-3 hover:drop-shadow duration-150 border rounded-l-full border-r-0">
                <AIcon className="w-5 lg:w-7 h-5 lg:h-7" />
            </button>
            <button className="bg-white px-3 lg:px-4 py-2 lg:py-3 hover:drop-shadow duration-150 border rounded-r-full">
                <Hamburger className="w-5 lg:w-7 h-5 lg:h-7" />
            </button>
        </div>

    );
}

export default FloatButton;