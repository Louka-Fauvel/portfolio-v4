import Image from "next/image";

export const ListDiplome = ({diplomes}) => {

    let hauteur = 1;
    let hauteurMore = 1;

    const renderDiplomes = (diplome) => {
        return (
            <div className="space-y-2">
                <Image src={diplome.img} width={200} height={200} alt={diplome.title} className="p-2 bg-white rounded-lg"></Image>
                <h3 className="text-xl md:text-2xl">{diplome.title}</h3>
                <p className="py-2"><span className="p-2 bg-red-600 rounded-lg">{diplome.date}</span></p>
                <p>{diplome.country}</p>
                <p><b>Langages et outils :</b> {diplome.languagesTools}</p>
                {diplome.concepts !== "" && <p><b>Concepts :</b> {diplome.concepts}</p>}
            </div>
        )
    }

    return (
        <div className="mt-5 grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
            {diplomes.map((diplome) => {
                if(diplome.id % 2 === 0) {
                    hauteur++;
                    hauteurMore = hauteur-1;
                    // second column
                    return (
                        <div key={diplome.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteurMore +` lg:col-start-2`}>
                            {renderDiplomes(diplome)}
                        </div>
                    )
                } else {
                    // first column
                    return (
                        <div key={diplome.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteur}>
                            {renderDiplomes(diplome)}
                        </div>
                    )
                }
                })}
        </div>
    );
}