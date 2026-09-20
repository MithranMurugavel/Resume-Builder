import React from "react";
import { Link } from 'react-router-dom'
const Hero = () => {
    return (
        <section className="min-h-screen bg-amber-400/75 text-white flex flex-col">

            <nav className="w-full flex items-center justify-between px-5 py-4 sm:px-8 md:px-12 lg:px-24 border-b border-white/25 ">
                <img
                    src="/logo.svg"
                    alt="Logo"
                    className="w-24 sm:w-28 md:w-32" />
                <ul className="hidden md:flex items-center gap-6 lg:gap-10"> <li> <a href="#" className="text-sm lg:text-base hover:text-black transition"> Home </a> </li>
                    <li>
                        <a href="#about" className="text-sm lg:text-base hover:text-black transition" > About </a> </li>
                    <li>
                        <a href="#contact" className="text-sm lg:text-base hover:text-black transition" > Contact </a> </li>
                </ul>
                <Link to='/app?state=register'>
                    <button className="bg-indigo-600 px-4 py-2 sm:px-5 md:px-6 rounded-full text-sm sm:text-base hover:bg-indigo-700 transition">
                        Sign Up
                    </button>
                </Link>

            </nav>

            <div className="flex-1 flex flex-col items-center justify-center text-center px-5 sm:px-8 py-20 md:py-28">


                <h1 className="text-4xl sm:text-1xl md:text-6xl lg:text-4xl font-semibold leading-tight max-w-3xl text-shadow-lg">
                    Build Your Own Presence
                </h1>


                <p className="text-black text-sm sm:text-base md:text-lg max-w-md md:max-w-xl mt-6 leading-relaxed">
                    The professionals who are presenting their infomation through our platform
                </p>


                <div className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto">

                    <Link to="/app?state=register">
                        <button className="bg-indigo-600 px-6 py-3 rounded-full hover:bg-indigo-700 transition w-full sm:w-auto">
                            Get Started →
                        </button>
                    </Link>

                </div>

            </div>

        </section>
    );
};

export default Hero;

