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
        nombre: "Toad's",
        descripcion: "Llavero de estambre 100% algodón.",
        precio: 45.00,
        imagen: "images/amigorumis/toad.webp",
        emoji: "🧸",
        badge: "Popular",
        badgeType: "popular"
    },
    {
        id: 2,
        nombre: "Fish cake",
        descripcion: "llavero de estambre 100% algodón.",
        precio: 45.00,
        imagen: "images/amigorumis/fish_cake.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 6,
        nombre: "Coraline Jones",
        descripcion: "Estambre 100% algodón.",
        precio: 150.00,
        imagen: "images/amigorumis/caroline_jones.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 24,
        nombre: "Koya BT21",
        descripcion: "Estambre 100% algodón.",
        precio: 270.00,
        imagen: "images/amigorumis/koya.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 25,
        nombre: "Shooky BT21",
        descripcion: "Estambre 100% algodón.",
        precio: 270.00,
        imagen: "images/amigorumis/shooky.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 26,
        nombre: "Ajolote",
        descripcion: "Estambre 100% algodón.",
        precio: 150.00,
        imagen: "images/amigorumis/axolote.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 28,
        nombre: "Tlacuache",
        descripcion: "Estambre 100% poliester.",
        precio: 100.00,
        imagen: "images/amigorumis/Tlacuache.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 31,
        nombre: "Ositos",
        descripcion: "llaveros de estambre 100% algodón.",
        precio: 90.00,
        imagen: "images/amigorumis/ositos.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    }
];

const productosAnime = [
    {
        id: 4,
        nombre: "Satoru Gojo cat",
        descripcion: "Estambre 100% algodón.",
        precio: 100.00,
        imagen: "images/anime/gojo_cat.webp",
        emoji: "⚡",
        badge: "Popular",
        badgeType: "popular"
    },
    {
        id: 5,
        nombre: "Roronoa Zoro",
        descripcion: "Estambre 100% algodón.",
        precio: 270.00,
        imagen: "images/anime/zoro.webp",
        emoji: "⚔️",
        badge: "Especial",
        badgeType: "special"
    }
];

const productosFlores = [
    {
        id: 7,
        nombre: "Flor de chihiro",
        descripcion: "Estambre 100% algodón, 38 cm de altura",
        precio: 80.00,
        imagen: "images/flores/flor_chihiro.webp",
        emoji: "🌷",
        badge: null,
        badgeType: null
    },
    {
        id: 8,
        nombre: "Rosas",
        descripcion: "Estambre 100% algodón, 32 cm de altura",
        precio: 80.00,
        imagen: "images/flores/rosa.webp",
        emoji: "🌹",
        badge: null,
        badgeType: null
    },
    {
        id: 9,
        nombre: "Lirio",
        descripcion: "Estambre 100% algodón.",
        precio: 150.00,
        imagen: "images/flores/lirio.webp",
        emoji: "🌻",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 10,
        nombre: "Anthurium",
        descripcion: "Estambre 100% algodón, 13 cm de alto x 10 de ancho",
        precio: 100.00,
        imagen: "images/flores/Anthurium.webp",
        emoji: "🌻",
        badge: null,
        badgeType: null
    },
    {
        id: 11,
        nombre: "Lavandas",
        descripcion: "Estambre 100% algodón.",
        precio: 45.00,
        imagen: "images/flores/lavandas.webp",
        emoji: "🌻",
        badge: null,
        badgeType: null
    },
    {
        id: 12,
        nombre: "Tulipan",
        descripcion: "Estambre 100% algodón, 36 cm de altura",
        precio: 100.00,
        imagen: "images/flores/tulipan.webp",
        emoji: "🌻",
        badge: null,
        badgeType: null
    },
    {
        id: 13,
        nombre: "Mini Tulipanes",
        descripcion: "Estambre 100% algodón.",
        precio: 45.00,
        imagen: "images/flores/mini_tulipanes.webp",
        emoji: "🌻",
        badge: null,
        badgeType: null
    },
    {
        id: 22,
        nombre: "Alcatraz",
        descripcion: "Estambre 100% algodón.",
        precio: 45.00,
        imagen: "images/flores/alcatraz.webp",
        emoji: "🌻",
        badge: null,
        badgeType: null
    },
    {
        id: 23,
        nombre: "Lirios del Valle",
        descripcion: "Estambre 100% algodón.",
        precio: 80.00,
        imagen: "images/flores/lirio_valle.webp",
        emoji: "🌻",
        badge: null,
        badgeType: null
    }
];

const productosHalloween = [
    {
        id: 14,
        nombre: "Gato Calabaza",
        descripcion: "Llavero de estambre 100% algodón de 5 cm de alto.",
        precio: 45.00,
        imagen: "images/halloween/gato_calabaza.webp",
        emoji: "🎃",
        badge: "Especial",
        badgeType: "special"
    },
    {
        id: 15,
        nombre: "Mini Frankenstein",
        descripcion: "Llavero de estambre 100% algodón de 5 cm de alto.",
        precio: 45.00,
        imagen: "images/halloween/mini_Frankenstein.webp",
        emoji: "🧟",
        badge: "Popular",
        badgeType: "popular"
    },
    {
        id: 16,
        nombre: "Oogie Boogie",
        descripcion: "Llavero de estambre 100% algodón de 11 cm de alto.",
        precio: 90.00,
        imagen: "images/halloween/Oogie_Boogie.webp",
        emoji: "👻",
        badge: "Especial",
        badgeType: "special"
    },
    {
        id: 17,
        nombre: "Arañita",
        descripcion: "Estambre 100% poliester de 10 cm de largo.",
        precio: 100.00,
        imagen: "images/halloween/arañita.webp",
        emoji: "🕷️",
        badge: null,
        badgeType: null
    },
    {
        id: 18,
        nombre: "Murcielago 1V",
        descripcion: "llavero de estambre 100% algodón.",
        precio: 90.00,
        imagen: "images/halloween/murcielago_v1.webp",
        emoji: "🦇",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 19,
        nombre: "Llavero Día de Muertos",
        descripcion: "Llavero de estambre 100% algodón.",
        precio: 150.00,
        imagen: "images/halloween/dia_muertos.webp",
        emoji: "💀",
        badge: null,
        badgeType: null
    },
    {
        id: 27,
        nombre: "Trick 'r Treat",
        descripcion: "Llavero de estambre 100% algodón de 9 cm de alto",
        precio: 90.00,
        imagen: "images/halloween/Trick_Treat.webp",
        emoji: "💀",
        badge: null,
        badgeType: null
    },
    {
        id: 29,
        nombre: "Murcielago 2V",
        descripcion: "llavero de estambre 100% poliester.",
        precio: 100.00,
        imagen: "images/halloween/arañita_v2.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 30,
        nombre: "Calabaza",
        descripcion: "llavero de estambre 100% algodón.",
        precio: 90.00,
        imagen: "images/halloween/calabaza.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    }
];

const productosBolsas = [
    {
        id: 20,
        nombre: "Totebag 'the name chapter: TEMPTATION de TXT'",
        descripcion: "Estambre 100% agoldon de 23 x 22 cm, mas 23 cm de largo con las cintas.",
        precio: 270.00,
        imagen: "images/accesorios/totebag.webp",
        emoji: "🛍️",
        badge: "Popular",
        badgeType: "popular"
    },
    {
        id: 21,
        nombre: "Cat Beanie",
        descripcion: "inspirado en V de BTS de lana 100% acrilica",
        precio: 270.00,
        imagen: "images/accesorios/cat_beanie.webp",
        emoji: "👜",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 32,
        nombre: "Portalabial de Medusa",
        descripcion: "Estambre 100% algodon.",
        precio: 100.00,
        imagen: "images/accesorios/porta_labios.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 33,
        nombre: "Separador de libros versión perro salchicha",
        descripcion: "Estambre 100% algodon.",
        precio: 90.00,
        imagen: "images/accesorios/separador_dog.webp",
        emoji: "👧",
        badge: "Nuevo",
        badgeType: "new"
    },
    {
        id: 34,
        nombre: "Gorritos inspirados en Bbokari y Jiniret",
        descripcion: "Estambre 100% poliester.",
        precio: 200.00,
        imagen: "images/accesorios/gorritos.webp",
        emoji: "👧",
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
    
    const cerrarModal = () => {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    };
    
    // Cerrar al hacer clic en la X (soporte touch)
    closeBtn.addEventListener('click', cerrarModal);
    closeBtn.addEventListener('touchstart', (e) => {
        e.preventDefault();
        cerrarModal();
    }, { passive: false });
    
    // Cerrar al hacer clic/touch fuera del contenido
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    });
    
    modal.addEventListener('touchstart', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
    }, { passive: true });
    
    // Cerrar con la tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.style.display === 'flex') {
            cerrarModal();
        }
    });
    
    // Prevenir scroll en el modal content
    const modalContent = document.querySelector('.modal-content-wrapper');
    if (modalContent) {
        modalContent.addEventListener('touchmove', (e) => {
            e.stopPropagation();
        }, { passive: true });
    }
});

// ==========================================
// RESTO DEL CÓDIGO ORIGINAL
// ==========================================

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        
        // Si es solo "#", no hacer nada
        if (href === '#') {
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            // Cerrar el dropdown antes de hacer scroll
            const dropdown = this.closest('.dropdown');
            if (dropdown) {
                dropdown.classList.remove('active');
            }
            
            // Calcular offset según el dispositivo
            const isMobile = window.innerWidth <= 640;
            const isTablet = window.innerWidth > 640 && window.innerWidth <= 968;
            
            let offset = 120; // Desktop
            if (isMobile) {
                offset = 150; // Móviles necesitan más espacio
            } else if (isTablet) {
                offset = 130; // Tablets
            }
            
            // Obtener la posición del elemento
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = targetPosition - offset;
            
            // Hacer scroll con animación suave
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
    
    // Agregar soporte táctil
    anchor.addEventListener('touchend', function (e) {
        // El evento click se manejará normalmente
        // Esto es solo para mejorar la respuesta táctil
    }, { passive: true });
});

// Manejo del menú desplegable de categorías
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    
    if (dropdownToggle) {
        // Soporte para click y touch
        dropdownToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
        });
        
        dropdownToggle.addEventListener('touchstart', function(e) {
            e.preventDefault();
            dropdown.classList.toggle('active');
        }, { passive: false });
        
        // Cerrar el dropdown al hacer clic/touch fuera
        const closeDropdown = function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        };
        
        document.addEventListener('click', closeDropdown);
        document.addEventListener('touchstart', closeDropdown, { passive: true });
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
