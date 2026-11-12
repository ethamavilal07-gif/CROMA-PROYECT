/**
 * CROMA PROJECT - LÓGICA DE CATÁLOGO DE SUBLIMADOS Y PERSONALIZADOR
 */

const catalogoSublimados = [];
/* EJEMPLO DE CÓMO AGREGAR UN PRODUCTO NUEVO QUE PERTENECE A DOS CATEGORÍAS:
catalogoSublimados.push(
    {
        id: `sub-nuevo-1`,
        nombre: `Playera Edición Especial Navidad`,
        categoria: ['nuevo', 'playeras'],
        etiqueta: '¡Lo Nuevo!',
        precio: 180,
        usaTalla: true,
        esPrenda: true,
        img: `./assets/img/playeras/playera1.png`
    },
    {
        id: `sub-nuevo-2`,
        nombre: `Hoodie Invierno`,
        categoria: ['nuevo', 'hoodies'],
        etiqueta: '¡Lo Nuevo!',
        precio: 450,
        usaTalla: true,
        esPrenda: true,
        img: `./assets/img/hoodies/hoodie1.png`
    },
);
 ... (tus demás bucles de playeras, hoodies, etc.)*/


//Esferas navideñas (esfera-basica.jpeg y esfera-decorada.jpeg)
catalogoSublimados.push(
    {
        id: `sub-producto-navideño-1`,
        nombre: `Esfera Navideña Basica`,
        categoria: ['nuevo', 'navidad'],
        etiqueta: '¡Lo Nuevo!',
        precio: 50,
        usaTalla: false,
        esPrenda: false,
        img: `./assets/img/productos-navideños/esfera1-basica.jpeg`
    },
    {
        id: `sub-producto-navideño-2`,
        nombre: `Esfera Navideña Decorada`,
        categoria: ['nuevo', 'navidad'],
        etiqueta: '¡Lo Nuevo!',
        precio: 65,
        usaTalla: false,
        esPrenda: false,
        img: `./assets/img/productos-navideños/esfera2-decorada.jpeg`
    },
    {
        id: `sub-producto-navideño-3`,
        nombre: `Esfera Navideña Especial`,
        categoria: ['nuevo', 'navidad'],
        etiqueta: '¡Lo Nuevo!',
        precio: "Queda a cotización, dependiendo del diseño",
        usaTalla: false,
        esPrenda: false,
        img: `./assets/img/productos-navideños/esfera3-navideñas.jpeg`
    }
    
);
 catalogoSublimados.push(
    {
        id: `sub-parejas-1`,
        nombre: `Combo pareja 1`,
        categoria: ['nuevo', 'playeras', 'parejas'],
        etiqueta: '¡Lo Nuevo!',
        precio: 799,
        usaTalla: true,
        esPrenda: true,
        img: `./assets/img/playeras/parejas/ppromo1.png`
    },
    {
        id: `sub-parejas-2`,
        nombre: `Combo pareja 2`,
        categoria: ['nuevo', 'playeras', 'parejas'],
        etiqueta: '¡Lo Nuevo!',
        precio: 799,
        usaTalla: true,
        esPrenda: true,
        img: `./assets/img/playeras/parejas/ppromo2.png`
    },
    
);
//Hoodies nuevas (hoodie12.png a hoodie20.png)
for (let i = 12; i <= 20; i++) {
    catalogoSublimados.push({
        id: `sub-hoodie-${i}`,
        nombre: `Hoodie Sublimada Diseño #${i}`,
        categoria: ['nuevo', 'hoodies'],
        etiqueta: '¡Lo Nuevo!',
        precio: 450,
        usaTalla: true,
        esPrenda: true,
        img: `./assets/img/hoodies/hoodie${i}.png`
    });
}
// Playeras nuevas (playera12.png a playera31.png)
for (let i = 13; i <= 31; i++) {
    catalogoSublimados.push({
        id: `sub-playera-${i}`,
        nombre: `Playera Sublimada Diseño #${i}`,
        categoria: ['nuevo', 'playeras'],
        etiqueta: '¡Lo Nuevo!',
        precio: 180,
        usaTalla: true,
        esPrenda: true,
        img: `./assets/img/playeras/playera${i}.png`
    });
}

// 1. Playeras (playera1.png a playera12.png)
for (let i = 1; i <= 12; i++) {
    catalogoSublimados.push({
        id: `sub-playera-${i}`,
        nombre: `Playera Sublimada Diseño #${i}`,
        categoria: 'playeras',
        etiqueta: 'Playera Básica',
        precio: 180,
        usaTalla: true,
        esPrenda: true,
        img: `./assets/img/playeras/playera${i}.png`
    });
}

// 2. Hoodies (hoodie1.png a hoodie11.png)
for (let i = 1; i <= 11; i++) {
    catalogoSublimados.push({
        id: `sub-hoodie-${i}`,
        nombre: `Hoodie Sublimada Diseño #${i}`,
        categoria: 'hoodies',
        etiqueta: 'Hoodie',
        precio: 450,
        usaTalla: true,
        esPrenda: true,
        img: `./assets/img/hoodies/hoodie${i}.png`
    });
}

// 3. Playeras Polo (carpeta polo: playera1.png a playera10.png)
for (let i = 1; i <= 10; i++) {
    catalogoSublimados.push({
        id: `sub-polo-${i}`,
        nombre: `Playera Polo Sublimada #${i}`,
        categoria: 'polo',
        etiqueta: 'Playera Polo',
        precio: 220,
        usaTalla: true,
        esPrenda: true,
        img: `./assets/img/polo/playera${i}.png`
    });
}

// 4. Tazas (taza1.png a taza11.png)
for (let i = 1; i <= 11; i++) {
    catalogoSublimados.push({
        id: `sub-taza-${i}`,
        nombre: `Taza Sublimada Diseño #${i}`,
        categoria: 'tazas',
        etiqueta: 'Taza Personalizada',
        precio: 80,
        usaTalla: false,
        img: `./assets/img/tazas/taza${i}.png`
    });
}

// 5. Tote Bags (totebag1.png a totebag9.png)
for (let i = 1; i <= 9; i++) {
    catalogoSublimados.push({
        id: `sub-totebag-${i}`,
        nombre: `Tote Bag Sublimada #${i}`,
        categoria: 'totebags',
        etiqueta: 'Tote Bag',
        precio: 120,
        usaTalla: false,
        img: `./assets/img/totebags/totebag${i}.png`
    });
}

// 6. Gorras (gorra1.png a gorra4.png)
for (let i = 1; i <= 4; i++) {
    catalogoSublimados.push({
        id: `sub-gorra-${i}`,
        nombre: `Gorra Sublimada Diseño #${i}`,
        categoria: 'gorras',
        etiqueta: 'Gorra',
        precio: 150,
        usaTalla: false,
        esPrenda: true,
        img: `./assets/img/gorras/gorra${i}.png`
    });
}

let categoriaActiva = 'todos';
let productoEnEdicion = null;
let itemsCarritoSublimados = JSON.parse(localStorage.getItem('croma_sub_cart') || '[]');

document.addEventListener('DOMContentLoaded', () => {
    mostrarSublimados(catalogoSublimados);
    configurarEventosSublimados();
    sincronizarVistaCarrito();
    actualizarContadoresCategorias();
});

// NUEVA FUNCIÓN PARA ACTUALIZAR LOS CONTADORES DE LOS BOTONES
function actualizarContadoresCategorias() {
    const botones = document.querySelectorAll('.filter-chip');
    
    botones.buttonText = botones.forEach(btn => {
        const cat = btn.getAttribute('data-categoria');
        if (!cat || cat === 'todos') return;

        // Contar cuántos productos tienen esa categoría (soporta texto simple o listas múltiples)
        const total = catalogoSublimados.filter(p => {
            if (Array.isArray(p.categoria)) {
                return p.categoria.includes(cat);
            }
            return p.categoria === cat;
        }).length;

        // Conservar el texto original del botón y agregar el número entre paréntesis
        if (cat === 'nuevo') {
            btn.innerHTML = `Lo Nuevo ✨ (${total})`;
        } else if (cat === 'parejas') {
            btn.innerHTML = `Para Parejas (${total})`;
        } else if (cat === 'playeras') {
            btn.innerHTML = `Playeras (${total})`;
        } else if (cat === 'hoodies') {
            btn.innerHTML = `Hoodies (${total})`;
        } else if (cat === 'polo') {
            btn.innerHTML = `Playeras Polo (${total})`;
        } else if (cat === 'tazas') {
            btn.innerHTML = `Tazas (${total})`;
        } else if (cat === 'totebag') {
            btn.innerHTML = `Tote Bags (${total})`;
        } else if (cat === 'gorras') {
            btn.innerHTML = `Gorras (${total})`;
        }
    });
}

function configurarEventosSublimados() {
    // Botones de categoría
    const botonesFiltro = document.querySelectorAll('.filter-chip');
    botonesFiltro.forEach(btn => {
        btn.addEventListener('click', () => {
            botonesFiltro.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            categoriaActiva = btn.getAttribute('data-categoria');
            filtrarSublimados();
        });
    });

    // Buscador en tiempo real
    const inputBusqueda = document.getElementById('sub-search-input');
    if (inputBusqueda) {
        inputBusqueda.addEventListener('keyup', filtrarSublimados);
    }

    // Cerrar modal de personalización
    const btnCerrarModal = document.getElementById('customizer-close-btn');
    if (btnCerrarModal) {
        btnCerrarModal.addEventListener('click', cerrarPersonalizador);
    }

    // Enviar formulario de personalización
    const formPersonalizador = document.getElementById('customizer-form');
    if (formPersonalizador) {
        formPersonalizador.addEventListener('submit', confirmarAgregarSublimado);
    }

    // Botón de enviar a WhatsApp si se usa el respaldo local
    const whatsBtn = document.getElementById('whatsapp-send-btn');
    if (whatsBtn) {
        whatsBtn.addEventListener('click', () => {
            if (typeof cart === 'undefined' && itemsCarritoSublimados.length > 0) {
                enviarPedidoWhatsAppSublimados();
            }
        });
    }
}

function mostrarSublimados(lista) {
    const grid = document.getElementById('sublimados-grid');
    if (!grid) return;

    if (lista.length === 0) {
        grid.innerHTML = `<p class="sublimados-empty">No se encontraron diseños con esa búsqueda.</p>`;
        return;
    }

    grid.innerHTML = lista.map(item => `
        <article class="sub-card product-card">
            <div class="sub-img-box">
                <img src="${item.img}" alt="${item.nombre}" class="product-img" loading="lazy">
            </div>
            <div class="sub-info">
                <span class="sub-category-tag">${item.etiqueta}</span>
                <h3 class="sub-title">${item.nombre}</h3>
                <p class="sub-price">${typeof item.precio === 'number' ? `$${item.precio} MXN` : item.precio}</p>
                <div class="sub-actions">
                   <button type="button" class="btn-custom-sub btn-add" onclick="window.location.href='producto.html?id=${item.id}'">
                        Personalizar 🎨
                    </button>
                </div>
            </div>
        </article>
    `).join('');
}

function filtrarSublimados() {
    const texto = (document.getElementById('sub-search-input')?.value || '').toLowerCase().trim();
    const filtrados = catalogoSublimados.filter(p => {
        // Comprobar si coincide con la categoría activa (soporta tanto texto simple como listas múltiples)
        let coincideCategoria = false;
        if (categoriaActiva === 'todos') {
            coincideCategoria = true;
        } else if (Array.isArray(p.categoria)) {
            coincideCategoria = p.categoria.includes(categoriaActiva);
        } else {
            coincideCategoria = (p.categoria === categoriaActiva);
        }

        const coincideTexto = p.nombre.toLowerCase().includes(texto) || p.etiqueta.toLowerCase().includes(texto);
        return coincideCategoria && coincideTexto;
    });
    mostrarSublimados(filtrados);
}

function abrirPersonalizador(id) {
    const prod = catalogoSublimados.find(p => p.id === id);
    if (!prod) return;

    productoEnEdicion = prod;
    document.getElementById('cust-img').src = prod.img;
    document.getElementById('cust-cat').textContent = prod.etiqueta;
    document.getElementById('cust-title').textContent = prod.nombre;
    document.getElementById('cust-price').textContent = typeof prod.precio === 'number'
        ? `$${prod.precio} MXN`
        : prod.precio;

    const sizeGroup = document.getElementById('cust-size-group');
    sizeGroup.style.display = prod.usaTalla ? 'block' : 'none';

    const wearerGroup = document.getElementById('cust-wearer-group');
    const wearerInput = document.getElementById('cust-wearer');
    wearerGroup.style.display = prod.esPrenda ? 'block' : 'none';
    wearerInput.required = prod.esPrenda;
    wearerInput.value = '';

    document.getElementById('cust-notes').value = '';
    document.getElementById('cust-qty').value = 1;

    document.getElementById('customizer-modal').classList.add('active');
}

function cerrarPersonalizador() {
    document.getElementById('customizer-modal').classList.remove('active');
    productoEnEdicion = null;
}

function confirmarAgregarSublimado(e) {
    e.preventDefault();
    if (!productoEnEdicion) return;

    const talla = productoEnEdicion.usaTalla ? document.getElementById('cust-size').value : 'Única';
    const paraQuien = productoEnEdicion.esPrenda ? document.getElementById('cust-wearer').value.trim() : '';
    const notas = document.getElementById('cust-notes').value.trim();
    const cantidad = parseInt(document.getElementById('cust-qty').value, 10) || 1;

    const detalleExtra = [
        productoEnEdicion.usaTalla ? `Talla: ${talla}` : null,
        paraQuien ? `Para: ${paraQuien}` : null,
        notas ? `Nota: "${notas}"` : 'Diseño estándar'
    ].filter(Boolean).join(' | ');

    const nombreCompleto = `${productoEnEdicion.nombre} (${detalleExtra})`;

    const nuevoItem = {
        id: `${productoEnEdicion.id}-${talla}-${Date.now()}`,
        name: nombreCompleto,
        title: nombreCompleto,
        price: productoEnEdicion.precio,
        quantity: cantidad,
        image: productoEnEdicion.img,
        size: talla,
        customText: notas
    };

    // Integrar con el carrito global de main.js si está activo
    if (typeof cart !== 'undefined' && Array.isArray(cart)) {
        for (let i = 0; i < cantidad; i++) {
            cart.push({
                id: nuevoItem.id,
                name: nuevoItem.name,
                price: nuevoItem.price,
                image: nuevoItem.image
            });
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        if (typeof updateCartUI === 'function') updateCartUI();
        if (typeof updateCart === 'function') updateCart();
        if (typeof renderCart === 'function') renderCart();
    }

    itemsCarritoSublimados.push(nuevoItem);
    localStorage.setItem('croma_sub_cart', JSON.stringify(itemsCarritoSublimados));

    sincronizarVistaCarrito();
    cerrarPersonalizador();

    if (typeof showToast === 'function') {
        showToast(`✅ ${productoEnEdicion.nombre} agregado al carrito`);
    } else {
        mostrarToastSublimado(`✅ ${productoEnEdicion.nombre} agregado al carrito`);
    }
}

function sincronizarVistaCarrito() {
    const countSpan = document.getElementById('cart-count');
    const itemsContainer = document.getElementById('cart-items');
    const totalSpan = document.getElementById('cart-total-price');

    const totalUnidades = itemsCarritoSublimados.reduce((acc, it) => acc + it.quantity, 0);
    const totalPrecio = itemsCarritoSublimados.reduce((acc, it) => acc + (it.price * it.quantity), 0);

    if (countSpan) countSpan.textContent = totalUnidades;

    if (itemsContainer) {
        itemsContainer.innerHTML = itemsCarritoSublimados.map((it, idx) => `
            <div class="cart-sub-item">
                <img src="${it.image}" alt="${it.name}" class="cart-sub-thumb">
                <div class="cart-sub-details">
                    <p class="cart-sub-name">${it.name}</p>
                    <small class="cart-sub-qty">Cantidad: ${it.quantity} x $${it.price} MXN</small>
                </div>
                <div class="cart-sub-subtotal">$${it.price * it.quantity}</div>
                <button type="button" class="cart-sub-remove" onclick="eliminarItemSublimado(${idx})">&times;</button>
            </div>
        `).join('');
    }

    if (totalSpan) totalSpan.textContent = totalPrecio;
}

function eliminarItemSublimado(index) {
    itemsCarritoSublimados.splice(index, 1);
    localStorage.setItem('croma_sub_cart', JSON.stringify(itemsCarritoSublimados));
    sincronizarVistaCarrito();
}

function mostrarToastSublimado(mensaje) {
    const toast = document.getElementById('toast-notification');
    if (!toast) return;
    toast.textContent = mensaje;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

function enviarPedidoWhatsAppSublimados() {
    let mensaje = "Hola *CROMA Project* 👋, quiero realizar el siguiente pedido de productos sublimados:\n\n";
    let total = 0;
    itemsCarritoSublimados.forEach(it => {
        const subtotal = it.price * it.quantity;
        total += subtotal;
        mensaje += `• *${it.quantity}x* ${it.name} - $${subtotal} MXN\n`;
    });
    mensaje += `\n*Total a pagar: $${total} MXN*`;
    const url = `https://wa.me/523221395546?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}