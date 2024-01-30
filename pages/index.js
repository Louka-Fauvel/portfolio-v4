import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <>
            <Head>
                <title>Accueil - Louka Fauvel</title>
                <meta name="description" content="Accueil de Louka Fauvel"/>
            </Head>
            <div className="md:container md:mx-auto">
                <div className="flex flex-col justify-center items-center mt-52">
                    <h1 className="mb-5 text-4xl md:text-7xl">Louka Fauvel</h1>
                    <h1 className="mt-5 text-2xl md:text-5xl">Développeur web</h1>
                </div>
            </div>
        </>
    )
}
