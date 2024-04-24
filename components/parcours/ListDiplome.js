'use client'

import Image from "next/image";

export const ListDiplome = ({diplomes}) => {

    const listImgs = (imgs) => {
        return (
            <div className="grid grid-cols-4 md:grid-cols-8 justify-items-center">
                {imgs.map((img) => {
                    return (
                        <div key={img.id} className="mt-auto mb-auto">
                            <Image src={img.img} width={img.sizeImg} height={img.sizeImg} alt={img.alt} style={{objectFit:"contain"}} priority={false}/>
                        </div>
                    );
                })}
            </div>
        );
    }

    const renderDiplomes = (diplome) => {
        return (
            <div className="space-y-2">
                <Image src={diplome.img} width={150} height={150} alt={diplome.title} className="p-2 bg-white rounded-lg" priority={false}/>
                <h3 className="text-lg md:text-xl">{diplome.title}</h3>
                <h4 className="text-sm md:text-base p-2 bg-gray-600 rounded-lg md:p-0 md:bg-transparent md:rounded-none"><span className="md:p-2 md:bg-gray-600 md:rounded-lg">{diplome.subtitle}</span></h4>
                <p className="py-2">{diplome.date}</p>
                <p>{diplome.country}</p>
                {diplome.concepts !== "" && <p><b>Concepts :</b> {diplome.concepts}</p>}
                {diplome.languagesTools.length > 0 && <p><b>Langages et outils :</b></p>}
                {diplome.languagesTools.length > 0 && listImgs(diplome.languagesTools)}
            </div>
        )
    }

    return (
        <div className="mt-5 grid grid-rows-1 lg:grid-cols-2 gap-2">
            {diplomes.map((diplome) => {
                return (
                    <div key={diplome.id} className="mb-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl">
                        {renderDiplomes(diplome)}
                    </div>
                );
            })}
        </div>
    );
}