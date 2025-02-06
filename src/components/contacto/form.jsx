// export const Form = () => {
//     return (
//         <div className=" p-12 bg-gray-100 rounded-xl mq980:p-8">
           
//             <form className="space-y-4">
//                 {/* Nombre y Apellido */}
//                 <div>
//                     <label className="block text-sm font-medium text-gray-500">
//                         Nombre y Apellido
//                     </label>
//                     <input
//                         type="text"
//                         id="nombre"
//                         className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                        
//                     />
//                 </div>

//                 {/* Empresa */}
//                 <div>
//                     <label htmlFor="empresa" className="block text-sm font-medium text-gray-500">
//                         Empresa
//                     </label>
//                     <input
//                         type="text"
//                         id="empresa"
//                         className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                        
//                     />
//                 </div>

//                 {/* Email */}
//                 <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-500">
//                         Correo Electrónico
//                     </label>
//                     <input
//                         type="email"
//                         id="email"
//                         className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                        
//                     />
//                 </div>

//                 {/* Teléfono */}
//                 <div>
//                     <label htmlFor="telefono" className="block text-sm font-medium text-gray-500">
//                         Teléfono
//                     </label>
//                     <input
//                         type="tel"
//                         id="telefono"
//                         className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                        
//                     />
//                 </div>

//                 {/* Consulta */}
//                 <div>
//                     <label htmlFor="consulta" className="block text-sm font-medium text-gray-500">
//                         Consulta
//                     </label>
//                     <textarea
//                         id="consulta"
//                         className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
//                         rows="2"
                      
//                     ></textarea>
//                 </div>

//                 {/* Botón de Enviar */}
//                 <div className="text-center">
//                     <button
//                         type="submit"
//                         className=" py-4 px-8 text-white font-semibold bg-violeta rounded-[50px] hover:scale-95 focus:outline-none"
//                     >
//                         Enviar mensaje ahora
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// };

import { useState } from "react";
import axios from "axios";

export const Form = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        empresa: "",
        email: "",
        telefono: "",
        consulta: "",
    });

    const [mensaje, setMensaje] = useState(""); // Mensaje de éxito o error

    // Manejo de cambios en los inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Manejo del envío del formulario
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/contacto", formData);
            setMensaje("Mensaje enviado con éxito");
            setFormData({ nombre: "", empresa: "", email: "", telefono: "", consulta: "" }); // Limpiar formulario
        } catch (error) {
            setMensaje("Error al enviar el mensaje. Intenta nuevamente.");
        }
    };

    return (
        <div className="p-12 bg-gray-100 rounded-xl mq980:p-8">
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Nombre y Apellido */}
                <div>
                    <label className="block text-sm font-medium text-gray-500">
                        Nombre y Apellido
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                    />
                </div>

                {/* Empresa */}
                <div>
                    <label className="block text-sm font-medium text-gray-500">
                        Empresa
                    </label>
                    <input
                        type="text"
                        id="empresa"
                        value={formData.empresa}
                        onChange={handleChange}
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                    />
                </div>

                {/* Email */}
                <div>
                    <label className="block text-sm font-medium text-gray-500">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                    />
                </div>

                {/* Teléfono */}
                <div>
                    <label className="block text-sm font-medium text-gray-500">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        id="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                    />
                </div>

                {/* Consulta */}
                <div>
                    <label className="block text-sm font-medium text-gray-500">
                        Consulta
                    </label>
                    <textarea
                        id="consulta"
                        value={formData.consulta}
                        onChange={handleChange}
                        required
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                        rows="2"
                    ></textarea>
                </div>

                {/* Botón de Enviar */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="py-4 px-8 text-white font-semibold bg-violeta rounded-[50px] hover:scale-95 focus:outline-none"
                    >
                        Enviar mensaje ahora
                    </button>
                </div>

                {/* Mensaje de éxito o error */}
                {mensaje && <p className="text-center mt-4 text-gray-700">{mensaje}</p>}
            </form>
        </div>
    );
};
