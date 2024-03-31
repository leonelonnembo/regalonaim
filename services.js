// Datos de ejemplo para los servicios
const servicios = [
    {
        nombre: 'Montarse una Vaquita ',
        descripcion: 'Consiste en llevar la usuario de excursion a una de las granjas del Chaco y alli pueda tener intimidad con una Vaca bastante "Amigable".',
        precio: 25, // Agregamos el precio del servicio
        imagen: 'img/vaca.jpg'
    },
    {
        nombre: 'One Nigth with SaltySpy',
        descripcion: 'Es un noche de pasion y sexo salvaje con nuestro galan numero uno el Espia Salado en persona.',
        precio: 50 , // Agregamos el precio del servicio,
        imagen: 'img/salado.jpg'
    },
    {
        nombre: 'One Nigth with The Real Spy??',
        descripcion: 'Opaaaaa el verdadero espia hace su aparicion para proveer a la gente con sus servicios "ESPECIALES". (No nos hacemos cargo de muertes por apuñalamientos por la espalda)',
        precio: 50 , // Agregamos el precio del servicio,
        imagen: 'https://wiki.teamfortress.com/w/images/thumb/a/a0/Dressperado.png/250px-Dressperado.png'
    },
    {
        nombre: 'Femboy?',
        descripcion: '¿De verdad te queres culear un femboy?.  Bueno no todos andan bien mentalmente, pero hay mejores opciones, como la vaca por ejemplo.',
        precio: 10 , // Agregamos el precio del servicio,
        imagen: 'https://i.redd.it/qjorwx8xs65b1.jpg'
    },
    {
        nombre: 'Encuentro inesperado',
        descripcion: 'Existe una leyenda sobre alguien llamado Eze, se dice que nadie conoce su rostro y aquellos que han tenido contacto con él han disfrutado bastante, sin embargo, es muy probable que las cosas terminen mal. ',
        precio: 25 , // Agregamos el precio del servicio,
        imagen: 'https://www.millsjewelers.com/wp-content/uploads/2023/02/mystery-person.jpg'
    },
    {
        nombre: 'La abu',
        descripcion: 'Este servicio no es para hacerle nada sexual a la abuelita (o si, depende de tus ganas), este servicio lo que da es una abuelita que te prepara la chocolatada y te hace de comer cositas ricas.',
        precio: 100 , // Agregamos el precio del servicio,
        imagen: 'https://thumbs.dreamstime.com/b/abuela-sonriente-96155.jpg'
    },
    {
        nombre: 'Muerte por ETS',
        descripcion: 'Si te pinta morir lentamente pero de forma asegurada este servicio es para vos, por lo general las muerte por ETS son lentas (creo) pero el 99.99% de las personas que contrataron este servicio fallecieron a las pocas semanas de consumar el acto sexual con este individuo.',
        precio: 5 , // Agregamos el precio del servicio,
        imagen: 'https://pbs.twimg.com/media/GEqGu9UXgAAH5fH.jpg'
    },
    {
        nombre: 'Proximamente...',
        descripcion: 'Estamos trabajando para traerle mas servicios proximamente, lamentamos tener un repertorio tan pequeño (pero no mas pequeño que el pitulin de la persona que esta leyendo esto).',
        precio: 0 , // Agregamos el precio del servicio,
        imagen: 'https://static.vecteezy.com/system/resources/thumbnails/018/927/820/small_2x/maintenance-technician-cartoon-png.png'
    },
   
  
    
    
];

// Función para mostrar los detalles del servicio
function showDetails(servicioId) {
    const servicio = servicios[servicioId - 1]; // Restamos 1 ya que el índice del array comienza en 0
    const detallesContainer = document.getElementById('service-details');
    detallesContainer.innerHTML = `<h3>${servicio.nombre}</h3><p>${servicio.descripcion}</p><p>Precio: $${servicio.precio}</p>`;
    document.getElementById('details').style.display = 'block';
}

// Función para ocultar los detalles del servicio
function hideDetails() {
    document.getElementById('details').style.display = 'none';
}

// Array que almacenará los elementos del carrito
let carrito = [];

// Función para mostrar u ocultar el modal del carrito
function toggleCart() {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}


// Función para agregar un servicio al carrito
function addToCart(servicioId) {
    const servicio = servicios[servicioId - 1]; // Restamos 1 ya que el índice del array comienza en 0

    // Verificar si el servicio ya está en el carrito
    const existingItem = carrito.find(item => item.id === servicioId);
    if (existingItem) {
        existingItem.cantidad++;
    } else {
        carrito.push({ id: servicioId, nombre: servicio.nombre, precio: servicio.precio, cantidad: 1 });
    }

    // Actualizar el contador del carrito
    updateCartCount();

    // Mostrar un mensaje de confirmación
    toastr.success(`¡"${servicio.nombre}" ha sido agregado al carrito!`, { timeOut: 2000 });
}

// Función de compra (checkout)
function checkout() {
    toastr.success('¡Gracias por tu compra!', { timeOut: 1500 });
    carrito = []; // Vaciar el carrito después de la compra
    updateCartCount(); // Actualizar el contador del carrito
    toggleCart(); // Ocultar el carrito después de la compra
}

// Función para actualizar el contador del carrito y mostrar los elementos del carrito
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const cartItemsElement = document.getElementById('cart-items');

    // Reiniciar la lista de elementos del carrito
    cartItemsElement.innerHTML = '';

    // Variable para calcular el total del carrito
    let total = 0;

    // Iterar sobre los elementos del carrito y agregarlos a la lista
    carrito.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.nombre} - Cantidad: ${item.cantidad} - Precio unitario: $${item.precio}`;
        cartItemsElement.appendChild(listItem);

        // Calcular el subtotal para este elemento del carrito y agregarlo al total
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
    });

    // Mostrar el total del carrito
    const totalElement = document.createElement('li');
    totalElement.textContent = `Total: $${total}`;
    cartItemsElement.appendChild(totalElement);

    // Actualizar el contador del carrito
    cartCountElement.textContent = carrito.reduce((total, item) => total + item.cantidad, 0);
}



// Función para mostrar los detalles del servicio
function showDetails(servicioId) {
    const servicio = servicios[servicioId - 1]; // Restamos 1 ya que el índice del array comienza en 0
    const detallesContainer = document.getElementById('service-details');
    detallesContainer.innerHTML = `<h3>${servicio.nombre}</h3><p>${servicio.descripcion}</p><p>Precio: $${servicio.precio}</p>`;
    document.getElementById('details').style.display = 'block';
}

// Función para ocultar los detalles del servicio
function hideDetails() {
    document.getElementById('details').style.display = 'none';
}

// Cargar dinámicamente las tarjetas de servicio
const servicesSection = document.getElementById('services');
servicios.forEach((servicio, index) => {
    const serviceCard = document.createElement('div');
    serviceCard.classList.add('service-card');
    serviceCard.innerHTML = `
    <img src="${servicio.imagen}" alt="${servicio.nombre}">
        <h2>${servicio.nombre}</h2>

        <p>Precio: $${servicio.precio}</p>
        <button onclick="showDetails(${index + 1})">Detalles</button>
        <button onclick="addToCart(${index + 1})">Comprar</button>
    `;
    servicesSection.appendChild(serviceCard);
});


