import { ListTableCert } from "@/components/parcours/ListTableCert";
import { ListDiplome } from "@/components/parcours/ListDiplome";
import { ListExperience } from "@/components/parcours/ListExperience";
import { ListExperienceErasmus } from "@/components/parcours/ListExperienceErasmus";
import { ListHacktoberfest } from "@/components/parcours/ListHacktoberfest";
import { ListVeille } from "@/components/parcours/ListVeille";

export const metadata = {
    title: "Parcours - Louka Fauvel",
    description: "Parcours de Louka Fauvel",
}

async function getData() {

    const URL = process.env.URL;

    let letDiplomes = [];
    let letTableCerts = [];
    let letExperiences = [];
    let letExperiencesErasmus = [];
    let letVeilles = [];
    let letHacktoberfests = [];

    if(URL) {
        
        const resDiplomes = await fetch(URL+'/api/diplomes', { next: { revalidate: 10 } });
        letDiplomes = await resDiplomes.json();
        const resTableCerts = await fetch(URL+'/api/tableCerts', { next: { revalidate: 10 } });
        letTableCerts = await resTableCerts.json();
        const resExperiences = await fetch(URL+'/api/experiences', { next: { revalidate: 10 } });
        letExperiences = await resExperiences.json();
        const resExperiencesErasmus = await fetch(URL+'/api/experienceserasmus', { next: { revalidate: 60 } });
        letExperiencesErasmus = await resExperiencesErasmus.json();
        const resVeilles = await fetch(URL+'/api/veilles', { next: { revalidate: 60 } });
        letVeilles = await resVeilles.json();
        const resHacktoberfests = await fetch(URL+'/api/hacktoberfests', { next: { revalidate: 60 } });
        letHacktoberfests = await resHacktoberfests.json();
    }

    const diplomes = await letDiplomes;
    diplomes.sort((a, b) => b.id - a.id);

    const tableCerts = await letTableCerts;
    tableCerts.sort((a, b) => b.id - a.id);

    const experiences = await letExperiences;
    experiences.sort((a, b) => b.id - a.id);

    const experiencesErasmus = await letExperiencesErasmus;
    experiences.sort((a, b) => b.id - a.id);

    const veilles = await letVeilles;
    veilles.sort((a, b) => b.id - a.id);

    const hacktoberfests = await letHacktoberfests;
    hacktoberfests.sort((a, b) => b.id - a.id);

    return {
        diplomes,
        tableCerts,
        experiences,
        experiencesErasmus,
        veilles,
        hacktoberfests
    }

}

export default async function Page() {

    const data = await getData();
    
    return (
        <>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h2 className="mt-10 text-2xl md:text-4xl">Diplômes</h2>
                    <ListDiplome diplomes={data.diplomes}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Certifications</h2>
                    <ListTableCert certForms={data.tableCerts}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Expériences en entreprise</h2>
                    <ListExperience experiences={data.experiences}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Expériences Erasmus +</h2>
                    <ListExperienceErasmus experiencesErasmus={data.experiencesErasmus}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Veille technologique</h2>
                    <ListVeille veilles={data.veilles}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Hacktoberfest</h2>
                    <ListHacktoberfest hacktoberfests={data.hacktoberfests}/>
                </div>
            </div>
        </>
    );
}