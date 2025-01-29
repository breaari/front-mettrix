import { useState, useEffect } from "react";
import { BiSolidEditAlt } from "react-icons/bi";
import { RiDeleteBin4Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export const CardProyecto = ({ proyecto }) => {
  const navigate = useNavigate();
  const [showConfirm, setShowConfirm] = useState(false);
  const [imagen, setImagen] = useState(""); // Estado para almacenar la imagen

  useEffect(() => {
    // Si hay multimedia, selecciona la primera imagen (o el archivo) de la lista
    if (proyecto.multimedia && proyecto.multimedia.length > 0) {
      // Aquí le añades la URL base como en tu ejemplo anterior
      setImagen(`https://localhost:3000/${proyecto.multimedia[0]}`); // Concatenando URL base
    } else {
      setImagen("../assets/proyecto.jpg"); // Imagen por defecto si no hay multimedia
    }
  }, [proyecto]); // Se ejecuta cada vez que el proyecto cambia

  const goToSection = (route) => {
    navigate(route);
  };

  const handleDelete = () => {
    // Acción de eliminación aquí
    console.log("Proyecto eliminado");
    setShowConfirm(false); // Cierra el modal después de eliminar
  };

  return (
    <div className="border-gray-200 border rounded-lg w-[350px] h-[300px] bg-white shadow-md overflow-hidden">
      <div className="relative w-full h-[70%]">
        {/* Imagen dinámica */}
        <img
          src={imagen}  // Usa la imagen correspondiente al proyecto
          className="w-full h-full object-cover rounded-t-lg"
          alt={proyecto.nombre}
        />

        <div className="absolute inset-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 bg-violeta opacity-50"></div>

          <div className="flex flex-row space-x-5">
            <button
              onClick={() => goToSection(`/admin/editar/${proyecto.id}`)}
              className="bg-violeta text-white text-3xl p-4 rounded-full flex items-center justify-center w-16 h-16 mb-2 relative"
            >
              <BiSolidEditAlt />
            </button>
            <button
              onClick={() => setShowConfirm(true)}  // Muestra el modal al hacer clic en eliminar
              className="bg-red-600 text-white text-3xl p-4 rounded-full flex items-center justify-center w-16 h-16 mb-2 relative"
            >
              <RiDeleteBin4Fill />
            </button>
          </div>
        </div>
      </div>
      <div className="h-[30%] flex justify-center items-center">
        <h2 className="text-sm text-center text-gray-500 font-semibold">
          {proyecto.nombre || "Proyecto desconocido"}  {/* Muestra el nombre del proyecto */}
        </h2>
      </div>

      {/* Modal de confirmación */}
      {showConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h3 className="text-gray-800 text-lg font-semibold mb-4 text-center">
              ¿Estás seguro de que deseas eliminar este proyecto?
            </h3>
            <div className="flex justify-center space-x-4">
              <button
                onClick={() => setShowConfirm(false)}  // Cierra el modal sin eliminar
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
              >
                Cancelar
              </button>
              <button
                onClick={handleDelete}  // Llama a la función de eliminación
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
