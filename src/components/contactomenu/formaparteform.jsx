// export const FormaParteForm = () => {
//     return (
//         <div className="p-12 bg-gray-100 rounded-xl mq980:p-8">
//             <form className="space-y-4">
//                 {/* Nombre */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-500">
//                         Nombre
//                     </label>
//                     <input
//                         type="text"
//                         id="nombre"
//                         className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 text-gray-500"
//                     />
//                 </div>

//                 {/* Email */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-500">
//                         Correo Electrónico
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 text-gray-500"
//                     />
//                 </div>

//                 {/* Área */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-500">
//                         Área
//                     </label>
//                     <select
//                         id="area"
//                         className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 text-gray-500"
//                     >
//                         <option value="">Selecciona un área</option>
//                         <option value="administracion">Administración</option>
//                         <option value="servicios generales">Servicios generales</option>
//                         <option value="ventas y marquetin">Ventas y Marketing</option>
//                         <option value="software">Software</option>
//                     </select>
//                 </div>

//                 {/* Adjuntar CV */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-500">
//                         Adjuntá tu CV
//                     </label>
//                     <input
//                         type="file"
//                         id="cv"
//                         className="w-full mt-1 p-3 bg-gray-100 border-b border-gray-300 text-gray-500"
//                     />
//                 </div>

//                 {/* Botón de Enviar */}
//                 <div className="text-start">
//                     <button
//                         type="submit"
//                         className="py-4 px-8 text-white font-semibold bg-violeta rounded-[50px] hover:scale-95 focus:outline-none"
//                     >
//                         Enviar CV ahora
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };


import React, { useState } from "react";
import axios from "axios";

export const FormaParteForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    area: "",
    cv: null,
  });

  const [mensaje, setMensaje] = useState(""); 

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      cv: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("nombre", formData.nombre);
    form.append("email", formData.email);
    form.append("area", formData.area);
    form.append("cv", formData.cv);
  
    try {
      const response = await axios.post("/postulacion", form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setMensaje("Mensaje enviado con éxito");
  
      // Limpiar formulario, incluyendo el campo de archivo
      setFormData({ nombre: "", email: "", area: "", cv: null });
    } catch (error) {
      setMensaje("Error al enviar el mensaje. Intenta nuevamente.");
    }
  };
  
  return (
    <div className="p-12 bg-gray-100 rounded-xl mq980:p-8">
      <form className="space-y-4" onSubmit={handleSubmit}>
        {/* Nombre */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Nombre</label>
          <input
            type="text"
            id="nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 text-gray-500"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 text-gray-500"
          />
        </div>

        {/* Área */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Área</label>
          <select
            id="area"
            value={formData.area}
            onChange={handleChange}
            className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 text-gray-500"
          >
            <option value="">Selecciona un área</option>
            <option value="administracion">Administración</option>
            <option value="servicios generales">Servicios generales</option>
            <option value="ventas y marketing">Ventas y Marketing</option>
            <option value="software">Software</option>
          </select>
        </div>

        {/* Adjuntar CV */}
        <div>
          <label className="block text-sm font-medium text-gray-500">Adjuntá tu CV</label>
          <input
            type="file"
            id="cv"
            onChange={handleFileChange}
            className="w-full mt-1 p-3 bg-gray-100 border-b border-gray-300 text-gray-500"
          />
        </div>

        {/* Botón de Enviar */}
        <div className="text-start">
          <button
            type="submit"
            className="py-4 px-8 text-white font-semibold bg-violeta rounded-[50px] hover:scale-95 focus:outline-none"
          >
            Enviar CV ahora
          </button>
        </div>
        {mensaje && <p className="text-center mt-4 text-gray-700">{mensaje}</p>}
      </form>
    </div>
  );
};
