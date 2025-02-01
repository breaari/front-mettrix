import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logomettrix from "../../assets/logomettrix.png";
import { useNavigate, useLocation } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);  // Estado para controlar la visibilidad del menú
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (route) => {
    navigate(route);
    setMenuOpen(false); // Cerrar el menú al hacer clic en un enlace
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="bg-violeta h-9 w-full text-white text-[17px] flex flex-row px-32 mq980:px-0 mq980:justify-center space-x-4 items-center">
        <FaYoutube />
        <FaFacebookF />
        <FaLinkedinIn />
      </div>
      <div className="bg-white h-[100px] flex flex-row items-center justify-between overflow-hidden shadow-sm px-32 mq980:px-12">
        <img src={logomettrix} className="object-cover h-[170px]" alt="Logo Mettrix" />

        {/* Menú desplegable en móviles */}
        <div className="hidden mq980:block ">
          <IoMenu
            className="text-5xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}  // Cambiar el estado del menú al hacer clic
          />
        </div>

        {/* Menú para pantallas pequeñas */}
        {menuOpen && (
          <div className="hidden mq980:block absolute top-[135px] text-xl text-center left-0 right-0 bg-white shadow-md py-4 px-8">
            <button
              onClick={() => goToSection('/')}
              className={`block w-full  pb-2 ${isActive('/') ? 'text-violeta' : ''}`}
            >
              HOME
            </button>
            <button
              onClick={() => goToSection('/nosotros')}
              className={`block w-full pb-2 ${isActive('/nosotros') ? 'text-violeta' : ''}`}
            >
              NOSOTROS
            </button>
            <button
              onClick={() => goToSection('/servicios')}
              className={`block w-full pb-2 ${isActive('/servicios') ? 'text-violeta' : ''}`}
            >
              SERVICIOS
            </button>
            <button
              onClick={() => goToSection('/proyectos')}
              className={`block w-full pb-2 ${isActive('/proyectos') ? 'text-violeta' : ''}`}
            >
              PROYECTOS
            </button>
            <button
              onClick={() => goToSection('/contacto')}
              className={`block w-full pb-2 ${isActive('/contacto') ? 'text-violeta' : ''}`}
            >
              CONTACTO
            </button>
          </div>
        )}

        {/* Menú para pantallas grandes */}
        <div className=" mq980:hidden text-gray-500">
          <button
            onClick={() => goToSection('/')}
            className={`relative pb-2 ${isActive('/') ? 'after:content-[""] after:absolute after:top-[-35px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-violeta' : ''}`}
          >
            HOME
          </button>
          <button
            onClick={() => goToSection('/nosotros')}
            className={`relative pb-2 ${isActive('/nosotros') ? 'after:content-[""] after:absolute after:top-[-35px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-violeta' : ''}`}
          >
            NOSOTROS
          </button>
          <button
            onClick={() => goToSection('/servicios')}
            className={`relative pb-2 ${isActive('/servicios') ? 'after:content-[""] after:absolute after:top-[-35px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-violeta' : ''}`}
          >
            SERVICIOS
          </button>
          <button
            onClick={() => goToSection('/proyectos')}
            className={`relative pb-2 ${isActive('/proyectos') ? 'after:content-[""] after:absolute after:top-[-35px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-violeta' : ''}`}
          >
            PROYECTOS
          </button>
          <button
            onClick={() => goToSection('/contacto')}
            className={`relative pb-2 ${isActive('/contacto') ? 'after:content-[""] after:absolute after:top-[-35px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-violeta' : ''}`}
          >
            CONTACTO
          </button>
        </div>
      </div>
    </div>
  );
};
