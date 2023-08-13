import {ListProjet} from "@/components/ListProjet";

export default function Home({ projets }) {

    return (
        <>
            <div className="md:container md:mx-auto px-20 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h1 className="text-2xl md:text-4xl">Projets</h1>
                    <ListProjet projets={projets}/>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {

    const resProjets = await fetch('http://localhost:3000/api/projets')
    const projets = await resProjets.json()

    return {
        props: {
            projets
        },
    }
}