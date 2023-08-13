import Image from 'next/image'
import {ListFormation} from "@/components/ListFormation";
import {ListExperience} from "@/components/ListExperience";
import {ListVeille} from "@/components/ListVeille";

export default function Home({ formations, experiences, veilles }) {

    return (
        <>
            <div className="md:container md:mx-auto px-20 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h1 className="text-2xl md:text-4xl">Parcours</h1>
                    <h2 className="mt-10 text-2xl md:text-4xl">Formation</h2>
                    <ListFormation formations={formations}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Expériences en entreprises</h2>
                    <ListExperience experiences={experiences}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Veille technologique</h2>
                    <ListVeille veilles={veilles}/>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {

    const resFormations = await fetch('http://localhost:3000/api/formations')
    const formations = await resFormations.json()
    const resExperiences = await fetch('http://localhost:3000/api/experiences')
    const experiences = await resExperiences.json()
    const resVeilles = await fetch('http://localhost:3000/api/veilles')
    const veilles = await resVeilles.json()

    return {
        props: {
            formations,
            experiences,
            veilles
        },
    }
}