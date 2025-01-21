import inicio from "../../assets/inicio.png"

export const Inicio = () => {
    return (
        <div className="relative">
        <img src={inicio} className="w-full h-auto" />
        <div className="absolute inset-0 flex flex-col items-start justify-center text-white p-6 text-start px-12">
          <h2 className="text-md font-bold mb-4 text-violeta">LOREM IPSUM DOLOR SIT AMET.</h2>
          <h1 className="text-3xl font-bold mb-6 text-black max-w-[65%]">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT.
            TEMPOR INCIDIDUNT ?
          </h1>
          <h3 className="text-[12px] text-gray-500 max-w-[40%] mb-12">
            LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD
            TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA. UT ENIM AD MINIM
            VENIAM.
          </h3>
          <button className="bg-violeta text-white py-2 px-8 text-[12px] rounded-[50px] ">LOREM IPSUM DOLOR SIT AMET</button>
        </div>
      </div>
      
    )
}