export const Datos = () => {
    return (
        <div className="bg-white rounded-xl shadow-xl flex flex-row mq980:flex-col mq980:p-8 p-12 justify-evenly border border-gray-100">
            <div className="border-l-2 border-violeta pl-8 py-2 transition-transform duration-300 hover:translate-y-2">
                <h1 className="text-xl font-semibold mb-1">Dirección</h1>
                <h2 className="text-lg text-gray-400">Murguiondo 86, CABA.</h2>
            </div>
            <div className="border-l-2 border-violeta pl-8 py-2 transition-transform duration-300 hover:translate-y-2">
                <h1 className="text-xl font-semibold mb-1">Email</h1>
                <h2 className="text-lg text-gray-400">nsarago@mettrix.com.ar</h2>
            </div>
            <div className="border-l-2 border-violeta pl-8 py-2 transition-transform duration-300 hover:translate-y-2">
                <h1 className="text-xl font-semibold mb-1">Teléfono</h1>
                <h2 className="text-lg text-gray-400">(Ar) +54 9 11 3212-9031</h2>
            </div>
        </div>
    )
}