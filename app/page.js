import { ListAccueil } from "@/components/accueil/ListAccueil";
import Image from "next/image";

export const metadata = {
    title: "A propos - Louka Fauvel",
    description: "A propos",
}

async function getData() {

    const URL = process.env.URL;

    let letListAcc = [];

    if(URL) {

        const resListAcc = await fetch(URL+'/api/listAcc', { next: { revalidate: 10 } });
        letListAcc = await resListAcc.json();
        
    }

    const listAcc = await letListAcc;

    return {
        listAcc,
    }

}

export default async function Page() {

    const {listAcc} = await getData();
    
    return (
        <>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-0">
                <div className="flex flex-col mt-16">
                    <h1 className="mb-5 text-4xl md:text-7xl">Louka Fauvel</h1>
                    <h1 className="mt-5 text-lg md:text-3xl"><span className="glitch layers" data-text="Développeur web & Designer"><span>Développeur web & Designer</span></span></h1>
                    <h1 className="mt-5 text-base md:text-2xl">Recherche une alternance en communication digitale (bac+3)</h1>
                    <h1 className="mt-5 lg:mr-72 text-xs md:text-base text-right"><i>Faire de ma passion mon métier</i></h1>
                </div>
                
                <div className="md:mt-16 md:mx-16">

                    <div className="grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 gap-2">
                        <div className="row-start-1 lg:col-start-1 place-self-center">
                            
                            <p className="mt-5 squareAnimation">
                                <span className="rounded-lg">
                                    Passionné par le développement et la conception web, 
                                    je souhaite aujourd'hui faire de ma passion mon métier.
                                    Après un BTS SIO option Slam,
                                    je termine actuellement mon diplôme de Concepteur Développeur d'Application (bac+3). 
                                    J'ai décidé d'enrichir mes compétences en design à la rentrée de septembre 2024 et 
                                    je recherche activement une alternance. De nature sérieuse,
                                    j'apprécie travailler en équipe sur de nouveaux projets.
                                </span>
                            </p>

                        </div>

                        <Image src="/img/photo_cv_2022.jpg" className="row-start-2 lg:row-start-1 lg:col-start-2 place-self-center rounded-full border-4 border-gray-900" width={375} height={375} alt="Photo de profil de Louka Fauvel" priority={true}/>
                    </div>

                </div>
                <ListAccueil list={listAcc}/>
            </div>
        </>
    );
}