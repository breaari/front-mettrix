// import { useNavigate } from "react-router-dom";
// import logo from "../assets/logomettrixblanco.png"
// import { CiCircleList } from "react-icons/ci";
// import { ImExit } from "react-icons/im";

// export const Menu = () => {

//     const navigate = useNavigate();

//     const goToSection = (route) => {
//       navigate(route);
//     };

//     const logout = () => {
//       // Eliminar el token del localStorage
//       localStorage.removeItem('usuario'); // O cualquier otro dato relacionado con la sesión
    
//       // Redirigir al usuario a la página de login
//       navigate('/admin/login');
//     };

//     return (
//         <div className="bg-violeta min-h-[800px] h-auto w-[200px] mq980:w-full text-white flex flex-col justify-between items-center pb-5">
//             <div className="flex flex-col ">
//             <img src={logo} className="w-[150px]"></img>
//             <a className="font-bold">ADMINISTRADOR</a>
            
//            <button onClick={() => goToSection('/admin/inicio')} className="flex flex-row items-center py-2 px-5 mt-5 border  border-white rounded-[50px] cursor-pointer">
//            <CiCircleList className="mr-2"/>
//            Proyectos
//            </button>
//            </div>

//            <button onClick={logout} className="flex flex-row justify-end items-center py-2 px-5 border  border-white rounded-[50px] cursor-pointer">
//            <ImExit className="mr-2"/>
//            Cerrar sesión
//            </button>


//         </div>
//     )
// }



import { useNavigate } from "react-router-dom";
import logo from "../assets/logomettrixblanco.png";
import { CiCircleList } from "react-icons/ci";
import { ImExit } from "react-icons/im";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

export const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar la visibilidad del menú
  const navigate = useNavigate();

  const goToSection = (route) => {
    navigate(route);
    setMenuOpen(false); // Cerrar el menú al hacer clic en un enlace
  };

  const logout = () => {
    // Eliminar el token del localStorage
    localStorage.removeItem('usuario');
    // Redirigir al usuario a la página de login
    navigate('/admin/login');
  };

  return (
    <div className="bg-violeta min-h-[800px] w-[200px] mq980:w-screen mq980:min-h-[100px] text-white flex flex-col justify-between items-center pb-5 mq980:pb-0">
     

        {/* Menú desplegable en dispositivos móviles */}
        <div className="hidden mq980:block w-full px-8">
        <div className="flex flex-row items-center justify-between overflow-hidden h-[100px]">
          <img src={logo} className="h-[150px] object-cover" alt="Logo" />
          <IoMenu
            className="text-5xl cursor-pointer text-white"
            onClick={() => setMenuOpen(!menuOpen)}  // Cambiar el estado del menú al hacer clic
          />
        </div>
      </div>


        {/* Menú desplegable */}
        {menuOpen && (
          <div className="hidden mq980:block absolute top-[100px] left-0 right-0 bg-violeta shadow-md py-4 px-8 z-30 text-center">
            <a className=" font-bold mt-4">ADMINISTRADOR</a>
            <div className="flex flex-col justify-center text-center items-center">
            <button
              onClick={() => goToSection('/admin/inicio')}
              className="block w-auto text-center py-2 px-8 mt-5 border border-white rounded-[50px]"
            >
              <CiCircleList className="mr-2 inline" />
              Proyectos
            </button>
            {/* Agrega más botones según sea necesario */}
            <button
              onClick={logout}
              className="flex flex-row justify-end items-center py-2 px-5 border border-white rounded-[50px] cursor-pointer mt-4"
            >
              <ImExit className="mr-2" />
              Cerrar sesión
            </button>
            </div>
          </div>
        )}

        {/* Menú para pantallas grandes */}
        <div className=" mq980:hidden text-center mt-5">
        <div className="flex flex-col items-center">
        <img src={logo} className="w-[150px]" alt="Logo" />
        <a className="mq980:hidden font-bold mt-4">ADMINISTRADOR</a>
          <button
            onClick={() => goToSection('/admin/inicio')}
            className="flex flex-row items-center py-2 px-5 mt-5 border border-white rounded-[50px] cursor-pointer"
          >
            <CiCircleList className="mr-2" />
            Proyectos
          </button>

          <button
            onClick={logout}
            className="flex flex-row justify-end items-center py-2 px-5 border border-white rounded-[50px] cursor-pointer mt-4"
          >
            <ImExit className="mr-2" />
            Cerrar sesión
          </button>
        </div>
       
      </div>

      {/* Cerrar sesión */}
      
    </div>
  );
};
