// ==========================================
// CARRUSEL DE IMÁGENES EN HERO (LADO DERECHO)
// ==========================================
function iniciarCarruselHero() {
    const carouselImage = document.querySelector('.carousel-image');
    
    console.log('Iniciando carrusel del hero...');
    console.log('Carousel image element:', carouselImage);
    
    if (!carouselImage) {
        console.error('No se encontró el elemento .carousel-image');
        return;
    }
    
    // Lista de imágenes de la carpeta pedidos
    const imagesPedidos = [
        'pedidos/arañita_pedido.jpeg',
        'pedidos/calaberas_pedidos.jpeg',
        'pedidos/hongos_pedidos.jpeg',
        'pedidos/murcielago_pedidos.jpeg',
        'pedidos/murcielagos_pedidos.jpeg',
        'pedidos/pez_pedido.jpeg',
        'pedidos/tulipanes_pedidos.jpeg'
    ];
    
    console.log('Imágenes a cargar:', imagesPedidos);
    
    let currentIndex = 0;
    
    function cambiarImagenHero() {
        console.log('Cambiando a imagen:', imagesPedidos[currentIndex]);
        carouselImage.style.opacity = '0';
        
        setTimeout(() => {
            carouselImage.style.backgroundImage = `url('${imagesPedidos[currentIndex]}')`;
            carouselImage.style.opacity = '1';
            console.log('Imagen cargada:', imagesPedidos[currentIndex]);
            currentIndex = (currentIndex + 1) % imagesPedidos.length;
        }, 1500);
    }
    
    // Establecer primera imagen inmediatamente
    carouselImage.style.backgroundImage = `url('${imagesPedidos[0]}')`;
    carouselImage.style.opacity = '1';
    console.log('Primera imagen establecida:', imagesPedidos[0]);
    
    // Cambiar imagen cada 4 segundos
    setInterval(cambiarImagenHero, 4000);
}

// Iniciar carrusel del hero cuando la página esté lista
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM cargado, iniciando carrusel...');
    iniciarCarruselHero();
    cargarProductos();
});

// ==========================================
// CONFIGURACIÓN DE PRODUCTOS
// ==========================================
// Solo cambia la información y las rutas de las imágenes

const productos = [
    {
        id: 1,
        nombre: "Gojo gato",
        descripcion: "vas a caer gege",
        precio: 110.00,
        imagen: "images/gojo_gato.jpg", // Cambia esta ruta por la de tu imagen
        emoji: "🎄", // Se usará como respaldo si no hay imagen
        badge: "Nuevo",
        badgeType: "new" // new, popular, special, o null
    },
    {
        id: 2,
        nombre: "Coraline",
        descripcion: "Cabeza de caroline",
        precio: 150.00,
        imagen: "images/caroline.jpg",
        emoji: "🎅",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 3,
        nombre: "Gato calabaza",
        descripcion: "Gato calabza",
        precio: 130.00,
        imagen: "images/gato_calabaza.jpg",
        emoji: "⛄",
        badge: null,
        badgeType: null
    },
    {
        id: 4,
        nombre: "Zoro",
        descripcion: "Zoro One Piece",
        precio: 250.00,
        imagen: "images/zoro.jpg",
        emoji: "🎁",
        badge: null,
        badgeType: null
    },
    {
        id: 5,
        nombre: "frankeinstein",
        descripcion: "Llavero frankeinstein",
        precio: 150.00,
        imagen: "images/frankestein.jpg",
        emoji: "�",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 6,
        nombre: "Oogle Boogie",
        descripcion: "llavero de oogle boogie",
        precio: 150.00,
        imagen: "images/obigubi.jpg",
        emoji: "🎅",
        badge: "Especial",
        badgeType: "special"
    },
    {
        id: 7,
        nombre: "Araña",
        descripcion: "Mini peluche de araña",
        precio: 150.00,
        imagen: "images/araña.jpg",
        emoji: "🌟",
        badge: "Especial",
        badgeType: "special"
    }
];

// ==========================================
// FUNCIÓN PARA CARGAR PRODUCTOS
// ==========================================
function cargarProductos() {
    const container = document.getElementById('products-container');
    
    if (!container) return;
    
    // Limpiar el contenedor
    container.innerHTML = '';
    
    // Crear tarjetas de productos
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-product-id', producto.id);
        
        // Crear contenido de la tarjeta
        card.innerHTML = `
            <div class="product-image">
                <img src="${producto.imagen}" 
                     alt="${producto.nombre}" 
                     class="product-img"
                     onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                <span class="product-emoji" style="display: none;">${producto.emoji}</span>
                ${producto.badge ? `<div class="product-badge ${producto.badgeType}">${producto.badge}</div>` : ''}
            </div>
            <div class="product-info">
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-footer">
                    <span class="product-price">$${producto.precio.toFixed(2)}</span>
                    <button class="btn-small" data-product-id="${producto.id}"><span>Ver más</span></button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Reactivar los event listeners para los botones
    activarBotonesProductos();
}

// ==========================================
// FUNCIÓN PARA ACTIVAR BOTONES DE PRODUCTOS
// ==========================================
function activarBotonesProductos() {
    document.querySelectorAll('.btn-small').forEach(button => {
        button.addEventListener('click', function(e) {
            const productId = parseInt(this.getAttribute('data-product-id'));
            const producto = productos.find(p => p.id === productId);
            
            if (producto) {
                alert(`¡Te interesa ${producto.nombre}! 🎉\n\nPrecio: $${producto.precio.toFixed(2)}\n\n¿Te gustaría hacer un pedido? Contáctanos en la sección de contacto o por WhatsApp. 💬`);
            }
        });
    });
}

// Cargar productos cuando la página esté lista
// document.addEventListener('DOMContentLoaded', cargarProductos); // Ya se llama arriba

// ==========================================
// RESTO DEL CÓDIGO ORIGINAL
// ==========================================

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Animación al hacer scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animación a las tarjetas (se ejecutará después de cargar los productos)
setTimeout(() => {
    document.querySelectorAll('.product-card, .contact-item').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}, 100);

// Animación del logo al hacer scroll
let lastScroll = 0;
const logo = document.querySelector('.logo-icon');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > lastScroll) {
        // Scrolling down
        logo.style.transform = 'rotate(360deg)';
    } else {
        // Scrolling up
        logo.style.transform = 'rotate(-360deg)';
    }
    
    lastScroll = currentScroll;
});

// El header mantiene sus colores navideños siempre
// (código de cambio de color al scroll removido)

// Console log navideño
// Console log navideño
console.log('%c🎄 ¡Hola! 🎄', 'font-size: 20px; color: #DC143C; font-weight: bold;');
console.log('%c✨ Gracias por visitar Softpooky - Amigurumis Navideños ✨', 'font-size: 14px; color: #228B22;');
console.log('%c🎅 Cada muñeco es hecho con amor 🎁', 'font-size: 12px; color: #FFD700;');

