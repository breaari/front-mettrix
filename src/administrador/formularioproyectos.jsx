import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

export const FormularioProyectos = () => {

  const [proyecto, setProyecto] = useState("");
  const [sector, setSector] = useState("");
  const [multimedia, setMultimedia] = useState(null);
  const [descripcion, setDescripcion] = useState("");
  const [funciones, setFunciones] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };
  console.log("multimedia:", multimedia)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData();
    formData.append("nombre", proyecto);  // "nombre" es el nombre del campo en tu modelo
    formData.append("sector", sector);
    formData.append("descripcion", descripcion);
    formData.append("funciones", funciones);
   
    if (multimedia && multimedia.length > 0) {
      // Si se seleccionaron archivos, los añadimos al formData
      for (let i = 0; i < multimedia.length; i++) {
        formData.append("multimedia", multimedia[i]);  // Asegúrate de enviar los archivos correctamente
      }
    }
  
    try {

      console.log(formData)
      const response = await axios.post("/proyectos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("respuesta:", response.data)
      if (response.data.success) {
        goTo("/admin");  // Redirigir a la página de administración
      } else {
        setError("Ocurrió un error, intente nuevamente.");
      }
    } catch (error) {
      setError("Ocurrió un error, intente nuevamente.");
      console.error(error);
    }
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center ">
        <button onClick={() => goTo('/admin/inicio')} className="mq980:hidden absolute top-[30px] left-[250px] cursor-pointer">
        <TiArrowBack className="text-violeta text-5xl" />
        </button>
      <div className=" flex flex-col items-center justify-start py-8 mq980:px-8">
        <div className="font-bold text-violeta text-3xl">Agregar proyecto</div>

        <div className="mt-12 w-auto px-10 mq980:px-8 mq980:mt-8">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-row space-x-10 mq980:flex-col mq980:space-x-0">
                <div className="flex flex-col">
            <label className="mb-2 font-semibold text-verde text-xl">Proyecto:</label>
            <input
              className="w-[375px] mq980:w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              type="text"
              id="proyecto"
              placeholder="Nombre del proyecto"
              value={proyecto}
              onChange={(e) => setProyecto(e.target.value)}
            />
            </div>
            <div className="flex flex-col">
            <label className="mb-2 font-semibold text-verde text-xl">Sector:</label>
            <input
              className="w-[375px]  mq980:w-full  p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              type="text"
              id="sector"
              placeholder="Sector del proyecto"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            />
            </div>
            </div>
            <label className="mb-2 font-semibold text-verde text-xl">Multimedia:</label>
            <input
              className="p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              type="file"
              id="multimedia"
              name="multimedia"
              onChange={(e) => setMultimedia(e.target.files)}
              multiple
            />
            <label className="mb-2 font-semibold text-verde text-xl">Descripción:</label>
            <textarea
              className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              id="descripcion"
              placeholder="Descripción del proyecto"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            <label className="mb-2 font-semibold text-verde text-xl">Funciones:</label>
            <textarea
              className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              id="funciones"
              placeholder="Funciones del proyecto"
              value={funciones}
              onChange={(e) => setFunciones(e.target.value)}
            />
            

            <button
              className="bg-violeta w-[200px] font-semibold text-md p-2 rounded-3xl text-white hover:scale-95"
              type="submit"
            >
              Agregar
            </button>
            {error && <p className="text-red-800 text-sm mt-2 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
