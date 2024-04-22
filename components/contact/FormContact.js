'use client'

import { handleSubmit } from "./function";


export const FormContact = ({CAPTCHAID, URL}) => {

    return (
        <form onSubmit={(event) => handleSubmit(event, CAPTCHAID , URL)}>
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
                <div className="col-start-1 lg:row-start-6 lg:col-span-2">
                    <button id="contactForm" className="block w-full p-2 bg-red-500 rounded-lg hover:bgColorRed disabled:opacity-50 disabled:hover:bg-red-500">Envoyer</button>
                </div>
            </div>
        </form>
    );
}