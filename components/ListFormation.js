import Image from "next/image";

export const ListFormation = ({formations}) => {

    let hauteur = 1;
    let hauteurPhone = 1;
    let hauteurMore = 1;
    let hauteurPhoneMore = 1;

    const renderFormation = (formation) => {
        return (
            <div className="space-y-2">
                <Image src={formation.img} width={200} height={200} alt={formation.title} className="p-2 bg-white rounded-lg"></Image>
                <h3 className="text-xl md:text-2xl">{formation.title}</h3>
                <p className="py-2"><span className="p-2 bg-red-600 rounded-lg">{formation.date}</span></p>
                <p>{formation.country}</p>
                <p><b>Langages et outils :</b> {formation.languagesTools}</p>
                {formation.concepts !== "" && <p><b>Concepts :</b> {formation.concepts}</p>}
            </div>
        )
    }

    return (
        <div className="mt-5 grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
            {formations.map((formation) => {
                if(formation.id % 2 === 0) {
                    hauteur++;
                    hauteurPhone++;
                    hauteurMore = hauteur-1;
                    hauteurPhoneMore = hauteurPhone-1;
                    return (
                        <div key={formation.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteur +` lg:col-start-2`}>
                            {renderFormation(formation)}
                        </div>
                    )
                } else {
                    hauteurPhone++;
                    hauteurPhoneMore = hauteurPhone-1;
                    return (
                        <div key={formation.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteur}>
                            {renderFormation(formation)}
                        </div>
                    )
                }
                })}
        </div>
    );
}