import Link from "next/link";
import {useEffect, useRef, useState} from "react";
import {useRouter} from "next/router";

export const Header = () => {

    const [isMenuTrue, setIsMenuTrue] = useState(false);

    const toggleMenu = () => {
        setIsMenuTrue(!isMenuTrue)
    }

    return (
        <>
            <nav className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 shadow-md sticky inset-x-0 top-0">
                <div className="grid md:hidden grid-rows-9 grid-flow-col gap-5 py-10 pr-10">
                    <svg onClick={toggleMenu} className="row-start-1 col-start-8 text-center stroke-current stroke-[1.5]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>

                </div>
                <div className={"hidden md:grid grid-rows-9 grid-flow-col md:grid-rows-1 md:grid-cols-9 gap-5 py-4 md:container md:mx-auto"}>
                    <Link href="/" className="transition-all md:col-start-2 text-center btn-navbar">Accueil</Link>
                    <Link href="/a_propos" className="md:row-start-1 md:col-start-3 text-center btn-navbar">A propos</Link>
                    <Link href="/parcours" className="md:row-start-1 md:col-start-4 text-center btn-navbar">Parcours</Link>
                    <Link href="/projets" className="md:row-start-1 md:col-start-5 text-center btn-navbar">Projets</Link>
                    <Link href="/contact" className="md:row-start-1 md:col-start-8 text-center btn-navbar">Contact</Link>
                </div>
            </nav>
            <nav className={
                isMenuTrue ? "fixed left-0 top-0 w-[100%] sm:hidden bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 ease-in duration-500"
                : "fixed left-0 top-[-100%] w-[100%] bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 ease-in duration-500"
            }>
                <div className="grid grid-rows-9 grid-flow-col gap-5 py-10 pr-10">
                    <svg onClick={toggleMenu} className="row-start-1 col-start-8 text-center stroke-current stroke-[1.5]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>

                </div>
                <div className="grid grid-rows-9 grid-flow-col gap-5 p-10">
                    <Link onClick={toggleMenu} href="/" className="row-start-1 text-center">Accueil</Link>
                    <Link onClick={toggleMenu} href="/a_propos" className="row-start-2 text-center">A propos</Link>
                    <Link onClick={toggleMenu} href="/parcours" className="row-start-3 text-center">Parcours</Link>
                    <Link onClick={toggleMenu} href="/projets" className="row-start-4 text-center">Projets</Link>
                    <Link onClick={toggleMenu} href="/contact" className="row-start-5 text-center">Contact</Link>
                </div>
            </nav>
            <div onClick={toggleMenu} className={
                isMenuTrue ? "fixed left-0 top-0 w-[100%] backdrop-blur-sm h-screen sm:hidden z-[1] ease-in duration-500"
                : "fixed left-0 top-0 w-[100%] h-screen z-[-1] sm:hidden ease-in duration-500"
            }></div>
        </>
    );
}