// BASE DE DATOS DE PRODUCTOS CON MUESTRAS DEDICADAS
const products = [
    {
        id: 1,
        name: "Playera Básico Personalizada",
        price: 180,
        image: "assets/img/playera.png",
        description: "Playera cómoda y versátil, perfecta para llevar el diseño que tú quieras. Puedes enviarnos tu imagen, ilustración o idea y nosotros nos encargamos de personalizarla para crear una prenda única y a tu estilo.",
        sizes: ["CH", "M", "G", "XG", "2XL"],
        colors: ["Negro", "Blanco", "Azul Marino", "Gris"],
        gallery: [
            "assets/img/playeras/playera1.png",
            "assets/img/playeras/playera2.png",
            "assets/img/playeras/playera3.png",
            "assets/img/playeras/playera4.png",
            "assets/img/playeras/playera5.png",
            "assets/img/playeras/playera6.png",
            "assets/img/playeras/playera7.png",
            "assets/img/playeras/playera8.png"
        ]
    },
    {
        id: 2,
        name: "Hoodie Personalizable",
        price: 450,
        image: "assets/img/hoodie.png",
        description: "Hoodie cómoda y versátil, perfecta para llevar el diseño que tú quieras. Puedes enviarnos tu imagen, ilustración o idea y nosotros nos encargamos de personalizarla para crear una prenda única.",
        sizes: ["CH", "M", "G", "XG"],
        colors: ["Beige", "Negro", "Blanco"],
        gallery: [
            "assets/img/hoodies/hoodie1.png",
            "assets/img/hoodies/hoodie2.png",
            "assets/img/hoodies/hoodie3.png",
            "assets/img/hoodies/hoodie4.png",
            "assets/img/hoodies/hoodie5.png",
            "assets/img/hoodies/hoodie6.png",
            "assets/img/hoodies/hoodie7.png"
        ]
    },
    {
        id: 3,
        name: "Taza Personalizada",
        price: 100,
        image: "assets/img/taza.png",
        description: "Taza ideal para darle un toque único a tus momentos favoritos. Elige el diseño que a ti te guste, envíanos tu imagen, ilustración, frase o idea y nosotros la plasmamos en tu taza.",
        sizes: ["Única (11 oz)"],
        colors: ["Blanca"],
        gallery: [
            "assets/img/tazas/taza1.png",
            "assets/img/tazas/taza2.png",
            "assets/img/tazas/taza3.png",
            "assets/img/tazas/taza4.png",
            "assets/img/tazas/taza5.png",
            "assets/img/tazas/taza6.png"
        ]
    },
    {
        id: 4,
        name: "Gorra Personalizada",
        price: 150,
        image: "assets/img/gorra.png",
        description: "Gorra cómoda y versátil, perfecta para complementar cualquier outfit y darle un toque único a tu estilo. Puedes enviarnos el diseño que más te agrade y nosotros lo personalizamos.",
        sizes: ["Ajustable"],
        colors: ["Negro", "Blanco/Negro"],
        gallery: [
            "assets/img/gorras/gorra1.png",
            "assets/img/gorras/gorra2.png",
            "assets/img/gorras/gorra3.png"
           
        ]
    },
    {
        id: 5,
        name: "Tote Bag Personalizada",
        price: 150,
        image: "assets/img/totebag.png",
        description: "Tote Bag práctica, cómoda y versátil, perfecta para llevar tus cosas y darle un toque único a tu estilo. Puedes enviarnos el diseño que a ti más te guste y nosotros lo plasmamos.",
        sizes: ["Estándar"],
        colors: ["Crudo/Beige"],
        gallery: [
            "assets/img/totebags/totebag1.png",
            "assets/img/totebags/totebag2.png",
            "assets/img/totebags/totebag3.png",
            "assets/img/totebags/totebag4.png"
        ]
    }
];

// VARIABLES GLOBALES DE CARRITO Y CARRUSEL
let cart = JSON.parse(localStorage.getItem('croma_cart')) || [];
let galleryTimer = null;
let currentGalleryPosition = 0;

// FUNCIONES DE UTILIDAD Y REDIRECCIÓN
function saveCart() {
    localStorage.setItem('croma_cart', JSON.stringify(cart));
    updateCartUI();
}

function showToast(message) {
    const toast = document.getElementById("toast-notification");
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

function goToCustomizer(productId) {
    window.location.href = `producto.html?id=${productId}`;
}

// 1. RENDER EN PÁGINA DE INICIO (index.html)
function renderHomeProducts(productList = products) {
    const grid = document.getElementById('products-grid') || document.getElementById('home-products-grid');
    if (!grid) return;
    grid.innerHTML = '';

    productList.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style.cursor = 'pointer';
        card.innerHTML = `
            <div onclick="goToCustomizer(${p.id})">
                <img src="${p.image}" alt="${p.name}" class="product-img">
                <h3>${p.name}</h3>
                <p class="product-price">$${p.price} MXN</p>
            </div>
            <button class="btn-add" onclick="goToCustomizer(${p.id})">Personalizar 🎨</button>
        `;
        grid.appendChild(card);
    });
}

// 2. RENDER EN PÁGINA DE CATÁLOGO COMPLETO (catalogo.html)
function renderFullCatalog() {
    const grid = document.getElementById('full-catalog-grid');
    if (!grid) return;
    grid.innerHTML = '';

    products.forEach(p => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.style = 'display: flex; flex-direction: column; justify-content: space-between; height: 100%; padding: 20px; text-align: center;';
        card.innerHTML = `
            <div>
                <img src="${p.image}" alt="${p.name}" class="product-img" style="max-height: 200px; object-fit: contain; margin-bottom: 15px;">
                <h3 style="margin-bottom: 8px;">${p.name}</h3>
                <p class="product-price" style="font-weight: 600; color: #6b1d2f; font-size: 1.2rem; margin-bottom: 10px;">$${p.price} MXN</p>
                <p style="font-size: 0.85rem; color: #555; text-align: justify; line-height: 1.4; margin-bottom: 15px;">${p.description}</p>
            </div>
            <button class="btn-add" onclick="goToCustomizer(${p.id})" style="width: 100%; margin-top: 10px;">Personalizar 🎨</button>
        `;
        grid.appendChild(card);
    });
}

// 3. DETALLE DE PRODUCTO Y CARRUSEL PERSONALIZADO (producto.html)
function renderProductDetailPage() {
    const titleEl = document.getElementById('detail-title');
    if (!titleEl) return; 

    const urlParams = new URLSearchParams(window.location.search);
    const productId = parseInt(urlParams.get('id')) || 1;
    const product = products.find(p => p.id === productId) || products[0];

    // Reiniciar posición del carrusel para el nuevo producto
    currentGalleryPosition = 0;
    stopGalleryAutoScroll();

    // Cargar información del producto
    document.getElementById('detail-img').src = product.image;
    document.getElementById('detail-img').alt = product.name;
    titleEl.innerText = product.name;
    document.getElementById('detail-price-mobile').innerText = `$${product.price} MXN`;
    document.getElementById('detail-price-card').innerText = `$${product.price} MXN`;

    // Cargar Tallas y Colores
    const sizeSelect = document.getElementById('detail-size');
    sizeSelect.innerHTML = product.sizes.map(s => `<option value="${s}">${s}</option>`).join('');

    const colorSelect = document.getElementById('detail-color');
    colorSelect.innerHTML = product.colors.map(c => `<option value="${c}">${c}</option>`).join('');

    // Cargar Carrusel de Trabajos Realizados
    const track = document.getElementById('gallery-carousel-track');
    if (track && product.gallery) {
        track.innerHTML = '';
        track.style.transform = `translateX(0px)`;

        product.gallery.forEach(imgUrl => {
            const item = document.createElement('div');
            item.style = "min-width: 180px; height: 180px; background: #fff; border-radius: 8px; border: 1px solid #eee; box-shadow: 0 2px 6px rgba(0,0,0,0.06); padding: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;";
            item.innerHTML = `<img src="${imgUrl}" alt="Ejemplo sublimado" style="max-width: 100%; max-height: 100%; object-fit: contain;">`;
            track.appendChild(item);
        });

        // Iniciar desplazamiento automático
        startGalleryAutoScroll();

        // Control del mouse (pausar al colocar el cursor encima)
        const wrapper = document.querySelector('.gallery-carousel-wrapper');
        if (wrapper) {
            wrapper.onmouseenter = stopGalleryAutoScroll;
            wrapper.onmouseleave = startGalleryAutoScroll;
        }
    }

    // Botón agregar al carrito
    const addBtn = document.getElementById('add-to-cart-detail-btn');
    if (addBtn) {
        addBtn.onclick = () => {
            const selectedSize = sizeSelect.value;
            const selectedColor = colorSelect.value;
            const customText = document.getElementById('detail-custom').value.trim() || "Sin detalle especificado";

            cart.push({
                cartId: Date.now(),
                name: product.name,
                price: product.price,
                size: selectedSize,
                color: selectedColor,
                custom: customText
            });

            saveCart();
            showToast(`¡${product.name} agregado al carrito! ✨`);
        };
    }
}

// LÓGICA DEL CARRUSEL AUTOMÁTICO EN LOOP INFINITO
function moveGallerySlide(direction) {
    const track = document.getElementById('gallery-carousel-track');
    if (!track) return;

    const step = 200; // Distancia en píxeles de cada avance
    const maxScroll = track.scrollWidth - track.clientWidth;

    if (maxScroll <= 0) return;

    currentGalleryPosition += direction * step;

    // Si llega al final o se pasa, regresa al inicio (Loop)
    if (currentGalleryPosition > maxScroll) {
        currentGalleryPosition = 0;
    } 
    // Si regresa antes del inicio, salta al final
    else if (currentGalleryPosition < 0) {
        currentGalleryPosition = maxScroll;
    }

    track.style.transform = `translateX(-${currentGalleryPosition}px)`;
}

function startGalleryAutoScroll() {
    stopGalleryAutoScroll();
    galleryTimer = setInterval(() => {
        moveGallerySlide(1);
    }, 2500);
}

function stopGalleryAutoScroll() {
    if (galleryTimer) {
        clearInterval(galleryTimer);
        galleryTimer = null;
    }
}

// BÚSQUEDA EN PÁGINA PRINCIPAL
function filterProducts() {
    const input = document.getElementById('search-input');
    if (!input) return;
    const query = input.value.toLowerCase().trim();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderHomeProducts(filtered);
}

// CARRITO DE COMPRAS Y ACTUALIZACIÓN DE UI
function updateCartUI() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) cartCount.innerText = cart.length;

    const cartItemsDiv = document.getElementById('cart-items');
    if (!cartItemsDiv) return;

    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.style = "display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding: 8px 0;";
        div.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small>Talla: ${item.size} | Color: ${item.color}</small><br>
                <small><em>${item.custom}</em></small><br>
                <span>$${item.price} MXN</span>
            </div>
            <button onclick="removeFromCart(${item.cartId})" style="background:#ff4d4d; color:white; border:none; padding:4px 8px; border-radius:4px; cursor:pointer;">X</button>
        `;
        cartItemsDiv.appendChild(div);
    });

    const totalPriceEl = document.getElementById('cart-total-price');
    if (totalPriceEl) totalPriceEl.innerText = total;
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    saveCart();
    showToast("Producto eliminado");
}

// ENVÍO DE PEDIDOS VÍA WHATSAPP
const whatsappBtn = document.getElementById('whatsapp-send-btn');
if (whatsappBtn) {
    whatsappBtn.addEventListener('click', () => {
        if (cart.length === 0) return showToast("Tu carrito está vacío.");
        
        const phoneNumber = "523221699890";
        let text = "¡Hola CROMA Project!  Me interesa realizar el siguiente pedido:\n\n";
        
        cart.forEach((item, index) => {
            text += `${index + 1}. ${item.name}\n`;
            text += `   • Talla: ${item.size}\n`;
            text += `   • Color: ${item.color}\n`;
            text += `   • Detalle: ${item.custom}\n`;
            text += `   • Precio: $${item.price} MXN\n\n`;
        });

        const total = document.getElementById('cart-total-price') ? document.getElementById('cart-total-price').innerText : 0;
        text += `Total estimado: $${total} MXN\n\nQuedo a la espera para coordinar el diseño y el pago.`;

        window.open(`https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(text)}`, '_blank');
    });
}

// MANEJO DE VENTANA MODAL DE CARRITO
const modal = document.getElementById('cart-modal');
const cartBtn = document.getElementById('cart-btn');
const closeBtn = document.querySelector('.close-btn');

if (cartBtn && modal) cartBtn.onclick = () => modal.style.display = "flex";
if (closeBtn && modal) closeBtn.onclick = () => modal.style.display = "none";
if (modal) window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
    renderHomeProducts();
    renderFullCatalog();
    renderProductDetailPage();

    // MANEJO DESPLEGABLE EN PÁGINA DE PREGUNTAS FRECUENTES
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length === 0) return;

    
}

// INICIALIZACIÓN COMPLETA DE TU MAIN.JS
document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
    renderHomeProducts();
    renderFullCatalog();
    renderProductDetailPage();
    initFAQAccordion(); // <-- Agregado para ejecutar el comportamiento en preguntas-frecuentes.html
});
});

// MANEJO DESPLEGABLE EN PREGUNTAS FRECUENTES
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length === 0) return;

    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;

            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });

            faqItem.classList.toggle('active');
        });
    });
}

// INICIALIZACIÓN
document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
    renderHomeProducts();
    renderFullCatalog();
    renderProductDetailPage();
    initFAQAccordion(); // <-- Se añade esta llamada
});