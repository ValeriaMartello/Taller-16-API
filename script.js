const apiKey = 'vivo_28PpuKQh4ZrEZk3S4onxBJpeymUIThHFhLS0tfQyu2YV0oAlS53FvzL4PCLef6TG'; // Tu clave API
const url = 'https://api.thecatapi.com/v1/images/search?limit=5';

document.getElementById('getCatBtn').addEventListener('click', function() {
    // Realiza la solicitud a la API
    fetch(url, {
        method: 'GET',
        headers: {
            'x-api-key': apiKey 
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error en la red: ' + response.statusText);
        }
        return response.json(); // Convierte la respuesta a JSON
    })
    .then(data => {
        const catImagesDiv = document.getElementById('catImages');
        // Limpia las imágenes anteriores
        catImagesDiv.innerHTML = '';
        // Itera sobre las imágenes recibidas y agrégalas al contenedor
        data.forEach(cat => {
            const imgCol = document.createElement('div');
            imgCol.classList.add('col-md-4'); 
            imgCol.innerHTML = `<img src="${cat.url}" class="img-fluid" alt="Imagen de gato">`;
            catImagesDiv.appendChild(imgCol);
        });
    })
    .catch(error => {
        console.error('Error al obtener las imágenes:', error); 
    });
});
