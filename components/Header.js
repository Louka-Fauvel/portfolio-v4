'use client'

import Link from "next/link";
import {useState} from "react";
import { MenuLinedThreeSVG, XMarkSVG } from "./svgs";

export const Header = () => {

    const [isMenuTrue, setIsMenuTrue] = useState(false);

    const toggleMenu = () => {
        setIsMenuTrue(!isMenuTrue)
    }

    return (
        <>
            <nav className="bg-white shadow-md sticky inset-x-0 top-0 text-red-600">
                <div className="grid md:hidden grid-flow-col gap-5 py-5 pr-5 text-6xl fill-gray-900">

                    <MenuLinedThreeSVG onClick={toggleMenu} className="row-start-1 col-start-8 text-center"/>

                </div>
                <div className={"hidden md:grid grid-rows-9 grid-flow-col md:grid-rows-1 md:grid-cols-9 gap-5 py-4 md:container md:mx-auto"}>
                    <Link href="/" className="md:col-start-2 text-center md:btn-navbar">A propos</Link>
                    <Link href="/parcours" className="md:row-start-1 md:col-start-3 text-center md:btn-navbar">Parcours</Link>
                    <Link href="/projets" className="md:row-start-1 md:col-start-4 text-center md:btn-navbar">Projets</Link>
                    <Link href="/contact" className="md:row-start-1 md:col-start-8 text-center md:btn-navbar">Contact</Link>
                </div>
            </nav>
            <nav className={
                isMenuTrue ? "fixed left-0 top-0 w-[100%] sm:hidden bg-white ease-in duration-500"
                : "fixed left-0 top-[-100%] w-[100%] bg-white ease-in duration-500"
            }>
                <div className="grid grid-flow-col gap-5 py-5 pr-5 text-6xl fill-gray-900">
                    
                    <XMarkSVG onClick={toggleMenu} className="row-start-1 col-start-8 text-center"/>

                </div>
                <div className="grid grid-rows-9 grid-flow-col gap-5 p-10 text-red-600">
                    <Link onClick={toggleMenu} href="/" className="row-start-1 text-center">A propos</Link>
                    <Link onClick={toggleMenu} href="/parcours" className="row-start-2 text-center">Parcours</Link>
                    <Link onClick={toggleMenu} href="/projets" className="row-start-3 text-center">Projets</Link>
                    <Link onClick={toggleMenu} href="/contact" className="row-start-4 text-center">Contact</Link>
                </div>
            </nav>
            <div onClick={toggleMenu} className={
                isMenuTrue ? "fixed left-0 top-0 w-[100%] backdrop-blur-sm h-screen sm:hidden z-[1] ease-in duration-500"
                : "fixed left-0 top-0 w-[100%] h-screen z-[-1] sm:hidden ease-in duration-500"
            }></div>
        </>
    );
}