import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export const Whatsapp = () => {

    return (
            <a className={`fixed right-0 bottom-0 mr-8 mb-12 shadow-md cursor-pointer rounded-full bg-green-500 w-16 h-16 flex items-center justify-evenly overflow-hidden transition-all duration-300 `}
            href="https://api.whatsapp.com/send?phone=5491132129031&text=Hola%20Nicolas,%20quisiera%20saber%20más%20acerca%20de%20los%20servicios%20de%20Mettrix." 
                target="_blank"
                rel="noopener noreferrer"
            >
            <FaWhatsapp className="text-white text-4xl"/>
            </a>
            )
}