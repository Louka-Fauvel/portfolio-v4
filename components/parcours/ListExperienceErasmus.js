'use client'

import Image from "next/image";

export const ListExperienceErasmus = ({experiencesErasmus}) => {

    const renderExperienceErasmus = (experienceErasmus) => {
        return (
            <div className="space-y-2">
                <Image src={experienceErasmus.img} width={150} height={150} alt={experienceErasmus.title} className="p-2 bg-white rounded-lg"/>
                <h3 className="text-xl md:text-2xl">{experienceErasmus.title}</h3>
                <p className="py-2">{experienceErasmus.date}</p>
                <p>{experienceErasmus.weeks}</p>
                <p>{experienceErasmus.country}</p>
                <p className="p-2 bg-gray-600 rounded-lg">{experienceErasmus.description}</p>
                {experienceErasmus.languagesTools !== "" && <p><b>Langages et outils :</b> {experienceErasmus.languagesTools}</p>}
            </div>
        )
    }

    return (
        <div className="mt-5 grid grid-rows-1 lg:grid-cols-2 gap-2">
            {experiencesErasmus.map((experienceErasmus) => {
                return (
                    <div key={experienceErasmus.id} className="mb-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl">
                        {renderExperienceErasmus(experienceErasmus)}
                    </div>
                );
            })}
        </div>
    );
}