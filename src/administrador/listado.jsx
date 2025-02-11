import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { CardProyecto } from "./cardproyecto";

export const Listado = () => {
  const navigate = useNavigate();
  const [proyectos, setProyectos] = useState([]);
  const [error, setError] = useState(null);

  const goTo = (path) => navigate(path);

  useEffect(() => {
    const fetchProyectos = async () => {
      try {
        const response = await fetch("https://back.mettrix.com.ar/proyectos");
        const data = await response.json();
        console.log("data:", data);

        if (Array.isArray(data) && data.length > 0) {
          setProyectos(data);
        } else {
          setError("No se encontraron proyectos.");
        }
      } catch (error) {
        setError("Error de red o servidor.");
        console.error(error);
      }
    };

    fetchProyectos();
  }, []);

  // Función para eliminar un proyecto de la lista
  const handleDeleteProyecto = (id) => {
    setProyectos((prevProyectos) => prevProyectos.filter((p) => p.id !== id));
  };

  return (
    <div className="p-12 mq980:p-8">
      <div className="flex flex-row justify-between mb-12 mq980:mb-8 mq980:flex-col mq980:justify-center mq980:text-center mq980:items-center">
        <h1 className="font-bold text-4xl mq980:mb-4">Proyectos</h1>
        <button
          onClick={() => goTo("/admin/agregar")}
          className="flex flex-row font-semibold items-center h-[45px] px-8 border border-violeta hover:bg-violeta hover:text-white rounded-[50px] text-violeta duration-300 transform"
        >
          <MdOutlineLibraryAdd className="mr-2" />
          Agregar
        </button>
      </div>

      {error && <div className="text-red-600">{error}</div>}

      {proyectos.length > 0 ? (
        <div className=" grid grid-cols-2 gap-12 mq980:grid-cols-1 mq980:gap-4">
          {proyectos.map((proyecto) => (
            <CardProyecto 
              key={proyecto.id} 
              proyecto={proyecto} 
              onDelete={handleDeleteProyecto} 
            />
          ))}
        </div>
      ) : (
        <p>No hay proyectos disponibles.</p>
      )}
    </div>
  );
};
