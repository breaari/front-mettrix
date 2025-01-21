import logoMettrix from "../../assets/logomettrixblanco.png"
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export const Footer = () => {
    return (
        <div className="bg-violeta px-32 flex flex-row justify-between">
            <img src={logoMettrix} className="h-[170px]"></img>
            <div className="text-white flex flex-col justify-center">
                <div className="flex flex-row items-center">
                    <FaPhoneAlt />
                    <a className="ml-2">+ 54 9 11 3600 2250</a>
                </div>
                <div className="flex flex-row items-center">
                    <IoMdMail />
                    <a className="ml-2">aru.brea@gmail.com</a>
                </div>
                <div className="flex flex-row items-center">
                    <IoLocationSharp />
                    <a className="ml-2">Lugar remoto, Buenos Aires, Argentina.</a>
                </div>
            </div>

        </div>
    )
}