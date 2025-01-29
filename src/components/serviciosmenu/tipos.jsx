export const Tipos = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center px-16 py-12 space-y-12">
      
      {/* Automatización */}
      <div className="w-full bg-gray-100 rounded-xl border border-gray-100 p-20">
        <h2 className="text-xl font-bold mb-4 text-violeta border-gray-300 border-b inline-block">
          AUTOMATIZACIÓN
        </h2>
        <h1 className="text-3xl font-bold mb-6 text-black">
          ¿Qué mejor que un proceso requiera mínima atención para su correcto funcionamiento?
        </h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p><strong>Control de procesos industriales:</strong> Sistemas SCADA para gestionar plantas completas.</p>
          <p><strong>Soluciones de visión artificial:</strong> Inspecciones automáticas en líneas de producción.</p>
          <p><strong>Sistemas IoT:</strong> Monitoreo de maquinaria o instalaciones industriales.</p>
          <p><strong>Automatización en líneas de producción:</strong> Diseño e implementación de sistemas como cintas transportadoras inteligentes y visión artificial.</p>
        </div>
      </div>

      {/* Gestión de procesos */}
      <div className="w-full bg-gray-100 rounded-xl border border-gray-100 p-20">
        <h2 className="text-xl font-bold mb-4 text-violeta border-gray-300 border-b inline-block">
          GESTIÓN DE PROCESOS
        </h2>
        <h1 className="text-3xl font-bold mb-6 text-black">
          La posibilidad de controlar procesos al alcance de su mano.
        </h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p><strong>Mapeo de procesos:</strong> Identificación y visualización de cada proceso con gráficos y diagramas de flujo.</p>
          <p><strong>Control de calidad:</strong> Implementación de tecnología para evitar fallas en la producción.</p>
          <p><strong>Análisis de indicadores (KPIs):</strong> Definición de métricas clave como tiempos de entrega, defectos y costos.</p>
        </div>
      </div>

      {/* Monitoreo */}
      <div className="w-full bg-gray-100 rounded-xl border border-gray-100 p-20">
        <h2 className="text-xl font-bold mb-4 text-violeta border-gray-300 border-b inline-block">
          MONITOREO
        </h2>
        <h1 className="text-3xl font-bold mb-6 text-black">
          Nos encargamos de que disponga de información valiosa al alcance de su mano.
        </h1>
        <div className="space-y-6 text-lg text-gray-700">
          <p><strong>Sensores avanzados para monitoreo continuo:</strong> Instalación de sensores inteligentes para recopilar datos clave.</p>
          <p><strong>Análisis de datos en tiempo real:</strong> Implementación de herramientas para monitoreo y generación de reportes automáticos.</p>
        </div>
      </div>

    </div>
  );
};
