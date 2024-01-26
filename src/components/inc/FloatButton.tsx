import { ReactComponent as AIcon } from "../../assets/icons/aIcon.svg";
import { ReactComponent as Hamburger } from "../../assets/icons/hamburger.svg";

const FloatButton: React.FC = () => {
    return (
        <div className="flex items-center divide-x divide-darkBlue rounded-full p-2 lg:p-3 border border-darkBlue">
            <AIcon className="w-5 lg:w-6 h-5 lg:h-6" />
            <Hamburger className="w-5 lg:w-6 h-5 lg:h-6" />
        </div>
    );
}

export default FloatButton;