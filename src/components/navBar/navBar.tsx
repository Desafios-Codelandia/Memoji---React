import React from "react";
import { BiSearch, BiUser } from "react-icons/bi";

export const NavBar = () => {
    return (
        <div className="container mx-auto pt-5 px-5 ">
            <div className="flex justify-between items-center">
                <h1 className="font-bold text-xl">CodeMoji</h1>
                <div className="flex gap-5">
                    <a className="rounded-full p-3 border border-cinza1 bg-white flex justify-center items-center" href=""><BiSearch/></a>
                    <a className="rounded-full p-3 xl:hidden bg-white flex justify-center items-center" href=""><BiUser/></a>
                    <a className="bg-blue-700 rounded-xl px-10 p-3 hidden xl:block" href=""><button>Fazer Login</button></a>
                </div>
            </div>
        </div>
    )
}