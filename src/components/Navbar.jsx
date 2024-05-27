import React, { useState } from "react";

export default function Navbar() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="w-full bg-transparent lg:h-16 py-3 px-4 md:px-32">
            <div className="mx-auto lg:flex lg:items-center text-white h-full">
                <div className="flex items-center justify-between">
                    <div className="w-56">
                        {/* Space for Logo */}
                    </div>

                    {/* Hamburger menu button for medium and large screens */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            {isMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    ></path>
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`${isMenuOpen ? "block" : "hidden"} mt-4 w-full lg:flex items-center lg:justify-between text-center lg:mt-0 h-full`}
                >
                    <div className="flex flex-col lg:flex-row lg:items-center w-full gap-4 justify-center">
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-white"
                        >
                            Home
                        </a>
                        
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-white"
                        >
                            Hot Tour
                        </a>
                        <a
                            href="#"
                            className=" px-4 py-2 rounded-lg text-sm xl:text-md  xl:font-medium text-slate-400 hover:text-white"
                        >
                            Contact
                        </a>

                    </div>


                    <div className="flex flex-col mt-4 md:mt-0 gap-4 rounded-full text-black lg:flex-row items-center">
                        <a
                            href="#"
                            className=" py-2 px-8 w-56 flex flex-col lg:flex-row font-medium xl:font-semibold bg-gradient-to-b from-blue-900 to-teal-500  focus:ring-2 transition-all duration-300 ease-in-out text-white items-center uppercase rounded justify-center"
                        >
                            Book Now
                        </a>

                    </div>
                </div>
            </div>
        </nav>
    );
};

