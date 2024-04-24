'use client'

import Link from "next/link";
import { useState } from "react";
import { EditorMode } from "../editor/EditorMode";

export const ListAccueil = ({list}) => {

    const functionListBoolean = (list) => {

        const listBoolean = [];
        list.map(() => {
            listBoolean.push(false);
        });

        return listBoolean;

    }

    const [isModalList, setIsModalList] = useState(functionListBoolean(list));

    const submitCard = (id) => {

        const listBoolean = [...isModalList];
        listBoolean[id] = !isModalList[id];
        setIsModalList(listBoolean);

        if(!isModalList[id]) {
            document.getElementById("bodyLayout").classList.add("overflow-hidden");
        } else {
            document.getElementById("bodyLayout").classList.remove("overflow-hidden");
        }

    }

    const renderCard = (card) => {
        return (
            <div className="flex flex-col justify-center items-center h-32">
                {card.route != "" ?
                    <Link href={card.route} className="h-full w-full">
                        <button className="h-full w-full">{card.title}</button>
                    </Link>
                    :
                    <>
                        <button className="h-full w-full" onClick={() => submitCard((card.id-1))}>
                            {card.title}
                        </button>

                        <div  className={
                            isModalList[(card.id-1)] ? "fixed left-0 top-0 w-[100%] h-screen z-[2]"
                            : "fixed left-0 top-0 w-[100%] h-screen hidden z-[-1]"
                        }>
                            <div className="h-screen flex justify-center items-center">
                                <div className="p-8 border-4 border-gray-900 bg-gray-800 rounded-3xl z-[3] w-[75%] h-max-[75%] md:w-[50%] overflow-y-auto no-scrollbar">
                                    
                                    <div className="space-y-4 text-sm md:text-base">

                                        <EditorMode data={card}/>

                                    </div>
                                    
                                </div>
                                <div onClick={() => submitCard((card.id-1))} className={
                                    isModalList[(card.id-1)] ? "fixed left-0 top-0 w-[100%] backdrop-blur-sm h-screen z-[1] ease-in duration-500"
                                        : "fixed left-0 top-0 w-[100%] h-screen  ease-in duration-500"
                                }></div>
                            </div>
                        </div>
                    </>
                }
            </div>
        )
    }

    return (
        <div className="mt-5 grid grid-rows-1 lg:grid-cols-5 gap-2">
            {list.map((card) => {
                return (
                    <div key={card.id} className="mb-5 p-3 border-4 border-gray-900 hover:border-red-600 bg-gray-800 rounded-3xl">
                        {renderCard(card)}
                    </div>
                );
            })}
        </div>
    );
}