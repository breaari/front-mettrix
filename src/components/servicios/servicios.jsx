import mosquitto from "../../assets/mosquitto.png"
import grafana from "../../assets/grafana.png"
import nodered from "../../assets/node-red.png"

export const Servicios = () => {
    return (
        <div className="bg-gray-200 flex flex-col justify-center items-center py-12">
            <h2 className="text-violeta text-lg font-bold  h-[30px] border-b  border-gray-500 inline-block">Adaptamos las herramientas de nuestros product partners a tu medida</h2>
            <h1 className="text-black  text-5xl font-bold  border-white inline-block">
                PRINCIPALES PRODUCT PARNERTS
            </h1>
            <div className="flex flex-row items-center justify-evenly w-full mt-10">
                <img src={grafana} className="w-[200px]"></img>
                <img src={mosquitto} className="w-[200px]"></img>
                <img src={nodered} className="w-[200px]"></img>
            </div>

        </div>
    )
}

