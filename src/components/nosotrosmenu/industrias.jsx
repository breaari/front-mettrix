import tecnologicas from "../../assets/tecnologias.png"
import industrias from "../../assets/industrias.png"
import hogares from "../../assets/hogares.png"
import energia from "../../assets/energia.png"

export const Industrias = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 px-32 font-medium">
            <h2 className="text-violeta text-lg h-[30px] border-b border-gray-300 inline-block mb-6">Liderando Proyectos en multiples Industrias</h2>
            <h1 className="font-bold text-black text-4xl mb-6">INDUSTRIAS EN LAS QUE TENEMOS EXPERIENCIA</h1>
            <div className="flex flex-row w-full justify-evenly mt-6">
                <div className="flex flex-col justify-center items-center">
                    <img className= "w-[150px]" src={tecnologicas}></img>
                    <a className="mt-2" >TECNOLÓGICAS</a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className= "w-[150px]" src={industrias}></img>
                    <a className="mt-2">INDUSTRIAL</a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className= "w-[150px]" src={hogares}></img>
                    <a className="mt-2" >HOGARES</a>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <img className= "w-[150px]" src={energia}></img>
                    <a className="mt-2" >ENERGÍA</a>
                </div>
            </div>
        </div>
    )
}