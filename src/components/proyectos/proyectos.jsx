import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./card";

export const Proyectos = () => {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    // Realizar la consulta con Axios
    axios.get("/proyectos")
      .then(response => {
        setProyectos(response.data); // Guardar los proyectos en el estado
      })
      .catch(error => {
        console.error("Error al obtener proyectos", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 py-16 flex flex-col justify-center items-center">
      <h1 className="h-[60px] font-bold text-4xl border-b border-black mb-16 inline-block">Explorá nuestro impacto a través de los proyectos</h1>
      <div className="flex flex-wrap gap-8 justify-center">
        {proyectos.map((proyecto) => (
          <Card key={proyecto.id} proyecto={proyecto} />
        ))}
      </div>
    </div>
  );
};

