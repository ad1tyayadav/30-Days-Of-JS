import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Header() {
    return (
        <header className="shadow relative z-[1] sticky z-50 top-0 bg-black text-white border-gray-200 px-4 lg:px-6 py-2.5">
            <nav className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                <Link to="/" className="flex items-center">
                    <div className='logop'>
                        <b className='text-2xl'>Aditya</b>
                    </div>
                </Link>

                <div className="w-[40%] sm:flex absolute flex text-2xl justify-around sm:w-[20%] right-8 sm:justify-around">
                    <a
                        className="text-base text-[7vh] sm:text-[2vw] font-medium text-white hover:text-[#df7e08]"
                        href="https://x.com/_its_Adi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaSquareXTwitter />
                    </a>
                    <a
                        className="text-base text-[7vh] sm:text-[2vw] font-medium text-white hover:text-[#df7e08]"
                        href="https://github.com/ad1tyayadav"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        className="text-base text-[7vh] sm:text-[2vw] font-medium text-white hover:text-[#df7e08]"
                        href="https://www.linkedin.com/in/aditya-yadav-39b20529a/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </nav>
        </header>
    );
}
