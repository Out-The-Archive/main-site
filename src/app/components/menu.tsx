"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative p-4 bg-white">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <img src="/icons/logo.svg" alt="OTA logo" className="h-10" />

                <ul className="hidden md:flex gap-6">
                    <li>
                        <a href="#">about</a>
                    </li>
                    <li>
                        <a href="#">join</a>
                    </li>
                    <li>
                        <a href="#">community</a>
                    </li>
                    <li>
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
                className={`absolute z-50 top-full left-0 w-full bg-white transition-all duration-300 ease-in-out ${
                    isOpen ? "translate-x-0" : "-translate-x-full"
                } md:hidden`}
            >
                <ul className="flex flex-col items-center space-y-4 p-4 mt-10">
                    <li className="w-3/4">
                        <a
                            href="#"
                            className="text-3xl block w-full px-4 py-3 rounded-full border-2 border-dotted border-red-400 bg-gray-100 text-center"
                        >
                            about
                        </a>
                    </li>
                    <li className="w-3/4">
                        <a
                            href="#"
                            className="text-3xl block w-full px-4 py-3 rounded-full border-2 border-dotted border-green-400 bg-gray-100 text-center"
                        >
                            join
                        </a>
                    </li>
                    <li className="w-3/4">
                        <a
                            href="#"
                            className="text-3xl block w-full px-4 py-3 rounded-full border-2 border-dotted border-blue-400 bg-gray-100 text-center"
                        >
                            community
                        </a>
                    </li>
                </ul>
                <li className="flex flex-col items-center space-y-4 p-4 mt-60">
                    <a
                        href="#"
                        className="text-3xl text-white block w-3/4 px-4 py-3.5 rounded-full shadow-lg bg-[#DF6431] opacity-[.67] text-center"
                    >
                        login
                    </a>
                </li>
            </div>
        </nav>
    );
}
