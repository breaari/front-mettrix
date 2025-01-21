export const Nosotros = () => {
    return (
        <div className="w-full h-auto flex flex-row justify-center items-center p-32 ">
            <div className="w-1/2 h-full bg-white">
                <h2 className="text-xl font-bold mb-4 text-violeta border-gray-300 border-b inline-block">
                    Lorem ipsum dolor sit amet.
                </h2>

                <h1 className="text-5xl font-bold mb-6 text-black">
                    SOMOS METTRIX
                </h1>
                <h3 className="text-lg text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                </h3>
                <h3 className="text-lg text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
                </h3>
                <h3 className="text-lg text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </h3>
            </div>
            <div className="w-1/2 flex flex-col ml-24 justify-center bg-white">
                <div className="flex flex-row mb-12">
                    <div className="bg-white w-[150px] h-[175px] border border-gray-100 flex flex-col justify-center text-center items-center shadow-md mr-12">
                        <a className="text-5xl text-violeta font-bold mb-2">
                            +15
                        </a>
                        <a>AÑOS DE EXPERIENCIA</a>
                    </div>
                    <div className="bg-violeta text-white w-[150px] h-[175px] border border-gray-100 flex flex-col justify-center text-center items-center shadow-md">
                        <a className="text-5xl font-bold mb-2">
                            +50
                        </a>
                        <a>CLIENTES SATISFECHOS</a>
                    </div>
                </div>
                <div className="flex flex-row">
                    <div className="bg-violeta text-white w-[150px] h-[175px] border border-gray-100 flex flex-col justify-center text-center items-center shadow-md mr-12">
                        <a className="text-5xl font-bold mb-2">
                            +70
                        </a>
                        <a>PROYECTOS EXITOSOS</a>  
                    </div>
                    <div className="bg-white w-[150px] h-[175px] border border-gray-100 flex flex-col justify-center text-center items-center shadow-md">
                        <a className="text-5xl text-violeta font-bold mb-2">
                            +200
                        </a>
                        <a>INTEGRACIONES TECNOLOGICAS</a>
                    </div>
                </div>
            </div>
        </div>
    );
};
