import proyecto from "../../assets/proyecto.jpg";
import { FaLink } from "react-icons/fa6";

export const Card = () => {
    return (
        <div className="border-gray-200 border rounded-2xl w-[350px] h-[300px] bg-white shadow-md overflow-hidden">
            <div className="relative w-full h-[70%]">
                {/* Imagen */}
                <img src={proyecto} className="w-full h-full object-cover rounded-t-2xl" alt="Proyecto" />
                
                {/* Contenedor del ícono y texto */}
                <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    {/* Fondo violeta con opacidad */}
                    <div className="absolute inset-0 bg-violeta opacity-50"></div>
                    
                    {/* Ícono */}
                    <a
                        href="#"
                        className="bg-violeta text-white text-3xl p-4 rounded-full flex items-center justify-center w-16 h-16 mb-2 relative"
                    >
                        <FaLink />
                    </a>
                    {/* Texto */}
                    <p className="text-white text-md text-center px-2 relative font-semibold">
                        LOREM IPSUM DOLOR SIT AMET.
                    </p>
                </div>
            </div>
            <div className="h-[30%] flex justify-center items-center">
                <h2 className="text-sm text-center text-gray-500 font-semibold">
                    LOREM IPSUM DOLOR SIT AMET.
                </h2>
            </div>
        </div>
    );
};