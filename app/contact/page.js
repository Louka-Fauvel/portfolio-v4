import { FormContact } from "@/components/contact/FormContact";
import { GithubSVG, LinkedinSVG } from "@/components/svgs";
import Link from "next/link";

export const metadata = {
    title: "Contact - Louka Fauvel",
    description: "Contact de Louka Fauvel",
}

async function getData() {

    const CAPTCHAID = process.env.CAPTCHAID;
    const URL = process.env.URL;

    return {
        CAPTCHAID,
        URL,
    }

}

export default async function Page() {

    /*<div className="col-start-1 lg:row-start-4 lg:col-span-2">
        <p className="block w-full p-2 bg-red-500 rounded-lg text-center select-none cursor-pointer hover:bgColorRed">Captcha</p>
    </div>
    <div id="zoneCaptcha" className="p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-5 lg:col-span-2 hidden">
        <canvas id="canvas" width={100} height={30}/>
        <input
            id="captcha"
            type="text"
            className="block w-full p-2 border-2 border-gray-800 rounded-lg bg-gray-700 focus:outline-none focus:border-red-600"
            placeholder="Remplir le contenu de l'image ci-dessus"
            name="captcha"
        />
        <p onClick={captchaVerify} className="block w-full p-2 bg-red-500 rounded-lg text-center select-none cursor-pointer hover:bgColorRed">Valider le Captcha</p>
    </div>*/

    const {CAPTCHAID, URL} = (await getData());

    return (
        <>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h1 className="text-2xl md:text-4xl">Contact <br/><span className="glitch layers" data-text="(En maintenance)"><span>(En maintenance)</span></span></h1>
                    <div className="mt-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl">
                        <FormContact CAPTCHAID={CAPTCHAID} URL={URL}/>
                    </div>
                    <div className="mt-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl">
                        <h2 className="text-xl md:text-2xl">Coordonnées :</h2>
                        <div className="mt-3 grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
                            <div className="col-start-1 lg:row-start-1 lg:col-start-1">
                                <ul className="list-inside list-disc">
                                    <li>Louka Fauvel</li>
                                    <li>14000 Caen</li>
                                    <li>France</li>
                                </ul>
                            </div>
                            <div className="col-start-1 lg:row-start-1 lg:col-start-2">
                                <div className="flex justify-start space-x-4">
                                    <Link href="https://github.com/Louka-Fauvel">
                                        <GithubSVG className="fill-white text-6xl hover:fill-white"/>
                                    </Link>
                                    <Link href="https://www.linkedin.com/in/louka-fauvel-268411209/">
                                        <LinkedinSVG className="fill-[#0a66c2] text-6xl hover:fill-white"/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}