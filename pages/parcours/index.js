import {ListDiplome} from "@/components/ListDiplome";
import {ListExperience} from "@/components/ListExperience";
import {ListVeille} from "@/components/ListVeille";
import Head from "next/head";
import {ListCertForm} from "@/components/ListCertForm";
import {ListExperienceErasmus} from "@/components/ListExperienceErasmus";
import {ListHacktoberfest} from "@/components/ListHacktoberfest";

export default function Home({ diplomes, certForms, experiences, experiencesErasmus, veilles, hacktoberfests }) {

    return (
        <>
            <Head>
                <title>Parcours - Louka Fauvel</title>
                <meta name="description" content="Parcours de Louka Fauvel"/>
            </Head>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h1 className="text-2xl md:text-4xl">Parcours</h1>
                    <h2 className="mt-10 text-2xl md:text-4xl">Diplômes</h2>
                    <ListDiplome diplomes={diplomes}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Certifications et formations</h2>
                    <ListCertForm certForms={certForms}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Expériences en entreprise</h2>
                    <ListExperience experiences={experiences}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Expériences Erasmus +</h2>
                    <ListExperienceErasmus experiencesErasmus={experiencesErasmus}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Veille technologique</h2>
                    <ListVeille veilles={veilles}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Hacktoberfest</h2>
                    <ListHacktoberfest hacktoberfests={hacktoberfests}/>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {

    const resDiplomes = await fetch('http://localhost:3000/api/diplomes')
    const diplomes = await resDiplomes.json()
    const resCertForms = await fetch('http://localhost:3000/api/certForms')
    const certForms = await resCertForms.json()
    const resExperiences = await fetch('http://localhost:3000/api/experiences')
    const experiences = await resExperiences.json()
    const resExperiencesErasmus = await fetch('http://localhost:3000/api/experienceserasmus')
    const experiencesErasmus = await resExperiencesErasmus.json()
    const resVeilles = await fetch('http://localhost:3000/api/veilles')
    const veilles = await resVeilles.json()
    const resHacktoberfests = await fetch('http://localhost:3000/api/hacktoberfests')
    const hacktoberfests = await resHacktoberfests.json()

    return {
        props: {
            diplomes,
            certForms,
            experiences,
            experiencesErasmus,
            veilles,
            hacktoberfests
        },
    }
}