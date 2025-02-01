import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Gallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import video from "../../assets/video.webp"

export const Detalle = () => {
  const { nombre } = useParams();
  
  const [proyecto, setProyecto] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null); // Para almacenar el índice actual

  useEffect(() => {
    const fetchProyecto = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/proyectos/${nombre}`);
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

  // Función para generar las imágenes y los videos en el formato necesario para la galería
  const generateGalleryItems = (multimedia) => {
    return multimedia.map((item) => {
      if (item.endsWith('.mp4')) {
        return {
          original: `http://localhost:3000/${item}`,
          thumbnail: video, // Miniatura del video (puedes personalizarla)
          isVideo: true,
          renderItem: () => (
            <div>
              <video width="100%" controls>
                <source src={`http://localhost:3000/${item}`} type="video/mp4" />
                Tu navegador no soporta este video.
              </video>
            </div>
          )
        };
      } else {
        return {
          original: `http://localhost:3000/${item}`,
          thumbnail: `http://localhost:3000/${item}`,
          isVideo: false,
        };
      }
    });
  };

  // Generar las imágenes y videos para la galería
  const galleryItems = generateGalleryItems(proyecto.multimedia);

  return (
    <div className="mt-[138px] px-8 py-16 flex flex-row">
      <div className="w-1/2">
        <Gallery
          items={galleryItems}
          thumbnailPosition="left"
          showPlayButton={false}
          autoPlay={false} 
          showNav={false} 
          showFullscreenButton={false} // Miniaturas a la izquierda
          onClick={(_, index) => setCurrentIndex(index)}  // Cambia el índice actual cuando haces clic
        />
      </div>

      <div className="w-1/2 px-8">
        <h1 className="text-4xl font-bold">{proyecto.nombre}</h1>
        <p className="text-xl mt-4">{proyecto.descripcion}</p>
        <p className="text-xl mt-4"><strong>Funciones: </strong>{proyecto.funciones}</p>
      </div>

      {/* Modal o vista ampliada para ver el video */}
      {currentIndex !== null && galleryItems[currentIndex].isVideo && (
        <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-75 flex justify-center items-center">
          <div className="bg-white p-4">
            <video width="100%" controls>
              <source src={galleryItems[currentIndex].original} type="video/mp4" />
              Tu navegador no soporta este video.
            </video>
            <button
              className="mt-4 px-6 py-2 bg-red-500 text-white rounded"
              onClick={() => setCurrentIndex(null)} // Cerrar el modal
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
