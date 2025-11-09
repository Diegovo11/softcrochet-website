// ==========================================
// CARRUSEL DE IMÁGENES EN HERO (BACKGROUND DERECHO)
// ==========================================
function iniciarCarruselHero() {
    const heroImageBg = document.querySelector('.hero-image-background');
    
    
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
        heroImageBg.style.opacity = '0';
        
        setTimeout(() => {
            heroImageBg.style.backgroundImage = `url('${imagesPedidos[currentIndex]}')`;
            heroImageBg.style.opacity = '1';
            console.log('Imagen cargada:', imagesPedidos[currentIndex]);
            currentIndex = (currentIndex + 1) % imagesPedidos.length;
        }, 1500);
    }
    
    // Establecer primera imagen inmediatamente
    heroImageBg.style.backgroundImage = `url('${imagesPedidos[0]}')`;
    heroImageBg.style.opacity = '0.75';
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
// CONFIGURACIÓN DE PRODUCTOS POR CATEGORÍA
// ==========================================

const productosAmigurumis = [
    {
        id: 1,
        nombre: "Toad",
        descripcion: "Llaveros en forma de honguito",
        precio: 45.00,
        imagen: "pedidos/hongos_pedidos.jpeg",
        emoji: "🧸",
        badge: "Popular",
        badgeType: "popular"
    },
    {
        id: 2,
        nombre: "fishcake",
        descripcion: "Adorable llavero de pez",
        precio: 45.00,
        imagen: "pedidos/pez_pedido.jpeg",
        emoji: "🐰",
        badge: null,
        badgeType: null
    }
];

const productosAnime = [
    {
        id: 4,
        nombre: "Gojo Gato",
        descripcion: "Vas a caer gege, llavero de Gojo Satoru en forma de gato",
        precio: 100.00,
        imagen: "images/gojo_gato.jpg",
        emoji: "⚡",
        badge: "Popular",
        badgeType: "popular"
    },
    {
        id: 5,
        nombre: "Zoro",
        descripcion: "Zoro de One Piece",
        precio: 250.00,
        imagen: "images/zoro.jpg",
        emoji: "⚔️",
        badge: "Especial",
        badgeType: "special"
    },
    {
        id: 6,
        nombre: "Coraline",
        descripcion: "Cabeza de Coraline",
        precio: 150.00,
        imagen: "images/caroline.jpg",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    }
];

const productosFlores = [
    {
        id: 7,
        nombre: "Flor de chihiro",
        descripcion: "Hermosa flor basado en la pelicula el viaje de chihiro",
        precio: 100.00,
        imagen: "images/flor_chihiro.jpg",
        emoji: "🌷",
        badge: null,
        badgeType: null
    },
    {
        id: 8,
        nombre: "Rosas",
        descripcion: "Rosas que nunca se marchitan",
        precio: 100.00,
        imagen: "images/rosa.jpg",
        emoji: "🌹",
        badge: null,
        badgeType: null
    },
    {
        id: 9,
        nombre: "Lirio",
        descripcion: "Lirio tejido con amor",
        precio: 95.00,
        imagen: "images/lirio.jpg",
        emoji: "🌻",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 10,
        nombre: "Nufar",
        descripcion: "Nufar tejido",
        precio: 95.00,
        imagen: "images/nufar.jpg",
        emoji: "🌻",
        badge: null,
        badgeType: null
    },
    {
        id: 11,
        nombre: "lavandas",
        descripcion: "Ramo de lavandas tejidas con flores de lirio",
        precio: 150.00,
        imagen: "images/ramo_lavandas.jpg",
        emoji: "🌻",
        badge: null,
        badgeType: null
    },
    {
        id: 12,
        nombre: "Tulipan",
        descripcion: "Tulipan abierto tejido",
        precio: 150.00,
        imagen: "images/tulipan.jpg",
        emoji: "🌻",
        badge: null,
        badgeType: null
    },
    {
        id: 13,
        nombre: "Tulipan cerrado",
        descripcion: "tulipan cerrado tejido",
        precio: 150.00,
        imagen: "images/tulipan_cerrado.jpg",
        emoji: "🌻",
        badge: null,
        badgeType: null
    }
];

const productosHalloween = [
    {
        id: 14,
        nombre: "Gato Calabaza",
        descripcion: "Gato calabaza",
        precio: 120.00,
        imagen: "images/gato_calabaza.jpg",
        emoji: "🎃",
        badge: "Especial",
        badgeType: "special"
    },
    {
        id: 15,
        nombre: "Frankenstein",
        descripcion: "Llavero Frankenstein",
        precio: 120.00,
        imagen: "images/frankestein.jpg",
        emoji: "🧟",
        badge: "Popular",
        badgeType: "popular"
    },
    {
        id: 16,
        nombre: "Oogie Boogie",
        descripcion: "Llavero de Oogie Boogie",
        precio: 100.00,
        imagen: "images/obigubi.jpg",
        emoji: "👻",
        badge: "Especial",
        badgeType: "special"
    },
    {
        id: 17,
        nombre: "Araña",
        descripcion: "Mini peluche de araña",
        precio: 150.00,
        imagen: "images/araña.jpg",
        emoji: "🕷️",
        badge: null,
        badgeType: null
    },
    {
        id: 18,
        nombre: "Murciélago",
        descripcion: "Adorable murciélago tejido",
        precio: 150.00,
        imagen: "pedidos/murcielago_pedidos.jpeg",
        emoji: "🦇",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 19,
        nombre: "Calaveras",
        descripcion: "Set de calaveras decorativas",
        precio: 100.00,
        imagen: "pedidos/calaberas_pedidos.jpeg",
        emoji: "💀",
        badge: null,
        badgeType: null
    }
];

const productosBolsas = [
    {
        id: 20,
        nombre: "Bolsa TEMPTATION de TXT",
        descripcion: "The name chapter: TEMPTATION de TXT",
        precio: 200.00,
        imagen: "images/bolsita.jpg",
        emoji: "🛍️",
        badge: "Popular",
        badgeType: "popular"
    },
    {
        id: 21,
        nombre: "Gorro de Tae",
        descripcion: "Gorrito tejido inspirado en Tae de BTS",
        precio: 270.00,
        imagen: "images/gorrito_cat.jpg",
        emoji: "👜",
        badge: "Nuevo",
        badgeType: "new"
    }
];

// ==========================================
// FUNCIÓN PARA CARGAR PRODUCTOS
// ==========================================
function cargarProductos() {
    cargarProductosPorCategoria('amigurumis-container', productosAmigurumis);
    cargarProductosPorCategoria('anime-container', productosAnime);
    cargarProductosPorCategoria('flores-container', productosFlores);
    cargarProductosPorCategoria('halloween-container', productosHalloween);
    cargarProductosPorCategoria('bolsas-container', productosBolsas);
}

function cargarProductosPorCategoria(containerId, productos) {
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.warn(`Contenedor ${containerId} no encontrado`);
        return;
    }
    
    // Limpiar el contenedor
    container.innerHTML = '';
    
    // Crear tarjetas de productos
    productos.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.setAttribute('data-product-id', producto.id);
        
        // Crear contenido de la tarjeta
        card.innerHTML = `
            <div class="product-image" data-product-id="${producto.id}">
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
                    <button class="btn-small" data-product-id="${producto.id}"><span>Hacer pedido</span></button>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
    
    // Reactivar los event listeners para los botones y las imágenes
    activarBotonesProductos();
    activarImagenesProductos();
}

// ==========================================
// FUNCIÓN PARA ACTIVAR BOTONES DE PRODUCTOS
// ==========================================
function activarBotonesProductos() {
    document.querySelectorAll('.btn-small').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Redirigir a WhatsApp
            window.open('https://wa.me/525575608287', '_blank');
        });
    });
}

// ==========================================
// FUNCIÓN PARA ACTIVAR CLICK EN IMÁGENES
// ==========================================
function activarImagenesProductos() {
    document.querySelectorAll('.product-image').forEach(imageDiv => {
        imageDiv.style.cursor = 'pointer';
        imageDiv.addEventListener('click', function(e) {
            const productId = parseInt(this.getAttribute('data-product-id'));
            
            // Buscar en todas las categorías
            const todasLasCategorias = [
                ...productosAmigurumis,
                ...productosAnime,
                ...productosFlores,
                ...productosHalloween,
                ...productosBolsas
            ];
            
            const producto = todasLasCategorias.find(p => p.id === productId);
            
            if (producto) {
                mostrarModalImagen(producto);
            }
        });
    });
}

// ==========================================
// FUNCIÓN PARA MOSTRAR MODAL DE IMAGEN
// ==========================================
function mostrarModalImagen(producto) {
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalPrice = document.getElementById('modalPrice');
    
    modalImg.src = producto.imagen;
    modalTitle.textContent = producto.nombre;
    modalDescription.textContent = producto.descripcion;
    modalPrice.textContent = `$${producto.precio.toFixed(2)}`;
    
    modal.style.display = 'flex';
    
    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';
}

// ==========================================
// CERRAR MODAL
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('imageModal');
    const closeBtn = document.querySelector('.modal-close');
    
    // Cerrar al hacer clic en la X
    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Cerrar al hacer clic fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Cerrar con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});

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
            
            // Cerrar el dropdown después de hacer clic
            const dropdown = this.closest('.dropdown');
            if (dropdown) {
                dropdown.classList.remove('active');
            }
        }
    });
});

// Manejo del menú desplegable de categorías
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        });
        
        // Cerrar el dropdown al hacer clic fuera
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
    }
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

// Console log
console.log('%c🎄 ¡Hola! 🎄', 'font-size: 20px; color: #DC143C; font-weight: bold;');
console.log('%c✨ Gracias por visitar Softpooky - Amigurumis ✨', 'font-size: 14px; color: #228B22;');
console.log('%c🧶 Cada muñeco es hecho con amor 💖', 'font-size: 12px; color: #FFD700;');
