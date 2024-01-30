import Image from "next/image";

export const ListExperienceErasmus = ({experiencesErasmus}) => {

    let hauteur = 1;
    let hauteurPhone = 1;
    let hauteurMore = 1;

    const renderExperienceErasmus = (experienceErasmus) => {
        return (
            <div className="space-y-2">
                <Image src={experienceErasmus.img} width={200} height={200} alt={experienceErasmus.title} className="p-2 bg-white rounded-lg"></Image>
                <h3 className="text-xl md:text-2xl">{experienceErasmus.title}</h3>
                <p className="py-2"><span className="p-2 bg-red-600 rounded-lg">{experienceErasmus.date}</span></p>
                <p>{experienceErasmus.weeks}</p>
                <p>{experienceErasmus.country}</p>
                <p>{experienceErasmus.description}</p>
                {experienceErasmus.languagesTools !== "" && <p><b>Langages et outils :</b> {experienceErasmus.languagesTools}</p>}
            </div>
        )
    }

    return (
        <div className="mt-5 grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
            {experiencesErasmus.map((experienceErasmus) => {
                if(experienceErasmus.id % 2 === 0) {
                    hauteur++;
                    hauteurMore = hauteur-1;
                    // second column
                    return (
                        <div key={experienceErasmus.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteurMore +` lg:col-start-2`}>
                            {renderExperienceErasmus(experienceErasmus)}
                        </div>
                    )
                } else {
                    // first column
                    return (
                        <div key={experienceErasmus.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteur}>
                            {renderExperienceErasmus(experienceErasmus)}
                        </div>
                    )
                }
                })}
        </div>
    );
}