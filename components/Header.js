import Link from "next/link";

export const Header = () => {
    return (
        <nav className="bg-purple-500 sticky inset-x-0 top-0">
            <div className="grid grid-rows-9 grid-flow-col md:grid-rows-1 md:grid-cols-9 gap-5 py-10 md:container md:mx-auto">
                <Link href="/" className="row-start-1 md:col-start-2 text-center hover:bg-purple-900">Accueil</Link>
                <Link href="/a_propos" className="row-start-2 md:row-start-1 md:col-start-3 text-center hover:bg-purple-900">A propos</Link>
                <Link href="/parcours" className="row-start-3 md:row-start-1 md:col-start-4 text-center hover:bg-purple-900">Parcours</Link>
                <Link href="/projets" className="row-start-4 md:row-start-1 md:col-start-5 text-center hover:bg-purple-900">Projets</Link>
                <Link href="#" className="row-start-8 md:row-start-1 md:col-start-8 text-center hover:bg-purple-900">Contact</Link>
            </div>
        </nav>
    );
}