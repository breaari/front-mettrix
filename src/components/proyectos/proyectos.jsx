import { Card } from "./card"

export const Proyectos = () => {
    return (
        <div className="bg-gray-100 py-16 flex flex-col justify-center items-center">
            <h1 className="h-[60px] font-bold text-4xl border-b border-black mb-16 inline-block">Explorá nuestro impacto a través de los proyectos</h1>
            <div className="flex flex-wrap gap-8 justify-center">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </div>
        </div>
    )
}