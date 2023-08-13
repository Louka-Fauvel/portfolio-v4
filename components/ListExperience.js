import Image from "next/image";

export const ListExperience = ({experiences}) => {

    let hauteur = 1;
    let hauteurPhone = 1;
    let hauteurMore = 1;
    let hauteurPhoneMore = 1;

    const renderExperience = (experience) => {
        return (
            <div className="space-y-2">
                <Image src={experience.img} width={200} height={200} alt={experience.title} className="p-2 bg-white rounded-lg"></Image>
                <h3 className="text-xl md:text-2xl">{experience.title}</h3>
                <p className="py-2"><span className="p-2 bg-red-600 rounded-lg">{experience.date}</span></p>
                <p>{experience.weeks}</p>
                <p>{experience.country}</p>
                <p>{experience.description}</p>
                {experience.languagesTools !== "" && <p><b>Langages et outils :</b> {experience.languagesTools}</p>}
            </div>
        )
    }

    return (
        <div className="mt-5 grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
            {experiences.map((experience) => {
                if(experience.id % 2 === 0) {
                    hauteur++;
                    hauteurPhone++;
                    hauteurMore = hauteur-1;
                    hauteurPhoneMore = hauteurPhone-1;
                    return (
                        <div key={experience.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteur +` lg:col-start-2`}>
                            {renderExperience(experience)}
                        </div>
                    )
                } else {
                    hauteurPhone++;
                    hauteurPhoneMore = hauteurPhone-1;
                    return (
                        <div key={experience.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteur}>
                            {renderExperience(experience)}
                        </div>
                    )
                }
                })}
        </div>
    );
}