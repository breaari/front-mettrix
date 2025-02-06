import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import video from "../../assets/video.webp"

export const Detalle = () => {
  const { nombre } = useParams();
  const [proyecto, setProyecto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null); 

  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        const response = await axios.get(`https://back.mettrix.com.ar/proyectos/${nombre}`);
        setProyecto(response.data);
      } catch (error) {
        console.error("Error al obtener el proyecto:", error);
      }
    };

    fetchProyecto();
  }, [nombre]);

  if (!proyecto) {
    return <div>Cargando...</div>;
  }

  // Asegurar que multimedia siempre sea un array
  const multimedia = Array.isArray(proyecto.multimedia) ? proyecto.multimedia : [proyecto.multimedia];

  // Generar la galería
  const generateGalleryItems = (multimedia) => {
    return multimedia.map((item) => {
      if (typeof item === "string" && item.endsWith('.mp4')) {
        return {
          original: `https://back.mettrix.com.ar/${item}`,
          thumbnail: video,
          isVideo: true,
          renderItem: () => (
            <div>
              <video width="100%" controls>
                <source src={`https://back.mettrix.com.ar/${item}`} type="video/mp4" />
                Tu navegador no soporta este video.
              </video>
            </div>
          )
        };
      } else {
        return {
          original: `https://back.mettrix.com.ar/${item}`,
          thumbnail: `https://back.mettrix.com.ar/${item}`,
          isVideo: false,
        };
      }
    });
  };

  const galleryItems = generateGalleryItems(multimedia);

  return (
    <div className="mt-[138px] px-8 py-16 flex flex-row mq980:flex-col mq980:py-8">
      <div className="w-1/2 mq980:hidden">
        <Gallery
          items={galleryItems}
          thumbnailPosition="left"
          showPlayButton={false}
          autoPlay={false} 
          showNav={false} 
          showFullscreenButton={false}
          onClick={(_, index) => setCurrentIndex(index)}  
        />
      </div>
      <div className="w-full hidden mq980:block">
        <h1 className="text-4xl font-bold mb-8">{proyecto.nombre}</h1>
        <Gallery
          items={galleryItems}
          showPlayButton={false}
          autoPlay={false} 
          showNav={false} 
          showFullscreenButton={false} 
          onClick={(_, index) => setCurrentIndex(index)}  
        />
      </div>

      <div className="w-1/2 px-8 mq980:w-full mq980:px-0">
        <h1 className="mq980:hidden text-4xl font-bold">{proyecto.nombre}</h1>
        <p className="text-xl mt-4">{proyecto.descripcion}</p>
        <p className="text-xl mt-4"><strong>Funciones: </strong>{proyecto.funciones}</p>
      </div>

      {currentIndex !== null && galleryItems[currentIndex] && galleryItems[currentIndex].isVideo && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4">
            <video width="100%" controls>
              <source src={galleryItems[currentIndex].original} type="video/mp4" />
              Tu navegador no soporta este video.
            </video>
            <button
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded"
              onClick={() => setCurrentIndex(null)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
