import { useState, useEffect } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import imgDefault from "../assets/proyecto.jpg";

export const CardProyecto = ({ proyecto, onDelete }) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [imagen, setImagen] = useState(imgDefault);

  useEffect(() => {
    if (proyecto?.multimedia) {
      const multimediaPath = Array.isArray(proyecto.multimedia) 
        ? proyecto.multimedia[0] 
        : proyecto.multimedia;

      if (multimediaPath) {
        setImagen(`https://back.mettrix.com.ar/${multimediaPath}`);
      }
    }
  }, [proyecto]);

  const goToSection = (route) => navigate(route);

  const handleDelete = async () => {
    try {
      const response = await fetch(`https://back.mettrix.com.ar/proyectos/${proyecto.id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar el proyecto");

      setShowConfirm(false);
      onDelete(proyecto.id); // Llama a la función para actualizar la lista
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="border-gray-200 border rounded-lg w-[350px] h-[300px] mq980:w-full bg-white shadow-md overflow-hidden">
      <div className="relative w-full h-[70%]">
        <img
          src={imagen}
          className="w-full h-full object-cover rounded-t-lg"
          alt={proyecto.nombre || "Proyecto"}
          onError={() => setImagen(imgDefault)}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 mq980:opacity-100 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-violeta opacity-50"></div>

          <div className="flex flex-row space-x-5">
            <button
              onClick={() => goToSection(`/admin/editar/${proyecto.id}`)}
              className="bg-violeta text-white text-3xl p-4 rounded-full flex items-center justify-center w-16 h-16 mb-2 relative"
            >
              <BiSolidEditAlt />
            </button>
            <button
              onClick={() => setShowConfirm(true)}
              className="bg-red-600 text-white text-3xl p-4 rounded-full flex items-center justify-center w-16 h-16 mb-2 relative"
            >
              <RiDeleteBin4Fill />
            </button>
          </div>
        </div>
      </div>

      <div className="h-[30%] flex justify-center items-center">
        <h2 className="text-sm text-center text-gray-500 font-semibold">
          {proyecto.nombre || "Proyecto desconocido"}
        </h2>
      </div>

      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-gray-800 text-lg font-semibold mb-4 text-center">
              ¿Estás seguro de que deseas eliminar este proyecto?
            </h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowConfirm(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
