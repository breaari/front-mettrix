import mosquitto from "../../assets/mosquitto.png"
import grafana from "../../assets/grafana.png"
import nodered from "../../assets/node-red.png"

export const Servicios = () => {
    return (
        <div className="bg-gray-200 flex flex-col justify-center items-center py-12 mq980:p-8">
            <h2 className="text-violeta text-lg font-bold  h-[30px] mq980:h-[90px] border-b  border-gray-500 inline-block">Adaptamos las herramientas de nuestros product partners a tu medida</h2>
            <h1 className="text-black  text-5xl font-bold  border-white inline-block mq980:text-4xl">
                PRINCIPALES PRODUCT PARNERTS
            </h1>
            <div className="flex flex-row mq980:flex-col items-center justify-evenly w-full mt-10 mq980:space-y-5">
                <img src={grafana} className="w-[200px]"></img>
                <img src={mosquitto} className="w-[200px]"></img>
                <img src={nodered} className="w-[200px]"></img>
            </div>

        </div>
    )
}

