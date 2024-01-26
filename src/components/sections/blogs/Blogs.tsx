import React, { useState } from 'react';
import NavItem from '../../inc/NavbItem';
import BlogCard from '../../inc/BlogCard';
import laptopImg from "../../../assets/img/laptopBg.svg";

const Blogs: React.FC = () => {
    const [selectedNav, setSelectedNav] = useState('All Blogs');

    const navItems = [
        { title: 'All Blogs' },
        { title: 'Trends' },
        { title: 'Research' },
        { title: 'In-house Knowledge' }
    ];

    const handleNavClick = (nav: string) => {
        setSelectedNav(nav);
    };

    return (
        <div className="py-8 lg:py-12 px-4 lg:px-32 flex flex-col gap-y-4 lg:gap-y-12">
            <div className="w-full flex flex-col items-center  gap-y-3 lg:flex-row lg:justify-between">
                <h1 className='text-3xl lg:text-6xl font-bold text-navyBlue'>Blogs</h1>
                <nav className=" flex flex-wrap items-center justify-center space-x-6 space-y-2 lg:space-y-0">
                    {navItems.map((item, index) => (
                        <NavItem
                            key={index}
                            title={item.title}
                            selected={selectedNav === item.title}
                            onClick={() => handleNavClick(item.title)}
                        />
                    ))}
                </nav>
            </div>

            <div className="">
                <BlogCard
                    img={laptopImg}
                    author='William George'
                    date='23 - 05 -2023'
                    readTime='15 Min Read'
                    title='07 Ways to get Consistent Clients from Social Media'
                />
            </div>
        </div>
    );
};

export default Blogs;
