import Image from "next/image";
import Link from "next/link";

export const ListVeille = ({veilles}) => {

    let hauteur = 1;
    let hauteurPhone = 1;
    let hauteurMore = 1;
    let hauteurPhoneMore = 1;

    const renderVeille = (veille) => {
        return (
            <div className="space-y-2">
                <Image src={veille.img} width={200} height={200} alt={veille.title} className="p-2 bg-white rounded-lg"></Image>
                <h3 className="text-xl md:text-2xl">{veille.title}</h3>
                <p className="py-2"><span className="p-2 bg-red-600 rounded-lg">{veille.date}</span></p>
                {veille.infos.map((info) => {
                    if(info.p) {
                        return (
                            <p key={info.id}>
                                {info.p.map((p) => {
                                    if(p.text) {
                                        return (
                                            <span key={p.id}>{p.text}</span>
                                        )
                                    } else if(p.a) {
                                        return (
                                            <Link key={p.id} href={p.a.href} className="text-red-500 hover:textColorRed">{p.a.text}</Link>
                                        )
                                    } else if(p.bold) {
                                        return (
                                            <b key={p.id}>{p.bold}</b>
                                        )
                                    }
                                })}
                            </p>
                        )
                    } else if(info.ul) {
                        return (
                            <ul key={info.id} className="list-inside list-disc">
                                {info.ul.map((li) => {
                                    return (
                                        <li key={li.id}>
                                            {li.li.map((liData) => {
                                                if(liData.text) {
                                                    return (
                                                        <span key={liData.id}>{liData.text}</span>
                                                    )
                                                } else if(liData.a) {
                                                    return (
                                                        <Link key={liData.id} href={liData.a.href} className="text-red-500 hover:textColorRed">{liData.a.text}</Link>
                                                    )
                                                } else if(liData.bold) {
                                                    return (
                                                        <b key={liData.id}>{liData.bold}</b>
                                                    )
                                                }
                                            })}
                                        </li>
                                    )
                                })}
                            </ul>
                        )
                    }
                })}
            </div>
        )
    }

    return (
        <div className="mt-5 grid grid-rows-1 grid-flow-col lg:grid-cols-2 gap-2">
            {veilles.map((veille) => {
                if(veille.id % 2 === 0) {
                    hauteur++;
                    hauteurPhone++;
                    hauteurMore = hauteur-1;
                    hauteurPhoneMore = hauteurPhone-1;
                    return (
                        <div key={veille.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteur +` lg:col-start-2`}>
                            {renderVeille(veille)}
                        </div>
                    )
                } else {
                    hauteurPhone++;
                    hauteurPhoneMore = hauteurPhone-1;
                    return (
                        <div key={veille.id} className={`mb-5 p-8 border-4 border-red-600 bg-gray-800 rounded-3xl col-start-1 lg:row-start-`+ hauteur}>
                            {renderVeille(veille)}
                        </div>
                    )
                }
            })}
        </div>
    );
}