import Image from "next/image";
import Link from "next/link";

export default function Home({ projet }) {

    return (
        <>
            <div className="md:container md:mx-auto px-20 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h1 className="text-2xl md:text-4xl">{projet.title}</h1>
                    <Image src={projet.img} width={500} height={500} alt={projet.title} className="p-2 mt-10 mx-auto bg-white rounded-lg border-4 border-red-600"/>
                    <div className="mt-5 grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
                        <div className="mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-1 lg:col-start-2"></div>
                    </div>
                    <h2 className="mt-10 text-2xl md:text-4xl">Objectif :</h2>
                    <p>{projet.objective}</p>
                    <h2 className="mt-10 text-2xl md:text-4xl">Lien du site :</h2>
                    <Link href="" className="p-2 bg-red-600 rounded-lg">Lien du site</Link>
                    <Link href={projet.githubHref} className="p-2 bg-red-600 rounded-lg">Lien du GitHub</Link>
                    <h2 className="mt-10 text-2xl md:text-4xl">Langages et Outils utilisés :</h2>
                    <p>{projet.languagesTools}</p>
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

    return {
        props: {
            projet
        },
    }
}