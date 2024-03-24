import { ListCertForm } from "@/components/parcours/certifications/ListCertForm";

export const metadata = {
    title: "Certifications - Louka Fauvel",
    description: "Certifications de Louka Fauvel",
}

async function getData() {

    const URL = process.env.URL;

    const resCertForms = await fetch(URL+'/api/certForms', { next: { revalidate: 10 } });
    const certForms = await resCertForms.json();

    return {
        certForms,
    }

}

export default async function Page() {

    const data = await getData();
    
    return (
        <>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <ListCertForm certForms={data.certForms}/>
                </div>
            </div>
        </>
    );
}