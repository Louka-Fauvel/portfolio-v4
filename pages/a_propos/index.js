import Image from 'next/image'
import Head from "next/head"

export default function Home() {
    return (
        <>
            <Head>
                <title>A propos - Louka Fauvel</title>
                <meta name="description" content="A propos de Louka Fauvel"/>
            </Head>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <div className="inline-block">
                        <h1 className="text-2xl md:text-4xl typewriter-8">A propos</h1>
                    </div>

                    <div className="grid grid-rows-2 grid-flow-col lg:grid-rows-1 lg:grid-cols-2 gap-2">
                        <div className="row-start-1 lg:col-start-1">
                            <div className="inline-block">
                                <h2 className="mt-10 text-xl md:text-2xl typewriter-20">Sérieux et collectif</h2>
                            </div>
                            <p className="mt-5 squareAnimation">
                                <span>
                                    Après avoir obtenu un BTS Service informatique aux organisations option Slam,
                                    je poursuis ma formation comme concepteur d'applications (Bac+3) chez Créative à
                                    Hérouville-Saint-Clair.
                                    J'aime beaucoup voyager et découvrir de nouvelles traditions culturelles.
                                    J'ai eu la chance de participer à deux échanges Erasmus avec la Suède et l'Espagne en 2019.
                                    Je suis un élève sérieux qui aime travailler en équipe sur de nouveaux projets.
                                </span>
                            </p>
                            <div className="inline-block">
                                <h2 className="mt-5 text-xl md:text-2xl typewriter-18">Centres d'intérêts</h2>
                            </div>
                            <ul className="mt-5 list-inside list-disc">
                                <div className="inline-block">
                                    <li className="typewriter-7">Théâtre</li>
                                </div><br/>
                                <div className="inline-block">
                                    <li className="typewriter-6">Dessin</li>
                                </div><br/>
                                <div className="inline-block">
                                    <li className="typewriter-6">Animés</li>
                                </div><br/>
                                <div className="inline-block">
                                    <li className="typewriter-6">Mangas</li>
                                </div><br/>
                                <div className="inline-block">
                                    <li className="typewriter-7">Voyages</li>
                                </div><br/>
                                <div className="inline-block">
                                    <li className="typewriter-22">Découvertes culinaires</li>
                                </div>
                            </ul>
                        </div>

                        <Image src="/img/photo_cv_2022.jpg" className="row-start-2 lg:row-start-1 lg:col-start-2 rounded-full border-4 border-red-600" width={500} height={500} alt="Photo de profil de Louka Fauvel"></Image>
                    </div>
                </div>
            </div>
        </>
    )
}
