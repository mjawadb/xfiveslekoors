import React, { useState } from 'react';
import useWindowScroll from '../../config/getWindowScroll';
import { navbarLogo2, hamburger } from '../../assets/img';
import { contentNavbar } from '../../config/constant/ContentNavbar/ContentNavbar';

const Navbar = () => {
    const scrollPosition = useWindowScroll();
    const [toggle, setToggle] = useState(false)

    return (
        <>
            <nav className={`w-full z-[99999] fixed navbar pr-16 ${scrollPosition > 0 ? 'h-[100px] bg-primary justify-start flex-row-reverse' : 'h-[200px] bg-dimPrimary'} flex items-center rounded-b-[30px] duration-300`}>
                <img src={navbarLogo2} className={`duration-300 ${scrollPosition > 0 ? 'w-[300px] absolute  left-[0] translate-x-[0]' : 'w-[500px] absolute left-[50%] translate-x-[-50%]'}`} alt="X Fiveorite" />

                <ul className={`cursor-pointer text-secondary text-[18px] ${scrollPosition > 0 ? 'sm:flex hidden' : 'hidden'}`}>
                    {
                        contentNavbar.map((content, i) => {
                            if (i == contentNavbar.length-1) {
                                return <li><a href={`#${content.id}`}>{content.content}</a></li>
                            }
                            else {
                                return <li className='mr-6'><a href={`#${content.id}`}>{content.content}</a></li>
                            }
                        })
                    }
                </ul>

                <div
                    className={`sm:hidden ${scrollPosition > 0 ? 'block' : 'hidden'}`}
                    onClick={() => setToggle((prev) => !prev)}
                >
                    {
                        toggle ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-10 h-10">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg> :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="w-10 h-10 cursor-pointer">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                            </svg>

                    }
                </div>
            </nav>

            {
                toggle ? <div className={`bg-primary font-poppins opacity-[0.9] font-medium text-white sm:hidden flex flex-col fixed z-[2] right-0 top-[75px] py-7 px-16 pt-10 sidebar rounded-b-xl text-[18px] ${scrollPosition > 0 ? 'flex' : 'hidden'}`}>
                    <ul>
                        {
                            contentNavbar.map(content => (
                                <li className='mr-6'><a href={`#${content.id}`}>{content.content}</a></li>
                            ))
                        }
                    </ul>
                </div> : null
            }

        </>
    )
}

export default Navbar