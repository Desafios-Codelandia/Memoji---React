import React from "react";

export const Hero = () => {
    return (
        <div className="container mx-auto px-5 max-w-5xl flex flex-col justify-center items-center">
            <div className="text-center space-y-10 mt-10 md:flex flex-col items-center justify-center xl:mb-52 w-96">
                <h1 className="font-bold text-3xl">Apple</h1>
                <p className="text-5xl">Melhor site para criar Emoji.<br />Facil, simples e rapido.</p>
                <div className="flex flex-col space-y-3 md:w-96">
                    <a className="bg-blue-800 rounded-md p-2" href=""><button>Criar Memoji</button></a>
                    <a className="shadow shadow-slate-700 p-2 rounded-md" href=""><button>Ver Biblioteca</button></a>
                </div>
                <div className="hidden absolute xl:flex">
                    <img className="relative right-11 -top-40" src="../Memoji-01.png" alt="" />
                    <img className="relative top-64 right-28" src="../Memoji-02.png" alt="" />
                    <img className="relative top-80" src="../Memoji-03.png" alt="" />
                    <img className="relative top-64 left-28" src="../Memoji-04.png" alt="" />
                    <img className="relative left-16 -top-32" src="../Memoji-05.png" alt="" />
                </div>
            </div>
        </div>
    )
}