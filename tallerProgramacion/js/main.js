// Seleccionamos el contenedor donde irán los planetas
const planetsContainer = document.querySelector('.planets');

// URL base de la API
const API_URL = 'https://dragonball-api.com/api/planets';

// Función principal para obtener y mostrar los planetas
async function fetchPlanets(page = 1) {
    try {
        const response = await fetch(`${API_URL}?page=${page}&limit=10`);
        const data = await response.json();

        // Limpiamos el contenedor antes de agregar nuevos planetas
        planetsContainer.innerHTML = '';

        // Iteramos sobre los planetas y los mostramos
        data.items.forEach(planet => {
            const card = document.createElement('div');
            card.classList.add('card-planet');

            // Creamos el link a la página de detalle
            const link = document.createElement('a');
            link.href = `detalle.html?id=${planet.id}`; // Puedes usar query params para identificar el planeta
            link.innerHTML = `
                <img src="${planet.image}" alt="${planet.name}">
                <h2>${planet.name}</h2>
            `;

            card.appendChild(link)
            planetsContainer.appendChild(card);
        });

        
        // Si quieres agregar paginación, aquí puedes usar data.links.next y data.links.previous

    } catch (error) {
        console.error('Error al obtener los planetas:', error);
        planetsContainer.innerHTML = '<p>Error al cargar los planetas.</p>';
    }
}

// Ejecutamos la función al cargar la página
fetchPlanets();