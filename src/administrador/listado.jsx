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
        const response = await fetch("http://localhost:3000/proyectos");
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
    <div className="p-12">
      <div className="flex flex-row justify-between mb-12">
        <h1 className="font-bold text-4xl">Proyectos</h1>
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
        <div className=" grid grid-cols-2 gap-12">
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
