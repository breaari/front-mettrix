import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import logomettrix from "../../assets/logomettrix.png";
import { useNavigate, useLocation } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (route) => {
    navigate(route);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="bg-violeta h-9 w-full text-white text-[17px] flex flex-row px-32 space-x-4 items-center">
        <FaYoutube />
        <FaFacebookF />
        <FaLinkedinIn />
      </div>
      <div className="bg-white h-[100px] flex flex-row items-center justify-between overflow-hidden shadow-sm px-32">
        <img src={logomettrix} className="object-cover h-[170px]" alt="Logo Mettrix" />

        <div className="flex flex-row space-x-16 justify-end font-semibold text-[14px] relative">
          <button
            onClick={() => goToSection('/')}
            className={`relative pb-2 ${
              isActive('/') ? 'after:content-[""] after:absolute after:top-[-35px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-violeta' : ''
            }`}
          >
            HOME
          </button>
          <button
            onClick={() => goToSection('/nosotros')}
            className={`relative pb-2 ${
              isActive('/nosotros') ? 'after:content-[""] after:absolute after:top-[-35px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-violeta' : ''
            }`}
          >
            NOSOTROS
          </button>
          <button
            onClick={() => goToSection('/servicios')}
            className={`relative pb-2 ${
              isActive('/servicios') ? 'after:content-[""] after:absolute after:top-[-35px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-violeta' : ''
            }`}
          >
            SERVICIOS
          </button>
          <button
            onClick={() => goToSection('/proyectos')}
            className={`relative pb-2 ${
              isActive('/proyectos') ? 'after:content-[""] after:absolute after:top-[-35px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-violeta' : ''
            }`}
          >
            PROYECTOS
          </button>
          <button
            onClick={() => goToSection('/contacto')}
            className={`relative pb-2 ${
              isActive('/contacto') ? 'after:content-[""] after:absolute after:top-[-35px] after:left-1/2 after:-translate-x-1/2 after:w-10 after:h-1 after:bg-violeta' : ''
            }`}
          >
            CONTACTO
          </button>
        </div>
      </div>
    </div>
  );
};
