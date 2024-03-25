import Image from "next/image";
import Link from "next/link";

export const metadata = {
    title: "Projet - Louka Fauvel",
    description: "Projet de Louka Fauvel",
}

export async function generateStaticParams() {

    const URL = process.env.URL;
    console.log(URL);

    const resProjets = await fetch(URL+'/api/projets');
    const projets = await resProjets.json();

    return projets.map((projet) => ({
        route: projet.route,
    }))

}

async function getData(route) {

    const URL = process.env.URL;

    const resProjets = await fetch(URL+'/api/projets/', { next: { revalidate: 10 } });
    const projets = await resProjets.json()
    const projet = projets.find((theProjet) => theProjet.route === route);

    return {
        projet
    }

}

const listImgs = (imgs) => {
    return (
        <div className="grid grid-cols-4 md:grid-cols-8 justify-items-center">
            {imgs.map((img) => {
                return (
                    <div key={img.id} className="mt-auto mb-auto">
                        <Image src={img.img} width={img.sizeImg} height={img.sizeImg} alt={img.alt} style={{objectFit:"contain"}}/>
                    </div>
                );
            })}
        </div>
    );
}

export default async function Page({ params }) {

    const projet = (await getData(params.route)).projet;

    return (
        <>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h1 className="text-2xl text-center md:text-4xl">{projet.title}</h1>
                    <h1 className="mt-10 text-2xl text-center md:text-4xl"><span className="glitch layers" data-text={projet.date}>[<span>{projet.date}</span>]</span></h1>
                    <Image src={projet.img} width={projet.sizeImg2} height={projet.sizeImg2} alt={projet.title} className="p-2 mt-10 mx-auto bg-white rounded-lg border-4 border-gray-900"/>
                    {projet.video === "" ? "" :
                        <iframe className="hidden md:block mt-10 mx-auto rounded-lg border-4 border-gray-900 bg-gray-800" width="560" height="315" src={projet.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    }
                    {projet.video === "" ? "" :
                        <iframe className="md:hidden mt-10 mx-auto rounded-lg border-4 border-gray-900 bg-gray-800" width={560 / (16 / 9)} height={315 / (16 / 9)} src={projet.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    }
                    <div className="mt-5 grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
                        <div className="mb-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl col-start-1 lg:row-start-1 lg:col-span-2 lg:col-start-1">
                            <h2 className="text-2xl md:text-4xl">Objectif :</h2>
                            <p className="py-4">{projet.objective}</p>
                        </div>

                        {
                            projet.websiteHrefs.length > 0 || projet.githubHrefs.length > 0
                                ? 
                                <div className="mb-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl col-start-1 lg:row-start-2 lg:col-start-1">
                                    {
                                        projet.websiteHrefs.length > 1 || projet.githubHrefs.length > 1
                                            ? <h2 className="text-2xl md:text-4xl">Les liens :</h2>
                                            : <h2 className="text-2xl md:text-4xl">Le lien :</h2>
                                    }
                                    <div className="py-8 space-y-5">
                                        {
                                            projet.websiteHrefs.length > 1
                                            ? <h3 className="text-1xl md:text-2xl">Sites web</h3>
                                            : projet.websiteHrefs.length == 1
                                            ? <h3 className="text-1xl md:text-2xl">Site web</h3>
                                            : ""
                                        }
                                        {projet.websiteHrefs.map((websiteHref) => (
                                            <p key={websiteHref.id}><Link href={websiteHref.href} target="_blank" className="p-2 bg-red-600 rounded-lg hover:bgColorRed">{websiteHref.text}</Link></p>
                                        ))}
                                        {
                                            projet.githubHrefs.length > 1
                                            ? <h3 className="text-1xl md:text-2xl">Githubs</h3>
                                            : projet.githubHrefs.length == 1
                                            ? <h3 className="text-1xl md:text-2xl">Github</h3>
                                            : ""
                                        }
                                        {projet.githubHrefs.map((githubHref) => (
                                            <p key={githubHref.id}><Link href={githubHref.href} target="_blank" className="p-2 bg-red-500 rounded-lg hover:bgColorRed">{githubHref.text}</Link></p>
                                        ))}
                                    </div>
                                </div>
                                : ""
                        }
                        
                        <div 
                            className={ 
                                projet.websiteHrefs.length > 0 || projet.githubHrefs.length > 0
                                    ? "mb-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl col-start-1 lg:row-start-2 lg:col-start-2"
                                    : "mb-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl col-start-1 lg:row-start-2 lg:col-start-1"
                                }
                        >
                            <h2 className="text-2xl md:text-4xl">Langages et Outils utilisés :</h2>
                            <div className="py-4 space-y-2">
                                {projet.listLanguagesTools.map((languagesTools) => (
                                    <div key={languagesTools.id}>
                                        <p>{languagesTools.text}</p>
                                        {languagesTools.languagesTools.length > 0 && listImgs(languagesTools.languagesTools)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}