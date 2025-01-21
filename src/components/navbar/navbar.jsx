import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logomettrix from "../../assets/logomettrix.png"

export const Navbar =() => {
    return (
        <div>
            <div className="bg-violeta h-9 w-full text-white text-[17px] flex flex-row px-32 space-x-4 items-center">
            <FaYoutube />
            <FaFacebookF />
            <FaLinkedinIn />
            </div>
            <div className="bg-white h-[100px] flex flex-row items-center justify-between overflow-hidden shadow-sm px-32">
                    
                <img src={logomettrix} className="object-cover h-[170px]" alt="Logo Mettrix" />

                <div className="flex flex-row space-x-16 justify-end font-semibold text-[14px]">
                    <a>
                        HOME
                    </a>
                    <a>
                        NOSOTROS
                    </a>
                    <a>
                        SERVICIOS
                    </a>
                    <a>
                        PROYECTOS
                    </a>
                    <a>
                        CONTACTO
                    </a>
                </div>
            </div>

        </div>
    )
}