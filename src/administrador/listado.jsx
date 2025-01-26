
import { useNavigate } from "react-router-dom";
import { CardProyecto } from "./cardproyecto"
import { MdOutlineLibraryAdd } from "react-icons/md";

export const Listado = () => {

    const navigate = useNavigate();
    const goTo = (path) => {
        navigate(path);
      };
      
    return (
        <div className="p-12">
            <div className="flex flex-row justify-between">
            <h1 className="font-bold text-4xl mb-12">
            Proyectos
            </h1>
            <button onClick={() => goTo('/admin/agregar')} className="flex flex-row font-semibold items-center h-[45px] px-8 border  border-violeta hover:bg-violeta hover:text-white rounded-[50px] text-violeta duration-300 transform">
            <MdOutlineLibraryAdd className="mr-2"/>
                Agregar
            </button>
            </div>

            <CardProyecto></CardProyecto>
            
        </div>
    )
}