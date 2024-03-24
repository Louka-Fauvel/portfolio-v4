'use client'

import Image from "next/image";
import Link from "next/link";

export const ListProjet = ({projets}) => {

    const renderProjet = (projet) => {
        return (
            <div className="flex flex-col justify-center items-center space-y-4">
                <h3 className="text-xl text-center md:text-2xl">{projet.title}</h3>
                <Link href={`/projets/`+projet.route}>
                    <Image src={projet.img} width={projet.sizeImg1} height={projet.sizeImg1} alt={projet.title} className="hidden md:block p-2 mx-auto bg-white rounded-lg border-2 border-white hover:border-red-600"/>
                    <Image src={projet.img} width={projet.sizeImg1} height={projet.sizeImg1} alt={projet.title} className="md:hidden p-2 mx-auto bg-white rounded-lg border-2 border-white hover:border-red-600"/>
                </Link>
            </div>
        )
    }

    return (
        <div className="mt-5 grid grid-rows-1 lg:grid-cols-2 gap-2">
            {projets.map((projet) => {
                return (
                    <div key={projet.id} className="mb-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl">
                        {renderProjet(projet)}
                    </div>
                );
            })}
        </div>
    );
}