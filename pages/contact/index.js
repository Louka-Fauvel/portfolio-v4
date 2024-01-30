import {sendContactForm} from "@/lib/api";
import Head from "next/head";
import {GithubSVG, LinkedinSVG} from "@/components/svgs";

export default function Home() {

    async function handleSubmit(event) {
        event.preventDefault();
        const formData = {
            prenom: event.target.prenom.value,
            nom: event.target.nom.value,
            email: event.target.email.value,
            message: event.target.message.value
        }
        await sendContactForm(formData);
        event.target.reset();
    }

    const handleCaptchaRandom = () => {
        let randomNumbers = "";
        for (let i = 0; i < 4; i++) {
            let min = 0;
            let max = 9;
            let random = Math.floor(Math.random() *(max - min)) + min;
            randomNumbers = randomNumbers + random;
        }
        document.getElementById("zoneCaptcha").classList.remove("hidden");
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0,0,100,30);

        ctx.font = "30px Rubik Glitch";
        ctx.fillStyle = "#000000";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(randomNumbers, canvas.width/2, canvas.height/2);
        document.cookie = "captcha=" + randomNumbers + "; path=/contact; domain=localhost; max-age=3600; samesite=strict";
    }

    const captchaVerify = () => {
        let input = document.getElementById("captcha").value;
        if("captcha=" + input === document.cookie) {
            document.getElementById("zoneCaptcha").classList.add("hidden");
            document.getElementById("contactForm").disabled = false;
            document.getElementById("captcha").value = "";
        } else {
            document.getElementById("captcha").value = "";
            handleCaptchaRandom();
        }
    }

    return (
        <>
            <Head>
                <title>Contact - Louka Fauvel</title>
                <meta name="description" content="Contact de Louka Fauvel"/>
            </Head>
            <div className="md:container md:mx-auto px-5 md:px-32 lg:px-48">
                <div className="mt-16">
                    <h1 className="text-2xl md:text-4xl">Contact</h1>
                    <div className="mt-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl">
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
                                <div className="col-start-1 lg:row-start-1">
                                    <label className="block ">Prénom :</label>
                                    <input
                                        type="text"
                                        className="block w-full p-2 border-2 border-gray-800 rounded-lg bg-gray-700 focus:outline-none focus:border-red-600"
                                        placeholder="Votre prénom"
                                        name="prenom"
                                        required
                                    />
                                </div>
                                <div className="col-start-1 lg:row-start-1 lg:col-start-2">
                                    <label className="block ">Nom :</label>
                                    <input
                                        type="text"
                                        className="block w-full p-2 border-2 border-gray-800 rounded-lg bg-gray-700 focus:outline-none focus:border-red-600"
                                        placeholder="Votre nom"
                                        name="nom"
                                        required
                                    />
                                </div>
                                <div className="col-start-1 lg:row-start-2 lg:col-span-2">
                                    <label className="block ">Email :</label>
                                    <input
                                        type="email"
                                        className="block w-full p-2 border-2 border-gray-800 rounded-lg bg-gray-700 focus:outline-none focus:border-red-600"
                                        placeholder="Votre email"
                                        name="email"
                                        required
                                    />
                                </div>
                                <div className="col-start-1 lg:row-start-3 lg:col-span-2">
                                    <label className="block ">Message :</label>
                                    <textarea
                                        className="block w-full p-2 border-2 border-gray-800 rounded-lg bg-gray-700 focus:outline-none focus:border-red-600"
                                        rows="5"
                                        placeholder="Votre message"
                                        name="message"
                                        required
                                    ></textarea>
                                </div>
                                <div className="col-start-1 lg:row-start-4 lg:col-span-2">
                                    <p onClick={handleCaptchaRandom} className="block w-full p-2 bg-red-500 rounded-lg text-center select-none cursor-pointer hover:bgColorRed">Captcha</p>
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
                                </div>
                                <div className="col-start-1 lg:row-start-6 lg:col-span-2">
                                    <button id="contactForm" className="block w-full p-2 bg-red-500 rounded-lg hover:bgColorRed disabled:opacity-50 disabled:hover:bg-red-500" disabled={true}>Envoyer</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="mt-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl">
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
                                    <GithubSVG className="fill-white text-6xl"/>
                                    <LinkedinSVG className="fill-white text-6xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
