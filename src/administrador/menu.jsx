import { useNavigate } from "react-router-dom";
import logo from "../assets/logomettrixblanco.png"
import { CiCircleList } from "react-icons/ci";
import { ImExit } from "react-icons/im";

export const Menu = () => {

    const navigate = useNavigate();

  const goToSection = (route) => {
    navigate(route);
  };


    return (
        <div className="bg-violeta h-screen w-[200px] text-white flex flex-col justify-between items-center pb-5">
            <div className="flex flex-col">
            <img src={logo} className="w-[150px]"></img>
            <a className="font-bold">ADMINISTRADOR</a>
            
           <button onClick={() => goToSection('/admin/listado')} className="flex flex-row items-center py-2 px-5 mt-5 border  border-white rounded-[50px] cursor-pointer">
           <CiCircleList className="mr-2"/>
           Proyectos
           </button>
           </div>

           <button onClick={() => goToSection('/admin/formulario')} className="flex flex-row justify-end items-center py-2 px-5 border  border-white rounded-[50px] cursor-pointer">
           <ImExit className="mr-2"/>
           Cerrar sesión
           </button>


        </div>
    )
}