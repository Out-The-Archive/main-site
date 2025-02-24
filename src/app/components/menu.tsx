"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
//no mobile scroll for menu open fix
//sticky navbar

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    return (
        <nav className="sticky top-0 z-50 p-4 bg-white ">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <img src="/icons/logo.svg" alt="OTA logo" className="h-10" />

                <ul className="hidden md:flex gap-6 font-larken">
                    <li className="hover:underline">
                        <a href="#">about</a>
                    </li>
                    <li className="hover:underline">
                        <a href="#">join</a>
                    </li>
                    <li className="hover:underline">
                        <a href="#">community</a>
                    </li>
                    <li className="hover:underline text-[#DF6431]">
                        <a href="#">log in</a>
                    </li>
                </ul>
                <button
                    className="md:hidden p-2 rounded-md outline-none focus:outline-none focus:ring-0"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={48} /> : <Menu size={48} />}
                </button>
            </div>

            <div
                className={`fixed z-50 left-0 h-screen w-full bg-white flex flex-col justify-between transition-all duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
            >
                <ul className="flex flex-col items-center space-y-4 p-4">
                    <li className="w-3/4">
                        <a
                            href="#"
                            className="text-3xl block w-full px-4 py-3 rounded-full border-2 border-dotted border-[#DF6431] bg-[#FFFAF9] hover:bg-[#DF6431] hover:opacity-[.67] text-center font-larken"
                        >
                            about
                        </a>
                    </li>
                    <li className="w-3/4">
                        <a
                            href="#"
                            className="text-3xl block w-full px-4 py-3 rounded-full border-2 border-dotted border-[#449E5B] bg-[#FFFAF9] hover:bg-[#449E5B] hover:opacity-[.5] text-center font-larken"
                        >
                            join
                        </a>
                    </li>
                    <li className="w-3/4">
                        <a
                            href="#"
                            className="text-3xl block w-full px-4 py-3 rounded-full border-2 border-dotted border-[#99BBD3] bg-[#FFFAF9] hover:bg-[#A6D5E8] hover:opacity-[.47] text-center font-larken"
                        >
                            community
                        </a>
                    </li>
                </ul>

                <div className="w-full flex flex-col items-center p-4 mb-28">
                    <a
                        href="#"
                        className="text-3xl text-white block w-3/4 px-4 py-3.5 rounded-full drop-shadow-2xl bg-[#DF6431] hover:opacity-[1] opacity-[.67] hover:shadow-[inset_0px_4px_10px_rgba(0,0,0,0.3)] text-center font-larken font-medium"
                    >
                        log in
                    </a>
                    <div className="flex flex-col items-center p-2 text-xs font-aileron font-extralight">
                        Out The Archive * 2025
                    </div>
                </div>
            </div>
        </nav>
    );
}
