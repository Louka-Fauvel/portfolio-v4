'use client'

import Image from "next/image";
import Link from "next/link";

export const ListHacktoberfest = ({hacktoberfests}) => {

    const renderHacktoberfest = (hacktoberfest) => {
        return (
            <div className="space-y-2">
                <Image src={hacktoberfest.img} width={150} height={150} alt={hacktoberfest.title} className="p-2 bg-white rounded-lg" priority={false}/>
                <h3 className="text-xl md:text-2xl">{hacktoberfest.title}</h3>
                <p className="py-2">{hacktoberfest.date}</p>
                {hacktoberfest.infos.map((info) => {
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
                                            <Link key={p.id} href={p.a.href} target="_blank" className="text-red-500 hover:textColorRed">{p.a.text}</Link>
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
                                                        <Link key={liData.id} href={liData.a.href} target="_blank" className="text-red-500 hover:textColorRed">{liData.a.text}</Link>
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
        <div className="mt-5 grid grid-rows-1 lg:grid-cols-2 gap-2">
            {hacktoberfests.map((hacktoberfest) => {
                return (
                    <div key={hacktoberfest.id} className="mb-5 p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl">
                        {renderHacktoberfest(hacktoberfest)}
                    </div>
                );
            })}
        </div>
    );
}