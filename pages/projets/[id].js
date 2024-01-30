import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

export default function Home({ projet }) {

    return (
        <>
            <Head>
                <title>Projets - Louka Fauvel</title>
                <meta name="description" content="Projet de Louka Fauvel"/>
            </Head>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h1 className="text-2xl text-center md:text-4xl">{projet.title}</h1>
                    <h1 className="mt-10 text-2xl text-center md:text-4xl"><span className="glitch layers" data-text={projet.date}>[<span>{projet.date}</span>]</span></h1>
                    <Image src={projet.img} width={projet.sizeImg2} height={projet.sizeImg2} alt={projet.title} className="p-2 mt-10 mx-auto bg-white rounded-lg border-4 border-red-600"/>
                    {projet.video === "" ? "" :
                        <iframe className="hidden md:block mt-10 mx-auto rounded-lg border-4 border-red-600 bg-gray-800" width="560" height="315" src={projet.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    }
                    {projet.video === "" ? "" :
                        <iframe className="md:hidden mt-10 mx-auto rounded-lg border-4 border-red-600 bg-gray-800" width={560 / (16 / 9)} height={315 / (16 / 9)} src={projet.video} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    }
                    <div className="mt-5 grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
                        <div className="mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-1 lg:col-span-2 lg:col-start-1">
                            <h2 className="text-2xl md:text-4xl">Objectif :</h2>
                            <p className="py-4">{projet.objective}</p>
                        </div>
                        <div className="mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-2 lg:col-start-1">
                            {
                                projet.websiteHrefs.length > 1 || projet.githubHrefs.length > 1
                                    ? <h2 className="text-2xl md:text-4xl">Les liens :</h2>
                                    : <h2 className="text-2xl md:text-4xl">Le lien :</h2>
                            }
                            <div className="py-8 space-y-5">
                                {projet.websiteHrefs.map((websiteHref) => (
                                    <p key={websiteHref.id}><Link href={websiteHref.href} target="_blank" className="p-2 bg-red-600 rounded-lg hover:bgColorRed">Site du {websiteHref.text}</Link></p>
                                ))}
                                {projet.githubHrefs.map((githubHref) => (
                                    <p key={githubHref.id}><Link href={githubHref.href} target="_blank" className="p-2 bg-red-500 rounded-lg hover:bgColorRed">Github du {githubHref.text}</Link></p>
                                ))}
                            </div>
                        </div>
                        <div className="mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-2 lg:col-start-2">
                            <h2 className="text-2xl md:text-4xl">Langages et Outils utilisés :</h2>
                            <div className="py-4 space-y-2">
                                {projet.listLanguagesTools.map((languagesTools) => (
                                    <p key={languagesTools.id}>{languagesTools.text}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export async function getStaticPaths() {

    const resProjets = await fetch('http://localhost:3000/api/projets')
    const projets = await resProjets.json()

    const paths = projets.map((projet) => ({
        params: {
            id: projet.route.toString()
        },
    }))

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps(context) {

    const route = context.params.id
    const resProjets = await fetch('http://localhost:3000/api/projets/')
    const projets = await resProjets.json()
    const projet = projets.find((theProjet) => theProjet.route === route)
    console.log(projet.websiteHrefs.length)
    console.log(projet.githubHrefs.length)

    return {
        props: {
            projet
        },
    }
}