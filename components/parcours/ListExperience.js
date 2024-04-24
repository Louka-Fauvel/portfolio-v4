'use client'

import Image from "next/image";

export const ListExperience = ({experiences}) => {

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

    const renderExperience = (experience) => {
        return (
            <div className="space-y-2">
                <Image src={experience.img} width={150} height={150} alt={experience.title} className="p-2 bg-white rounded-lg" priority={false}/>
                <h3 className="text-lg md:text-xl">{experience.title}</h3>
                <p className="py-2">{experience.date}</p>
                <p>{experience.weeks}</p>
                <p>{experience.country}</p>
                <p className="p-2 bg-gray-600 rounded-lg">{experience.description}</p>
                {experience.languagesTools.length > 0 && <p><b>Langages et outils :</b></p>}
                {experience.languagesTools.length > 0 && listImgs(experience.languagesTools)}

                {experience.tools.length > 0 && <p><b>Outils :</b></p>}
                {experience.tools.length > 0 && listImgs(experience.tools)}
            </div>
        )
    }

    return (
        <div className="mt-5 grid grid-rows-1 lg:grid-cols-2 gap-2">
            {experiences.map((experience) => {
                return (
                    <div key={experience.id} className="mb-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl">
                        {renderExperience(experience)}
                    </div>
                );
            })}
        </div>
    );
}