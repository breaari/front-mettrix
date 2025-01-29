
export const Xqelerginos = () => {
    return (
      <div className="bg-gray-100 w-full h-auto flex flex-col items-center px-32 py-16">
        <h2 className="text-5xl font-semibold mb-12 text-black text-center border-b border-gray-400 pb-3">
          ¿Por qué elegir Mettrix?
        </h2>
  
        <div className="grid grid-cols-3 gap-12 w-full text-start">
          
          {/* Automatización */}
          <div className=" p-8 ">
            <h3 className="text-2xl font-bold text-violeta mb-6 ">
              AUTOMATIZACIÓN
            </h3>
            <ul className="text-lg text-gray-700 space-y-4">
              <li><strong>Precisión garantizada:</strong> Eliminación de errores humanos en tareas críticas.</li>
              <li><strong>Ahorro de costos:</strong> Mayor eficiencia y menor desperdicio en materiales y tiempo.</li>
              <li><strong>Escalabilidad:</strong> Las soluciones automatizadas crecen con las necesidades de la empresa.</li>
            </ul>
          </div>
  
          {/* Gestión de Procesos */}
          <div className=" p-8 ">
            <h3 className="text-2xl font-bold text-violeta mb-6 ">
              GESTIÓN DE PROCESOS
            </h3>
            <ul className="text-lg text-gray-700 space-y-4">
              <li><strong>Integración perfecta:</strong> Conexión de todas las áreas de la empresa en un solo sistema.</li>
              <li><strong>Adaptabilidad:</strong> Las soluciones evolucionan según las necesidades del cliente.</li>
              <li><strong>Eficiencia probada:</strong> Reducción de tiempos y costos operativos.</li>
            </ul>
          </div>
  
          {/* Monitoreo */}
          <div className=" p-8 ">
            <h3 className="text-2xl font-bold text-violeta mb-6 ">
              MONITOREO
            </h3>
            <ul className="text-lg text-gray-700 space-y-4">
              <li><strong>Soluciones a medida:</strong> Diseñamos sistemas adaptados a las necesidades de cada cliente.</li>
              <li><strong>Innovación tecnológica:</strong> Uso de tecnologías modernas como IoT y machine learning.</li>
              <li><strong>Soporte continuo:</strong> Garantizamos la integración y el mantenimiento de los sistemas.</li>
            </ul>
          </div>
  
        </div>
      </div>
    );
  };
  