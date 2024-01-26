interface NavItemProps {
    title: string;
    selected: boolean;
    onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ title, selected, onClick }) => {
    return (
        <button
            className={`text-lg lg:text-xl font-normal text-navyBlue py-1 lg:py-2 px-3 lg:px-4 border duration-150 drop-shadow-sm rounded-full whitespace-nowrap 
            ${selected ? ' bg-lightBlue border-navyBlue' : 'border-white hover:bg-lightBlue opacity-60'}`}
            onClick={onClick}
        >
            {title}
        </button>
    );
};

export default NavItem