// LISTA DE PRODUCTOS BASADA EN EL CATÁLOGO OFICIAL
const products = [
    {
        id: 1,
        name: "Playera Básico Personalizada",
        price: 180,
        image: "assets/img/playera.jpg",
        sizes: ["CH", "M", "G", "XG", "2XL", "3XL"],
        colors: ["Negro", "Blanco", "Azul Marino", "Amarillo"]
    },
    {
        id: 2,
        name: "Hoodie Personalizable",
        price: 450,
        image: "assets/img/hoodie.jpg",
        sizes: ["CH", "M", "G", "XG"],
        colors: ["Beige", "Negro", "Blanco"]
    },
    {
        id: 3,
        name: "Taza Personalizada",
        price: 150,
        image: "assets/img/taza.jpg",
        sizes: ["Única (11 oz)"],
        colors: ["Blanca", "Interior Negro"]
    },
    {
        id: 4,
        name: "Gorra Personalizada",
        price: 150,
        image: "assets/img/gorra.jpg",
        sizes: ["Ajustable"],
        colors: ["Negro", "Rojo/Blanco", "Negro/Blanco"]
    },
    {
        id: 5,
        name: "Tote Bag Personalizada",
        price: 150,
        image: "assets/img/totebag.jpg",
        sizes: ["Estándar"],
        colors: ["Crudo/Beige"]
    }
];

let cart = [];

// CARGAR PRODUCTOS EN LA PÁGINA
function renderProducts() {
    const grid = document.getElementById('products-grid');
    grid.innerHTML = '';

    products.forEach(product => {
        const sizesOptions = product.sizes.map(s => `<option value="${s}">${s}</option>`).join('');
        const colorsOptions = product.colors.map(c => `<option value="${c}">${c}</option>`).join('');

        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x200?text=CROMA+PROJECT'">
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
                <input type="text" id="custom-${product.id}" placeholder="Ej: Logo en el centro, nombre...">
            </div>

            <button class="btn-add" onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        grid.appendChild(card);
    });
}

// AGREGAR AL CARRITO
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const selectedSize = document.getElementById(`size-${productId}`).value;
    const selectedColor = document.getElementById(`color-${productId}`).value;
    const customText = document.getElementById(`custom-${productId}`).value || "Sin detalle especificado";

    const item = {
        cartId: Date.now(),
        name: product.name,
        price: product.price,
        size: selectedSize,
        color: selectedColor,
        custom: customText
    };

    cart.push(item);
    updateCartUI();
    alert(`¡${product.name} agregado al carrito!`);
}

// ACTUALIZAR INTERFAZ DEL CARRITO
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
}

// ENVIAR POR WHATSAPP
document.getElementById('whatsapp-send-btn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Tu carrito está vacío.");
        return;
    }

    // NÚMERO DE TELÉFONO DE LAS CHICAS (Reemplaza con el número real de 10 dígitos)
    const phoneNumber = "5210000000000"; 
    
    let message = "¡Hola CROMA Project! 🎨 Me interesa realizar el siguiente pedido:\n\n";
    
    cart.forEach((item, index) => {
        message += `*${index + 1}. ${item.name}*\n`;
        message += `   • Talla: ${item.size}\n`;
        message += `   • Color: ${item.color}\n`;
        message += `   • Detalle: ${item.custom}\n`;
        message += `   • Precio: $${item.price} MXN\n\n`;
    });

    const total = document.getElementById('cart-total-price').innerText;
    message += `*Total estimado:* $${total} MXN\n\nQuedo a la espera para coordinar el diseño y el pago.`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
});

// MANEJO DEL MODAL
const modal = document.getElementById('cart-modal');
document.getElementById('cart-btn').onclick = () => modal.style.display = "flex";
document.querySelector('.close-btn').onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };

// INICIALIZAR
renderProducts();