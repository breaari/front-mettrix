import logoMettrix from "../../assets/logomettrixblanco.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";

export const Footer = () => {
    return (
        <div className="bg-violeta px-32 flex flex-row justify-between">
            <img src={logoMettrix} className="h-[170px]" alt="Logo Mettrix" />
            <div className="text-white flex flex-col justify-center">
                <div className="flex flex-row items-center mb-2">
                    <FaPhoneAlt />
                    <a 
                        href="https://api.whatsapp.com/send?phone=5491132129031" 
                        target="_blank" 
                        className="ml-2 hover:underline"
                    >
                        +54 9 11 3212 9031
                    </a>
                </div>
                <div className="flex flex-row items-center mb-2">
                    <IoMdMail />
                    <a 
                        href="https://mail.google.com/mail/?view=cm&fs=1&to=nsarago@mettrix.com.ar" 
                        target="_blank" 
                       
                        className="ml-2 hover:underline"
                    >
                        nsarago@mettrix.com.ar
                    </a>
                </div>
                <div className="flex flex-row items-center">
                    <IoLocationSharp />
                    <a 
                        href="https://www.google.com/maps/search/?api=1&query=Murguiondo+86,+CABA" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ml-2 hover:underline"
                    >
                        Murguiondo 86, CABA
                    </a>
                </div>
            </div>
        </div>
    );
};
