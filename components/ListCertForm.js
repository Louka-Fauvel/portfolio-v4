import Image from "next/image";
import {useState} from "react";
import {ArrowLeftSVG, ArrowRightSVG, GithubSVG} from "@/components/svgs";

export const ListCertForm = ({certForms}) => {

    let hauteur = 1;
    let hauteurMore = 1;

    const [isModalCertForm, setIsModalCertForm] = useState(false);
    const [isIdCertForm, setIdCertForm] = useState(0);

    const toggleModalCertForm = async (idCerForm) => {

        let modalCertForm = await document.getElementById("modalCertForm" + idCerForm)
        await setIsModalCertForm(!isModalCertForm)
        await setIdCertForm(idCerForm)

        if(!isModalCertForm) {

            modalCertForm.classList.remove("hidden")

        } else {

            certForms.map((certForm) => {

                document.getElementById("modalCertForm" + certForm.id).classList.remove("hidden")
                document.getElementById("modalCertForm" + certForm.id).classList.add("hidden")

            })

        }

    }

    const toggleCarouselCertForm = async (idCerForm) => {

        if(idCerForm <= 0) {

            idCerForm = certForms.length
            await setIdCertForm(idCerForm)

        } else if(idCerForm > certForms.length) {

            idCerForm = 1
            await setIdCertForm(idCerForm)

        } else {

            await setIdCertForm(idCerForm)

        }

        let modalCertForm = await document.getElementById("modalCertForm" + idCerForm)
        document.getElementById("modalCertForm" + isIdCertForm).classList.add("hidden")
        modalCertForm.classList.remove("hidden")

    }

    const renderCertForm = (certForm) => {
        return (
            <div className="grid place-content-center space-y-4">
                <h3 className="text-xl text-center md:text-2xl">{certForm.title}</h3>
                <Image onClick={() => toggleModalCertForm(certForm.id)} src={certForm.img} width={500} height={500} alt={certForm.title} className="hidden md:block p-2 mx-auto bg-white rounded-lg border-2 border-white hover:border-red-600"/>
                <Image onClick={() => toggleModalCertForm(certForm.id)} src={certForm.img} width={250} height={250} alt={certForm.title} className="md:hidden p-2 mx-auto bg-white rounded-lg border-2 border-white hover:border-red-600"/>
            </div>
        )
    }

    return (
        <>
            <div className="mt-5 grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
                {certForms.map((certForm) => {
                    if(certForm.id % 2 === 0) {
                        hauteur++;
                        hauteurMore = hauteur-1;
                        // second column
                        return (
                            <div key={certForm.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteurMore +` lg:col-start-2`}>
                                {renderCertForm(certForm)}
                            </div>
                        )
                    } else {
                        // first column
                        return (
                            <div key={certForm.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteur}>
                                {renderCertForm(certForm)}
                            </div>
                        )
                    }
                })}
            </div>
            <div onDoubleClick={() => toggleModalCertForm(isIdCertForm)} className={
                isModalCertForm ? "fixed left-0 top-0 w-[100%] h-screen z-[2]"
                : "fixed left-0 top-0 w-[100%] h-screen hidden z-[-1]"
            }>
                <div className="h-screen flex justify-center items-center">
                    <div className="grid grid-cols-3 z-[3]">
                        <div className="relative">
                            <ArrowLeftSVG onClick={() => toggleCarouselCertForm(isIdCertForm - 1)} className="absolute top-[50%] translate-y-[-50%] right-0 p-2 fill-white text-6xl hover:fill-red-600"/>
                        </div>
                        <div className="p-2 bg-red-600 rounded-lg">
                            {certForms.map((certForm) => {
                                return(
                                    <Image key={certForm.id} id={"modalCertForm" + certForm.id} src={certForm.img} width={900} height={900} alt={certForm.title} className="bg-white rounded-lg hidden"/>
                                )
                            })}
                        </div>
                        <div className="relative">
                            <ArrowRightSVG onClick={() => toggleCarouselCertForm(isIdCertForm + 1)} className="absolute top-[50%] translate-y-[-50%] left-0 p-2 fill-white text-6xl hover:fill-red-600"/>
                            <button onClick={() => toggleModalCertForm(isIdCertForm)} className="absolute top-0 left-0 p-2 bg-red-500 rounded-lg hover:bgColorRed">Test</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={
                isModalCertForm ? "fixed left-0 top-0 w-[100%] backdrop-blur-sm h-screen z-[1] ease-in duration-500"
                    : "fixed left-0 top-0 w-[100%] h-screen z-[-2] ease-in duration-500"
            }></div>
        </>
    );
}