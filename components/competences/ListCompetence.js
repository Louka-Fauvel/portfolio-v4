'use client'

import Image from "next/image";

export const ListCompetence = ({competences}) => {

    const renderCompetence = (competence) => {
        return (
            <div className="flex flex-row items-center h-32">
                <Image src={"/img/icons"+competence.logo} width={competence.sizeImg} height={competence.sizeImg} alt={competence.title} className="p-2" priority={false}/>
                <Image src={"/img/levels/level_"+competence.level+"_18.png"} width={200} height={200} alt={competence.title} className="p-2" priority={false}/>
            </div>
        )
    }

    return (
        <div className="mt-5 p-3 grid grid-rows-1 lg:grid-cols-2 gap-2 border-4 border-gray-900 bg-gray-800 rounded-3xl">
            {competences.map((competence) => {
                return (
                    <div key={competence.id} className="mb-5 p-3">
                        {renderCompetence(competence)}
                    </div>
                );
            })}
        </div>
    );
}