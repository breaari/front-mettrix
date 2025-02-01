// import { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import axios from "axios";
// import { TiArrowBack } from "react-icons/ti";
// import { FaTrash } from "react-icons/fa";

// export const Editar = () => {
//   const { id } = useParams(); 
//   const navigate = useNavigate();

//   const [nombre, setNombre] = useState("");
//   const [sector, setSector] = useState("");
//   const [imagenes, setImagenes] = useState([]); // Almacena las imágenes actuales
//   const [nuevasImagenes, setNuevasImagenes] = useState([]); // Almacena las nuevas imágenes a subir
//   const [imagenesEliminar, setImagenesEliminar] = useState([]); // Almacena las imágenes eliminadas
//   const [descripcion, setDescripcion] = useState("");
//   const [funciones, setFunciones] = useState("");
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Obtener los datos del proyecto según el ID
//     const fetchProyecto = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/proyectos/${id}`);
//         const data = response.data;

//         setNombre(data.nombre || "");
//         setSector(data.sector || "");
//         setDescripcion(data.descripcion || "");
//         setFunciones(data.funciones || "");
//         setImagenes(data.multimedia || []); // Ahora maneja múltiples imágenes
//       } catch (error) {
//         setError("Error al cargar los datos del proyecto.");
//       }
//     };

//     fetchProyecto();
//   }, [id]);

//   const handleEliminarImagen = (imagen) => {
//     // Eliminar la imagen de la UI de manera inmediata
//     setImagenes(imagenes.filter(img => img !== imagen));
//     // Marcarla como eliminada para enviarla al backend
//     setImagenesEliminar([...imagenesEliminar, imagen]);
//   };

//   const handleImagenesChange = (e) => {
//     setNuevasImagenes([...nuevasImagenes, ...Array.from(e.target.files)]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");

//     const formData = new FormData();
//     formData.append("nombre", nombre);
//     formData.append("sector", sector);
//     formData.append("descripcion", descripcion);
//     formData.append("funciones", funciones);

//     // Agregar las nuevas imágenes al FormData
//     nuevasImagenes.forEach((imagen) => {
//       formData.append("multimedia", imagen);
//     });

//     // Pasar las imágenes eliminadas como parte de los datos
//     if (imagenesEliminar.length > 0) {
//       formData.append("imagenesEliminar", JSON.stringify(imagenesEliminar));
//     }

//     try {
//       const response = await axios.put(`http://localhost:3000/proyectos/${id}`, formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (response.data.success) {
//         navigate("/admin");
//       } else {
//         setError("Error al actualizar el proyecto.");
//       }
//     } catch (error) {
//       setError("Error al guardar los cambios.");
//     }
//   };

//   return (
//     <div className="w-full h-auto flex flex-col justify-center items-center">
//       <div className="rounded-xl flex flex-col items-center justify-start py-12">
//         <div className="font-bold text-violeta text-3xl">Editar proyecto</div>
//         <button onClick={() => navigate("/admin/listado")} className="absolute top-[30px] left-[250px] cursor-pointer">
//           <TiArrowBack className="text-violeta text-5xl" />
//         </button>

//         <div className="mt-6 w-auto px-10">
//           <form onSubmit={handleSubmit} className="flex flex-col">
//             <div className="flex flex-row space-x-10">
//               <div className="flex flex-col">
//                 <label className="mb-2 font-semibold text-verde text-xl">Nombre del Proyecto:</label>
//                 <input
//                   className="w-[375px] p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
//                   type="text"
//                   value={nombre}
//                   onChange={(e) => setNombre(e.target.value)}
//                 />
//               </div>
//               <div className="flex flex-col">
//                 <label className="mb-2 font-semibold text-verde text-xl">Sector:</label>
//                 <input
//                   className="w-[375px] p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
//                   type="text"
//                   value={sector}
//                   onChange={(e) => setSector(e.target.value)}
//                 />
//               </div> 
//             </div>

//             <label className="mb-2 font-semibold text-verde text-xl">Multimedia:</label>
//             <div className="flex flex-wrap gap-4">
//               {imagenes && (
//                 Array.isArray(imagenes) || typeof imagenes === "string" ? (
//                   (Array.isArray(imagenes) ? imagenes : [imagenes]).map((img, index) => (
//                     <div key={index} className="relative">
//                       <img src={`http://localhost:3000/${img}`} alt={`Imagen del proyecto ${index}`} className="w-40 h-auto rounded-md" />
//                       <button 
//                         type="button"
//                         className="absolute top-0 right-0 bg-violeta hover:bg-red-600 text-white p-3 m-1 rounded-full"
//                         onClick={() => handleEliminarImagen(img)}
//                       >
//                         <FaTrash />
//                       </button>
//                     </div>
//                   ))
//                 ) : (
//                   <p>No hay imágenes disponibles.</p>
//                 )
//               )}
//             </div>

//             <input
//               className="p-2 my-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
//               type="file"
//               multiple
//               onChange={handleImagenesChange}
//             />

//             <label className="mb-2 font-semibold text-verde text-xl">Descripción:</label>
//             <textarea
//               className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
//               value={descripcion}
//               onChange={(e) => setDescripcion(e.target.value)}
//             />

//             <label className="mb-2 font-semibold text-verde text-xl">Funciones:</label>
//             <textarea
//               className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
//               value={funciones}
//               onChange={(e) => setFunciones(e.target.value)}
//             />

//             <button className="bg-violeta w-[200px] font-semibold text-md p-2 rounded-3xl text-white hover:scale-95" type="submit">
//               Guardar cambios
//             </button>
//             {error && <p className="text-red-800 text-sm mt-2 text-center">{error}</p>}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };


import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { TiArrowBack } from "react-icons/ti";
import { FaTrash } from "react-icons/fa";

export const Editar = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [sector, setSector] = useState("");
  const [multimedia, setMultimedia] = useState([]); // Maneja imágenes y videos
  const [nuevosArchivos, setNuevosArchivos] = useState([]); // Archivos nuevos a subir
  const [archivosEliminar, setArchivosEliminar] = useState([]); // Archivos a eliminar
  const [descripcion, setDescripcion] = useState("");
  const [funciones, setFunciones] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    // Obtener los datos del proyecto según el ID
    const fetchProyecto = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/proyectos/${id}`);
        const data = response.data;

        setNombre(data.nombre || "");
        setSector(data.sector || "");
        setDescripcion(data.descripcion || "");
        setFunciones(data.funciones || "");
        setMultimedia(data.multimedia || []); // Ahora maneja tanto imágenes como videos
      } catch (error) {
        setError("Error al cargar los datos del proyecto.");
      }
    };

    fetchProyecto();
  }, [id]);

  const handleEliminarArchivo = (archivo) => {
    // Eliminar el archivo de la UI
    setMultimedia(multimedia.filter(arch => arch !== archivo));
    // Marcarlo como eliminado
    setArchivosEliminar([...archivosEliminar, archivo]);
  };

  const handleArchivosChange = (e) => {
    setNuevosArchivos([...nuevosArchivos, ...Array.from(e.target.files)]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const formData = new FormData();
    formData.append("nombre", nombre);
    formData.append("sector", sector);
    formData.append("descripcion", descripcion);
    formData.append("funciones", funciones);

    // Agregar los nuevos archivos al FormData
    nuevosArchivos.forEach((archivo) => {
      formData.append("multimedia", archivo);
    });

    // Pasar los archivos eliminados como parte de los datos
    if (archivosEliminar.length > 0) {
      formData.append("archivosEliminar", JSON.stringify(archivosEliminar));
    }

    try {
      const response = await axios.put(`http://localhost:3000/proyectos/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.data.success) {
        navigate("/admin");
      } else {
        setError("Error al actualizar el proyecto.");
      }
    } catch (error) {
      setError("Error al guardar los cambios.");
    }
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center">
      <div className="rounded-xl flex flex-col items-center justify-start py-12">
        <div className="font-bold text-violeta text-3xl">Editar proyecto</div>
        <button onClick={() => navigate("/admin/listado")} className="absolute top-[30px] left-[250px] cursor-pointer">
          <TiArrowBack className="text-violeta text-5xl" />
        </button>

        <div className="mt-6 w-auto px-10">
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-row space-x-10">
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-verde text-xl">Nombre del Proyecto:</label>
                <input
                  className="w-[375px] p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label className="mb-2 font-semibold text-verde text-xl">Sector:</label>
                <input
                  className="w-[375px] p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
                  type="text"
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                />
              </div> 
            </div>

            <label className="mb-2 font-semibold text-verde text-xl">Multimedia:</label>
            <div className="flex flex-wrap gap-4">
              {multimedia && (
                Array.isArray(multimedia) || typeof multimedia === "string" ? (
                  (Array.isArray(multimedia) ? multimedia : [multimedia]).map((arch, index) => (
                    <div key={index} className="relative">
                      {arch.endsWith(".mp4") || arch.endsWith(".webm") ? (
                        <video src={`http://localhost:3000/${arch}`} controls className="w-40 h-auto rounded-md" />
                      ) : (
                        <img src={`http://localhost:3000/${arch}`} alt={`Archivo multimedia ${index}`} className="w-40 h-auto rounded-md" />
                      )}
                      <button 
                        type="button"
                        className="absolute top-0 right-0 bg-violeta hover:bg-red-600 text-white p-3 m-1 rounded-full"
                        onClick={() => handleEliminarArchivo(arch)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  ))
                ) : (
                  <p>No hay archivos multimedia disponibles.</p>
                )
              )}
            </div>

            <input
              className="p-2 my-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              type="file"
              multiple
              onChange={handleArchivosChange}
            />

            <label className="mb-2 font-semibold text-verde text-xl">Descripción:</label>
            <textarea
              className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
            />

            <label className="mb-2 font-semibold text-verde text-xl">Funciones:</label>
            <textarea
              className="w-full p-2 mb-4 rounded-md border border-gray-300 focus:outline-none text-gray-700"
              value={funciones}
              onChange={(e) => setFunciones(e.target.value)}
            />

            <button className="bg-violeta w-[200px] font-semibold text-md p-2 rounded-3xl text-white hover:scale-95" type="submit">
              Guardar cambios
            </button>
            {error && <p className="text-red-800 text-sm mt-2 text-center">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};
