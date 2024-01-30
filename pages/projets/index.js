import {ListProjet} from "@/components/ListProjet";
import {useState} from "react";
import Head from "next/head";

export default function Home({ /*groupPro,*/ groupPerso, groupSchool, groupTuto }) {

    return (
        <>
            <Head>
                <title>Projets - Louka Fauvel</title>
                <meta name="description" content="Projet de Louka Fauvel"/>
            </Head>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h1 className="text-2xl md:text-4xl">Projets</h1>
                    <h2 className="mt-10 text-2xl md:text-4xl">Projets personnel</h2>
                    <ListProjet projets={groupPerso}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Projets d'école</h2>
                    <ListProjet projets={groupSchool}/>
                    <h2 className="mt-10 text-2xl md:text-4xl">Tutos</h2>
                    <ListProjet projets={groupTuto}/>
                </div>
            </div>
        </>
    )
}

export async function getStaticProps() {

    const resProjets = await fetch('http://localhost:3000/api/projets')
    const projets = await resProjets.json()
    let n = 1
    /*const groupPro = projets.filter((theProjet) => {
        if(theProjet.group === "pro") {
            theProjet.list = n++
            return theProjet.group
        }
    })
    n = 1*/
    const groupPerso = projets.filter((theProjet) => {
        if(theProjet.group === "perso") {
            theProjet.list = n++
            return theProjet.group
        }
    })
    n = 1
    const groupSchool = projets.filter((theProjet) => {
        if(theProjet.group === "school") {
            theProjet.list = n++
            return theProjet.group
        }
    })
    n = 1
    const groupTuto = projets.filter((theProjet) => {
        if(theProjet.group === "tuto") {
            theProjet.list = n++
            return theProjet.group
        }
    })
    console.log(groupSchool)

    return {
        props: {
            //groupPro,
            groupPerso,
            groupSchool,
            groupTuto
        },
    }
}