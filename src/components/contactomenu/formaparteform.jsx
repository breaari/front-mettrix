export const FormaParteForm = () => {
    return (
        <div className="p-12 bg-gray-100 rounded-xl mq980:p-8">
            <form className="space-y-4">
                {/* Nombre */}
                <div>
                    <label className="block text-sm font-medium text-gray-500">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 text-gray-500"
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
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 text-gray-500"
                    />
                </div>

                {/* Área */}
                <div>
                    <label className="block text-sm font-medium text-gray-500">
                        Área
                    </label>
                    <select
                        id="area"
                        className="w-full mt-1 p-3 focus:outline-none bg-gray-100 border-b border-gray-300 text-gray-500"
                    >
                        <option value="">Selecciona un área</option>
                        <option value="administracion">Administración</option>
                        <option value="servicios generales">Servicios generales</option>
                        <option value="ventas y marquetin">Ventas y Marketing</option>
                        <option value="software">Software</option>
                    </select>
                </div>

                {/* Adjuntar CV */}
                <div>
                    <label className="block text-sm font-medium text-gray-500">
                        Adjuntá tu CV
                    </label>
                    <input
                        type="file"
                        id="cv"
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
            </form>
        </div>
    );
};
