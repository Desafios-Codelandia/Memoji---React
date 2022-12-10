import React from "react";

const Card = ({ nome, desc }: any) => {
    return (
        <div>
            <div className=" space-y-5 items-center">
                <div className="flex gap-3 items-center">
                    <div className="w-1 h-5 bg-blue-800"></div>
                    <h1 className="uppercase font-semibold font-serif">{nome}</h1>
                </div>
                <div>
                    <p className="italic font-semibold">"{desc}"</p>
                </div>
            </div>
        </div>
    )
}

export const Conte = () => {
    return (
        <div className="container mx-auto px-5 pt-14">
            <div className="bg-cinza1 p-8 space-y-5 mb-10 grid xl:grid-cols-2 xl:gap-10">
                <Card
                    nome={" Keven Gonçalves "}
                    desc={" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione vel fuga minus fugit facilis eligendi accusamus alias dolore similique ullam enim autem dolorem et, illo id at, quas unde in. "}
                />
                <Card
                    nome={" René Descartes "}
                    desc={" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione vel fuga minus fugit facilis eligendi accusamus alias dolore similique ullam enim autem dolorem et, illo id at, quas unde in. "}
                />
                <Card
                    nome={" Francisco Inoque "}
                    desc={" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione vel fuga minus fugit facilis eligendi accusamus alias dolore similique ullam enim autem dolorem et, illo id at, quas unde in. "}
                />
                <Card
                    nome={" Braimo Selemane "}
                    desc={" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione vel fuga minus fugit facilis eligendi accusamus alias dolore similique ullam enim autem dolorem et, illo id at, quas unde in. "}
                />
                <Card
                    nome={" Joel Fombe "}
                    desc={" Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione vel fuga minus fugit facilis eligendi accusamus alias dolore similique ullam enim autem dolorem et, illo id at, quas unde in. "}
                />
            </div>
        </div>
    )
}