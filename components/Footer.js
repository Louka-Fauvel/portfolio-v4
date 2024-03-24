'use client'

import Link from "next/link";
import {useState} from "react";

export const Footer = () => {

    const [isModalRGPD, setIsModalRGPD] = useState(false);
    const [isModalMentionsLegal, setIsModalMentionsLegal] = useState(false);

    const submitRGPD = () => {
        setIsModalRGPD(!isModalRGPD);
        if(!isModalRGPD) {
            document.getElementById("bodyLayout").classList.add("overflow-hidden");
        } else {
            document.getElementById("bodyLayout").classList.remove("overflow-hidden");
        }
    }

    const submitMentionsLegal = () => {
        setIsModalMentionsLegal(!isModalMentionsLegal);
        if(!isModalMentionsLegal) {
            document.getElementById("bodyLayout").classList.add("overflow-hidden");
        } else {
            document.getElementById("bodyLayout").classList.remove("overflow-hidden");
        }
    }

    return (
        <>
            <nav className="bg-white shadow-md mt-16 text-red-600 z-0">
                <div className="grid gap-2 md:grid-cols-2 py-0 container mx-auto">
                    <button onClick={submitRGPD} className="text-center md:btn-navbar">RGPD</button>
                    <button onClick={submitMentionsLegal} className="text-center md:btn-navbar">Mentions légales</button>
                </div>
            </nav>

            <div  className={
                isModalRGPD ? "fixed left-0 top-0 w-[100%] h-screen z-[2]"
                : "fixed left-0 top-0 w-[100%] h-screen hidden z-[-1]"
            }>
                <div className="h-screen flex justify-center items-center">
                    <div className="p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl z-[3] w-[75%] h-[75%] md:w-[50%] overflow-y-auto no-scrollbar">
                        
                        <div className="space-y-4 text-sm md:text-base">
                            <p><b>Article 1 :</b> Vos données à caractère personnel sont protégées</p>
                            <div>
                                <p>La CNIL veille à la protection de vos données à caractère personnel.</p>
                                <p>Article 2-78-17 (6 janvier 1978)</p>
                            </div>
                            <p><b>Article 2 :</b> Comment sont utilisés vos données ?</p>
                            <p>Louka Fauvel peut connaître votre nom et prénom et votre adresse mail grâce au formulaire de contact.</p>
                            <p><b>Article 3 :</b> Finalité du traitement de vos données</p>
                            <p>Louka Fauvel se sert de vos données pour répondre uniquement à vos messages.</p>
                            <p><b>Article 4 :</b> A qui sont transmis vos données personnelles ?</p>
                            <p>Louka Fauvel ne transmet aucune de vos données à caractère personnel.</p>
                            <p><b>Article 5 :</b> Durée de conservation de vos données à caractère personnel ?</p>
                            <p>Louka Fauvel conservera vos données pendant 1 an.</p>
                            <p><b>Article 6 :</b> Vos droits</p>
                            <p>
                                Conformément au Règlement (UE) 2016/679 relatif à la protection des données à caractère personnel, 
                                vous disposez des droits suivants sur vos données : droit d’accès, droit de rectification, 
                                droit à l’effacement (droit à l’oubli), droit d’opposition, droit à la limitation du traitement, droit à la portabilité. 
                                Vous pouvez également définir des directives relatives à la conservation, 
                                à l'effacement et à la communication de vos données à caractère personnel après votre décès.
                            </p>
                            <p>Vous pouvez, pour des motifs tenant à votre situation particulière, vous opposer au traitement des données vous concernant.</p>
                        </div>
                        
                    </div>
                    <div onClick={submitRGPD} className={
                        isModalRGPD ? "fixed left-0 top-0 w-[100%] backdrop-blur-sm h-screen z-[1] ease-in duration-500"
                            : "fixed left-0 top-0 w-[100%] h-screen  ease-in duration-500"
                    }></div>
                </div>
            </div>

            <div  className={
                isModalMentionsLegal ? "fixed left-0 top-0 w-[100%] h-screen z-[2]"
                : "fixed left-0 top-0 w-[100%] h-screen hidden z-[-1]"
            }>
                <div className="h-screen flex justify-center items-center">
                    <div className="p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl z-[3] w-[75%] h-max-[75%] md:w-[50%] overflow-y-auto no-scrollbar">
                        
                        <div className="space-y-4 text-sm md:text-base">
                            <p><b>Réalisation :</b> Louka Fauvel</p>
                            <p>En 2024</p>
                            <p><b>Crédit photo portrait :</b> Fabienne Guérif</p>
                        </div>
                        
                    </div>
                    <div onClick={submitMentionsLegal} className={
                        isModalMentionsLegal ? "fixed left-0 top-0 w-[100%] backdrop-blur-sm h-screen z-[1] ease-in duration-500"
                            : "fixed left-0 top-0 w-[100%] h-screen  ease-in duration-500"
                    }></div>
                </div>
            </div>
        </>
    );
}