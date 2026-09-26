import { useState } from "react";
import logo from "../../assets/logo-text.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200">

            <div className="max-w-350 mx-auto px-4">
                <div className="flex md:hidden h-16 items-center justify-between">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-slate-600"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                className="w-7 h-7"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                    <div className="flex items-center gap-2">


                        <img
                            src={logo}
                            alt="DevStack"
                            className="w-20"
                        />

                    </div>
                    <div className="flex items-center gap-2">

                        <button className="text-xs sm:text-sm font-semibold text-slate-600">
                            Sign In
                        </button>

                        <button className="bg-[#D91B7E] hover:bg-[#C2186B] text-white text-xs sm:text-sm font-semibold px-3 sm:px-4 py-2 rounded-full shadow-md transition-all duration-300">
                            Sign Up
                        </button>

                    </div>

                </div>
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen
                        ? "max-h-80 opacity-100 pb-5"
                        : "max-h-0 opacity-0"
                        }`}
                >

                    <nav className="border-t border-slate-100 pt-4">

                        <ul className="flex flex-col gap-1">

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#D91B7E] transition"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#D91B7E] transition"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#D91B7E] transition"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#D91B7E] transition"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="block px-3 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 hover:text-[#D91B7E] transition"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>

                    </nav>

                </div>
                <div className="hidden md:flex h-20 items-center justify-between">

                    <img
                        src={logo}
                        alt="DevStack"
                        className="w-28"
                    />
                    <nav>
                        <ul className="flex items-center gap-6 text-sm text-slate-600 font-medium">

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#D91B7E] transition"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#D91B7E] transition"
                                >
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#D91B7E] transition"
                                >
                                    Projects
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#D91B7E] transition"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="hover:text-[#D91B7E] transition"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </nav>
                    <div className="flex items-center gap-2">

                        <button
                            className="hover:bg-[#D91B7E] hover:text-white text-slate-600 px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            Sign In
                        </button>

                        <button
                            className="bg-[#D91B7E] hover:bg-white hover:text-slate-600 text-white px-5 py-2 rounded-xl font-semibold shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                        >
                            Sign Up
                        </button>

                    </div>

                </div>

            </div>

        </header>
    );
};

export default Header;