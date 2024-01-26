import FloatButton from "./FloatButton";
import gridBg from "../../assets/img/gridBg.svg";

const Navbar = () => {
    return (
        <header className="relative flex flex-col items-center justify-center ">
            <img className="w-full h-full bg-cover" src={gridBg} alt="grid bg" />
            <FloatButton />
        </header>
    );
}

export default Navbar;