export const Form = () => {
    return (
        <div className=" p-12 bg-gray-100 rounded-xl">
           
            <form className="space-y-4">
                {/* Nombre y Apellido */}
                <div>
                    <label className="block text-sm font-medium text-gray-500">
                        Nombre y Apellido
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                        
                    />
                </div>

                {/* Empresa */}
                <div>
                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-500">
                        Empresa
                    </label>
                    <input
                        type="text"
                        id="empresa"
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                        
                    />
                </div>

                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-500">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                        
                    />
                </div>

                {/* Teléfono */}
                <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-500">
                        Teléfono
                    </label>
                    <input
                        type="tel"
                        id="telefono"
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                        
                    />
                </div>

                {/* Consulta */}
                <div>
                    <label htmlFor="consulta" className="block text-sm font-medium text-gray-500">
                        Consulta
                    </label>
                    <textarea
                        id="consulta"
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 inline-block text-gray-500"
                        rows="2"
                      
                    ></textarea>
                </div>

                {/* Botón de Enviar */}
                <div className="text-center">
                    <button
                        type="submit"
                        className=" py-4 px-8 text-white font-semibold bg-violeta rounded-[50px] hover:scale-95 focus:outline-none"
                    >
                        Enviar mensaje ahora
                    </button>
                </div>
            </form>
        </div>
    );
};
