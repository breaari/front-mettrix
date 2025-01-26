import { useState } from "react";
import logo from "../../src/assets/logomettrix.png"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { TiArrowBack } from "react-icons/ti";

export const Editar = () => {
  const [titulo, setTitulo] = useState("");
  const [cliente, setCliente] = useState("");
  const [proyecto, setProyecto] = useState("");
  const [sector, setSector] = useState("");
  const [servicio, setServicio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [imagen, setImagen] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("cliente", cliente);
    formData.append("proyecto", proyecto);
    formData.append("sector", sector);
    formData.append("servicio", servicio);
    formData.append("descripcion", descripcion);
    if (imagen) formData.append("imagen", imagen);

    try {
      const responseBack = await axios.post("/proyectos", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (responseBack.data.success) {
        goTo("/admin");
      } else {
        setError("Ocurrió un error, intente nuevamente.");
      }
    } catch (error) {
      setError("Ocurrió un error, intente nuevamente.");
    }
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className=" rounded-xl flex flex-col items-center justify-start py-12">
      <div className="font-bold text-violeta text-3xl">Editar proyecto</div>
         <button onClick={() => goTo('/admin/listado')} className="absolute top-[30px] left-[250px] cursor-pointer">
                <TiArrowBack className="text-violeta text-5xl" />
        </button>

        <div className="mt-12 w-auto px-10">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-row space-x-10">
                <div className="flex flex-col">
            <label className="mb-2 font-semibold text-verde text-xl">Título:</label>
            <input
              className="w-[375px] p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              type="text"
              id="titulo"
              placeholder="Título del proyecto"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
            </div>
            <div className="flex flex-col">
            <label className="mb-2 font-semibold text-verde text-xl">Cliente:</label>
            <input
              className="w-[375px] p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              type="text"
              id="cliente"
              placeholder="Nombre del cliente"
              value={cliente}
              onChange={(e) => setCliente(e.target.value)}
            />
            </div>
            </div>
            <div className="flex flex-row space-x-10">
                <div className="flex flex-col">
            <label className="mb-2 font-semibold text-verde text-xl">Proyecto:</label>
            <input
              className="w-[375px] p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
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
              className="w-[375px] p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              type="text"
              id="sector"
              placeholder="Sector del proyecto"
              value={sector}
              onChange={(e) => setSector(e.target.value)}
            />
            </div>
            </div>
            <div className="flex flex-row space-x-10">
                <div className="flex flex-col">
            <label className="mb-2 font-semibold text-verde text-xl">Servicio:</label>
            <input
              className="w-[375px] p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              type="text"
              id="servicio"
              placeholder="Servicio proporcionado"
              value={servicio}
              onChange={(e) => setServicio(e.target.value)}
            />
            </div>
            <div className="flex flex-col">
            <label className="mb-2 font-semibold text-verde text-xl">Imagen:</label>
            <input
              className="p-2 mb-8 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              type="file"
              id="imagen"
              onChange={(e) => setImagen(e.target.files[0])}
            />
            </div>
            </div>
            <label className="mb-2 font-semibold text-verde text-xl">Descripción:</label>
            <textarea
              className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              id="descripcion"
              placeholder="Descripción del proyecto"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />
            

            <button
              className="bg-violeta w-[200px] font-semibold text-md p-2 rounded-3xl text-white hover:scale-95"
              type="submit"
            >       
              Guardar
            </button>
            {error && <p className="text-red-800 text-sm mt-2 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
