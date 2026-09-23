// CATÁLOGO DE PRODUCTOS
const products = [
    {
        id: 1,
        name: "Playera Básico Personalizada",
        price: 180,
        image: "assets/img/playera.png",
        sizes: ["CH", "M", "G", "XG", "2XL", "3XL"],
        colors: ["Negro", "Blanco", "Azul Marino", "Amarillo"]
    },
    {
        id: 2,
        name: "Hoodie Personalizable",
        price: 450,
        image: "assets/img/hoodie.png",
        sizes: ["CH", "M", "G", "XG"],
        colors: ["Beige", "Negro", "Blanco"]
    },
    {
        id: 3,
        name: "Taza Personalizada",
        price: 100,
        image: "assets/img/taza.png",
        sizes: ["Única (11 oz)"],
        colors: ["Blanca", "Interior Negro"]
    },
    {
        id: 4,
        name: "Gorra Personalizada",
        price: 150,
        image: "assets/img/gorra.png",
        sizes: ["Ajustable"],
        colors: ["Negro", "Rojo/Blanco", "Negro/Blanco"]
    },
    {
        id: 5,
        name: "Tote Bag Personalizada",
        price: 150,
        image: "assets/img/totebag.png",
        sizes: ["Estándar"],
        colors: ["Crudo/Beige"]
    }
];

let cart = [];
let slideIndex = 0;
let autoTimer = null;

// NOTIFICACIÓN FLOTANTE
function showToast(message) {
    const toast = document.getElementById("toast-notification");
    if (!toast) return;
    toast.innerText = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
}

// RENDER DE PRODUCTOS
function renderProducts(productList = products) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    grid.innerHTML = '';

    if (productList.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #777; padding: 30px;">No se encontraron productos.</p>';
        return;
    }

    productList.forEach(product => {
        const sizesOptions = product.sizes.map(s => `<option value="${s}">${s}</option>`).join('');
        const colorsOptions = product.colors.map(c => `<option value="${c}">${c}</option>`).join('');

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-img">
            <h3>${product.name}</h3>
            <p class="product-price">$${product.price} MXN</p>
            
            <div class="form-group">
                <label>Talla:</label>
                <select id="size-${product.id}">${sizesOptions}</select>
            </div>
            
            <div class="form-group">
                <label>Color:</label>
                <select id="color-${product.id}">${colorsOptions}</select>
            </div>

            <div class="form-group">
                <label>Detalle/Frase de tu diseño:</label>
                <input type="text" id="custom-${product.id}" placeholder="Ej: Logo en el centro, texto...">
            </div>

            <button class="btn-add" onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        grid.appendChild(card);
    });
}

// FILTRO DE BÚSQUEDA
function filterProducts() {
    const query = document.getElementById('search-input').value.toLowerCase().trim();
    const filtered = products.filter(p => p.name.toLowerCase().includes(query));
    renderProducts(filtered);
}

// CARRUSEL AUTOMÁTICO Y HORIZONTAL
function updateCarousel() {
    const track = document.getElementById('carousel-track');
    if (!track) return;
    const totalSlides = document.querySelectorAll('.carousel-slide').length;
    
    if (slideIndex >= totalSlides) slideIndex = 0;
    if (slideIndex < 0) slideIndex = totalSlides - 1;

    // Movimiento horizontal en porcentaje
    const percentage = slideIndex * (100 / totalSlides);
    track.style.transform = `translateX(-${percentage}%)`;
}

function moveSlide(direction) {
    slideIndex += direction;
    updateCarousel();
    resetTimer();
}

function startTimer() {
    autoTimer = setInterval(() => {
        slideIndex++;
        updateCarousel();
    }, 3500); // Se mueve automáticamente cada 3.5 segundos
}

function resetTimer() {
    clearInterval(autoTimer);
    startTimer();
}

// CARRITO DE COMPRAS
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const selectedSize = document.getElementById(`size-${productId}`).value;
    const selectedColor = document.getElementById(`color-${productId}`).value;
    const customText = document.getElementById(`custom-${productId}`).value || "Sin detalle especificado";

    cart.push({
        cartId: Date.now(),
        name: product.name,
        price: product.price,
        size: selectedSize,
        color: selectedColor,
        custom: customText
    });

    updateCartUI();
    showToast(`¡${product.name} agregado al carrito! ✨`);
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price;
        const div = document.createElement('div');
        div.className = 'cart-item';
        div.innerHTML = `
            <div>
                <strong>${item.name}</strong><br>
                <small>Talla: ${item.size} | Color: ${item.color}</small><br>
                <small><em>Diseño: ${item.custom}</em></small><br>
                <span>$${item.price} MXN</span>
            </div>
            <button class="btn-remove" onclick="removeFromCart(${item.cartId})">X</button>
        `;
        cartItemsDiv.appendChild(div);
    });

    document.getElementById('cart-total-price').innerText = total;
}

function removeFromCart(cartId) {
    cart = cart.filter(item => item.cartId !== cartId);
    updateCartUI();
    showToast("Producto eliminado del carrito");
}

document.getElementById('whatsapp-send-btn').addEventListener('click', () => {
    if (cart.length === 0) return showToast("Tu carrito está vacío.");
    
    const phoneNumber = "523221699890"; 
    let message = "¡Hola CROMA Project! Me interesa realizar el siguiente pedido:\n\n";
    
    cart.forEach((item, index) => {
        message += `*${index + 1}. ${item.name}*\n • Talla: ${item.size}\n • Color: ${item.color}\n • Detalle: ${item.custom}\n • Precio: $${item.price} MXN\n\n`;
    });

    message += `*Total estimado:* $${document.getElementById('cart-total-price').innerText} MXN\n\nQuedo a la espera para coordinar el diseño y el pago.`;
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
});

const modal = document.getElementById('cart-modal');
document.getElementById('cart-btn').onclick = () => modal.style.display = "flex";
document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };

// INICIALIZACIÓN
renderProducts();
startTimer();