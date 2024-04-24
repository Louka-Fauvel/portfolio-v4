import { ListCompetence } from "@/components/competences/ListCompetence";

export const metadata = {
    title: "Compétences - Louka Fauvel",
    description: "Compétences",
}

async function getData() {

    const URL = process.env.URL;

    let letCompetences = [];

    if(URL) {

        const resCompetences = await fetch(URL+'/api/competences', { next: { revalidate: 10 } });
        letCompetences = await resCompetences.json();
        
    }

    const competences = await letCompetences;

    return {
        competences,
    }

}

export default async function Page() {

    const {competences} = await getData();
    
    return (
        <>
            <div className="container mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h2 className="mt-10 text-2xl md:text-4xl">Compétences</h2>
                    <ListCompetence competences={competences}/>
                </div>
            </div>
        </>
    );
}