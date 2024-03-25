import { ListProjet } from "@/components/projets/ListProjet";

export const metadata = {
    title: "Projets - Louka Fauvel",
    description: "Projets de Louka Fauvel",
}

async function getData() {

    let URL = process.env.URL;

    if(!process.env.URL) {
        URL = null;
    }

    const resProjets = await fetch(URL+'/api/projets', { next: { revalidate: 10 } });
    const projets = await resProjets.json();
    projets.sort((a, b) => b.id - a.id);
    let n = 1;
    const groupPro = projets.filter((theProjet) => {
        if(theProjet.group === "pro") {
            theProjet.list = n++
            return theProjet.group
        }
    });
    n = 1;
    const groupPerso = projets.filter((theProjet) => {
        if(theProjet.group === "perso") {
            theProjet.list = n++
            return theProjet.group
        }
    });
    n = 1;
    const groupSchool = projets.filter((theProjet) => {
        if(theProjet.group === "school") {
            theProjet.list = n++
            return theProjet.group
        }
    });
    n = 1;
    const groupTuto = projets.filter((theProjet) => {
        if(theProjet.group === "tuto") {
            theProjet.list = n++
            return theProjet.group
        }
    });

    return {
        groupPro,
        groupPerso,
        groupSchool,
        groupTuto
    }

}

export default async function Page() {

    const data = await getData();
    
    return (
        <>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h2 className="mt-10 text-2xl md:text-4xl">Projet professionnel</h2>
                    <ListProjet projets={data.groupPro}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Projets personnels</h2>
                    <ListProjet projets={data.groupPerso}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Tutos</h2>
                    <ListProjet projets={data.groupTuto}/>
                </div>
            </div>
        </>
    );
}