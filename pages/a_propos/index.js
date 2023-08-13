import Image from 'next/image'

export default function Home() {
    return (
        <>
            <div className="md:container md:mx-auto px-20 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h1 className="text-2xl md:text-4xl">A propos</h1>

                    <div className="grid grid-rows-2 grid-flow-col lg:grid-rows-1 lg:grid-cols-2 gap-2">
                        <div className="row-start-1 lg:col-start-1">
                            <h2 className="mt-10 text-xl md:text-2xl">Sérieux et collectif</h2>
                            <p className="mt-5">
                                Je suis élève en deuxième année de BTS Service informatique aux organisations
                                au pôle CaenSup Sainte Ursule de Caen en Normandie.
                                J'aime beaucoup voyager et découvrir de nouvelles traditions culturelles.
                                J'ai eu la chance de participer à deux échanges Erasmus avec la Suède et l'Espagne en 2019.
                                Je suis un élève sérieux qui aime travailler en équipe sur de nouveaux projets.
                            </p>
                            <h2 className="mt-5 text-xl md:text-2xl">Centres d'intérêts</h2>
                            <ul className="mt-5 list-inside list-disc">
                                <li>Théâtre</li>
                                <li>Dessin</li>
                                <li>Animés</li>
                                <li>Mangas</li>
                                <li>Voyages</li>
                                <li>Découvertes culinaires</li>
                            </ul>
                        </div>

                        <Image src="/img/photo_cv_2022.jpg" className="row-start-2 lg:row-start-1 lg:col-start-2 rounded-full border-4 border-indigo-500" width={500} height={500} alt="Photo de profil de Louka Fauvel"></Image>
                    </div>

                </div>
            </div>
        </>
    )
}
