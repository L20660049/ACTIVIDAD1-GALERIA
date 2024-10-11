// app.js

// Clave de acceso obtenida de la API de Unsplash
const accessKey = 'w00kDoKomHqf0m8YHniVkYCHDFOQa6T9w2quRgHk9fY';

const loadImagesBtn = document.getElementById('loadImages');
const imageGallery = document.getElementById('imageGallery');

// Función para obtener imágenes aleatorias
async function fetchRandomImages() {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?count=6&client_id=${accessKey}`);
    const images = await response.json();

    // Limpiar la galería antes de cargar nuevas imágenes
    imageGallery.innerHTML = '';

    // Agregar las imágenes a la galería
    images.forEach(image => {
      const imgElement = document.createElement('img');
      imgElement.src = image.urls.small;
      imgElement.alt = image.alt_description || 'Imagen aleatoria de Unsplash';
      imageGallery.appendChild(imgElement);
    });
  } catch (error) {
    console.error('Error al obtener imágenes:', error);
    imageGallery.innerHTML = '<p>Lo sentimos, ocurrió un error al cargar las imágenes.</p>';
  }
}

// Escuchar el evento de clic en el botón para cargar nuevas imágenes
loadImagesBtn.addEventListener('click', fetchRandomImages);

// Cargar imágenes inicialmente al cargar la página
window.onload = fetchRandomImages;
