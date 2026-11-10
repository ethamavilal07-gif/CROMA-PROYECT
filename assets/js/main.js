// BASE DE DATOS DE PRODUCTOS CON MUESTRAS DEDICADAS
const products = [
    {
        id: 1,
        name: "Playera Básico Personalizada",
        price: 180,
        image: "assets/img/playera.png",
        description: "Playera cómoda y versátil, perfecta para llevar el diseño que tú quieras. Puedes enviarnos tu imagen, ilustración o idea y nosotros nos encargamos de personalizarla para crear una prenda única y a tu estilo.",
        sizes: ["CH", "M", "G", "XG", "2XG"],
        colors: ["Negro", "Blanco", "Azul Marino", "Gris"],
        gallery: [
            "assets/img/playeras/playera1.png",
            "assets/img/playeras/playera2.png",
            "assets/img/playeras/playera3.png",
            "assets/img/playeras/playera4.png",
            "assets/img/playeras/playera5.png",
            "assets/img/playeras/playera6.png",
            "assets/img/playeras/playera7.png",
            "assets/img/playeras/playera8.png",
            "assets/img/playeras/playera9.png",
            "assets/img/playeras/playera10.png",
            "assets/img/playeras/playera11.png",
            "assets/img/playeras/playera12.png"
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
            "assets/img/hoodies/hoodie7.png",
            "assets/img/hoodies/hoodie8.png",
            "assets/img/hoodies/hoodie9.png",
            "assets/img/hoodies/hoodie10.png",
            "assets/img/hoodies/hoodie11.png"
            
        ]
    },
    {
        id: 3,
        name: "Taza Personalizada",
        price: 80,
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
            "assets/img/tazas/taza6.png",
            "assets/img/tazas/taza7.png",
            "assets/img/tazas/taza8.png",
            "assets/img/tazas/taza9.png",
            "assets/img/tazas/taza10.png",
            "assets/img/tazas/taza11.png"
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
            "assets/img/gorras/gorra3.png",
            "assets/img/gorras/gorra4.png"
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
            "assets/img/totebags/totebag4.png",
            "assets/img/totebags/totebag5.png",
            "assets/img/totebags/totebag6.png",
            "assets/img/totebags/totebag7.png",
            "assets/img/totebags/totebag8.png",
            "assets/img/totebags/totebag9.png"
        ]
    },
    {
        id: 6,
        name: "Playera De Poliéster Personalizada",
        price: 300,
        image: "assets/img/polo.png",
        description: "Playera ligera, cómoda y resistente, ideal para personalizar con diseños únicos. Su tela de poliéster permite una buena impresión de colores y detalles, además de ser una opción práctica para el uso diario, eventos, equipos o uniformes.",
        sizes: ["CH", "M", "G", "XG", "2XG"],
        colors: ["Negro, Gris, Blanco, Rojo, Marino, Royal"],
        gallery: [
            "assets/img/polo/playera1.png",
            "assets/img/polo/playera2.png",
            "assets/img/polo/playera3.png",
            "assets/img/polo/playera4.png",
            "assets/img/polo/playera5.png",
            "assets/img/polo/playera6.png",
            "assets/img/polo/playera7.png",
            "assets/img/polo/playera8.png",
            "assets/img/polo/playera9.png"

            
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

// MAPA DE COLORES ESPECÍFICOS SEGÚN PRODUCTO Y GÉNERO
const colorMap = {
    // Playera Tipo Polo
    polo: {
        Caballero: ["Negro", "Gris", "Blanco", "Rojo", "Marino", "Royal"],
        Dama: ["Negro", "Gris", "Blanco", "Rojo", "Marino", "Royal"],
        Hombre: ["Negro", "Gris", "Blanco", "Rojo", "Marino", "Royal"],
        Mujer: ["Negro", "Gris", "Blanco", "Rojo", "Marino", "Royal"]
    },
    // Playera Básico
    basica: {
        Hombre: ["Negro", "Negro Jaspe", "Gris", "Blanco", "Rojo", "Jade", "Marino", "Royal", "Amarillo Neón"],
        Caballero: ["Negro", "Negro Jaspe", "Gris", "Blanco", "Rojo", "Jade", "Marino", "Royal", "Amarillo Neón"],
        Mujer: ["Negro", "Negro Jaspe", "Gris", "Blanco", "Rojo", "Jade", "Marino", "Royal", "Amarillo Neón", "Verde Neón", "Naranja Neón"],
        Dama: ["Negro", "Negro Jaspe", "Gris", "Blanco", "Rojo", "Jade", "Marino", "Royal", "Amarillo Neón", "Verde Neón", "Naranja Neón"]
    },
    // Hoodie
    hoodie: {
        Unisex: ["Negro", "Negro Jaspe", "Gris Jaspe", "Blanco", "Arena", "Marrón", "Rojo", "Verde Bosque", "Marino", "Royal", "Rosa Pastel", "Lavanda"],
        Infantil: ["Negro", "Negro Jaspe", "Gris Jaspe", "Blanco", "Rojo", "Marino", "Royal"]
    }
};

// 3. DETALLE DE PRODUCTO Y CARRUSEL PERSONALIZADO (producto.html)
function renderProductDetailPage() {
    const titleEl = document.getElementById('detail-title');
    if (!titleEl) return; 

    const urlParams = new URLSearchParams(window.location.search);
    const rawId = urlParams.get('id') || '1';
    
    let product;
    let esSublimado = false;
    let categoriaSublimado = '';

    // Detectar si es un producto del catálogo de sublimados (empieza con "sub-")
    if (typeof rawId === 'string' && rawId.startsWith('sub-')) {
        esSublimado = true;
        
        const partes = rawId.split('-');
        const cat = partes[1]; // ej. 'parejas', 'playera', 'hoodie', etc.
        const num = partes[2] || partes[partes.length - 1]; // el número del diseño

        let pName = "Producto Sublimado";
        let pPrice = 180;
        let pSizes = ["CH", "M", "G", "XG", "2XG"];
        let imgUrl = `./assets/img/playeras/playera${num}.png`;

        // Asignar nombre, precio y ruta exacta según la categoría del ID
        if (cat === 'parejas' || cat === 'pareja') {
            pName = `Playera para parejas Diseño ${num}`;
            pPrice = 180;
            imgUrl = `./assets/img/playeras/parejas/ppromo${num}.png`;
        } else if (cat === 'playera' || cat === 'nuevo') {
            pName = `Playera Sublimada Diseño #${num}`;
            pPrice = 180;
            imgUrl = `./assets/img/playeras/playera${num}.png`;
        } else if (cat === 'hoodie') {
            pName = `Hoodie Sublimada Diseño #${num}`;
            pPrice = 450;
            pSizes = ["CH", "M", "G", "XG"];
            imgUrl = `./assets/img/hoodies/hoodie${num}.png`;
        } else if (cat === 'polo') {
            pName = `Playera Polo Sublimada #${num}`;
            pPrice = 220;
            imgUrl = `./assets/img/polo/playera${num}.png`;
        } else if (cat === 'taza') {
            pName = `Taza Sublimada Diseño #${num}`;
            pPrice = 80;
            pSizes = ["Única (11 oz)"];
            imgUrl = `./assets/img/tazas/taza${num}.png`;
        } else if (cat === 'totebag') {
            pName = `Tote Bag Sublimada #${num}`;
            pPrice = 120;
            pSizes = ["Estándar"];
            imgUrl = `./assets/img/totebags/totebag${num}.png`;
        } else if (cat === 'gorra') {
            pName = `Gorra Sublimada #${num}`;
            pPrice = 150;
            pSizes = ["Ajustable"];
            imgUrl = `./assets/img/gorras/gorra${num}.png`;
        }

        product = {
            id: rawId,
            name: pName,
            price: pPrice,
            image: imgUrl,
            gallery: [imgUrl],
            sizes: pSizes,
            colors: ["Por Diseño"]
        };
    } else {
        // Si es un producto del catálogo general normal (IDs numéricos: 1, 2, 3...)
        const productId = parseInt(rawId) || 1;
        product = products.find(p => p.id === productId) || products[0];
    }

    // Cargar información inicial
    document.getElementById('detail-img').src = product.image;
    document.getElementById('detail-img').alt = product.name;
    titleEl.innerText = product.name;
    
    let currentPrice = product.price;
    const priceMobile = document.getElementById('detail-price-mobile');
    const priceCard = document.getElementById('detail-price-card');

    function updatePriceDisplay(newPrice) {
        currentPrice = newPrice;
        if (priceMobile) priceMobile.innerText = `$${newPrice} MXN`;
        if (priceCard) priceCard.innerText = `$${newPrice} MXN`;
    }

    updatePriceDisplay(product.price);

    // Elementos del DOM
    const sizeSelect = document.getElementById('detail-size');
    const colorSelect = document.getElementById('detail-color');
    const grupoGenero = document.getElementById('grupo-corte-genero');
    const elGenero = document.getElementById('corte-genero');
    const grupoTipoPlayera = document.getElementById('grupo-tipo-playera');
    const elTipoPlayera = document.getElementById('tipo-playera');

    // Identificar productos para mostrar menús
    // Aseguramos que la categoría se lea correctamente desde el ID del producto
    if (esSublimado && typeof rawId === 'string') {
        categoriaSublimado = rawId.split('-')[1] || '';
    }

    const esPoliesterPolo = product.id === 6 || product.name.toLowerCase().includes("poliéster") || categoriaSublimado === 'polo';
    
    // Hacemos que reconozca como "básica" tanto al ID 1 como a cualquier playera o diseño de parejas del catálogo nuevo
    const esBasica = product.id === 1 || product.name.toLowerCase().includes("básico") || categoriaSublimado === 'playera' || categoriaSublimado === 'parejas' || categoriaSublimado === 'pareja' || categoriaSublimado === 'nuevo';
    
    const esHoodie = product.id === 2 || product.name.toLowerCase().includes("hoodie") || categoriaSublimado === 'hoodie';
    
    // Identificar si es Accesorio (Productos sin talla ni color configurable)
    const esAccesorios = product.id === 3 || product.id === 4 || product.id === 5 || ['taza', 'gorra', 'totebag'].includes(categoriaSublimado);
    const requiereGenero = esPoliesterPolo || esBasica || esHoodie;
    const requiereTipoPlayera = esPoliesterPolo || esBasica; 

    // Ocultar TOTALMENTE Talla y Color si es accesorio
    if (sizeSelect && sizeSelect.parentElement) {
        sizeSelect.parentElement.style.display = esAccesorios ? 'none' : 'block';
    }
    if (colorSelect && colorSelect.parentElement) {
        if (esSublimado || esAccesorios) {
            colorSelect.parentElement.style.display = 'none';
        } else {
            colorSelect.parentElement.style.display = 'block';
        }
    }

    // 1. Mostrar/Ocultar "¿Para quién es la prenda?"
    if (grupoGenero && elGenero) {
        if (requiereGenero) {
            grupoGenero.style.display = 'block';
            if (esHoodie) {
                elGenero.innerHTML = `<option value="">Selecciona una opción</option><option value="Unisex">Unisex (Adulto)</option><option value="Infantil">Infantil (Niño / Niña)</option>`;
            } else {
                elGenero.innerHTML = `<option value="">Selecciona una opción</option><option value="Hombre">Hombre (Caballero)</option><option value="Mujer">Mujer (Dama)</option>`;
            }
        } else {
            grupoGenero.style.display = 'none';
        }
    }

    // 2. Mostrar/Ocultar "Selecciona el tipo de playera"
    if (grupoTipoPlayera) {
        if (requiereTipoPlayera) {
            grupoTipoPlayera.style.display = 'block';
        } else {
            grupoTipoPlayera.style.display = 'none';
        }
    }

    function loadSizes() {
        if (!sizeSelect) return;
        let sizeList = Array.isArray(product.sizes) ? product.sizes : [product.sizes];
        sizeSelect.innerHTML = sizeList.map(s => `<option value="${s}">${s}</option>`).join('');
    }

    function updateFormState() {
        const selectedGen = elGenero ? elGenero.value : '';

        if (requiereGenero && !selectedGen) {
            if (elTipoPlayera) {
                elTipoPlayera.disabled = true;
                elTipoPlayera.innerHTML = `<option value="">Primero selecciona para quién es la prenda</option>`;
            }
            if (sizeSelect && !esAccesorios) {
                sizeSelect.disabled = true;
                sizeSelect.innerHTML = `<option value="">Primero selecciona para quién es la prenda</option>`;
            }
            if (colorSelect && !esSublimado && !esAccesorios) {
                colorSelect.disabled = true;
                colorSelect.innerHTML = `<option value="">Primero selecciona para quién es la prenda</option>`;
            }
            
            if (esPoliesterPolo) updatePriceDisplay(product.price);
            if (esBasica && !esSublimado) document.getElementById('detail-img').src = product.image;
            
        } else {
            if (elTipoPlayera && requiereTipoPlayera) {
                if (elTipoPlayera.disabled) {
                    elTipoPlayera.disabled = false;
                    if (esPoliesterPolo) {
                        elTipoPlayera.innerHTML = `<option value="">Selecciona una opción</option><option value="Playera Básica">Playera Básica</option><option value="Playera Tipo Polo">Playera Tipo Polo</option>`;
                    } else if (esBasica) {
                        elTipoPlayera.innerHTML = `<option value="" disabled selected>Selecciona una opción</option><option value="Normal (Cuello Redondo)">Normal (Cuello Redondo)</option><option value="Tipo Polo">Tipo Polo</option>`;
                    }
                }
            }

            if (sizeSelect && sizeSelect.disabled && !esAccesorios) {
                sizeSelect.disabled = false;
                loadSizes();
            }

            if (colorSelect && !esSublimado && !esAccesorios) {
                colorSelect.disabled = false;
                let availableColors = [];
                if (esPoliesterPolo && colorMap.polo && colorMap.polo[selectedGen]) availableColors = colorMap.polo[selectedGen];
                else if (esBasica && colorMap.basica && colorMap.basica[selectedGen]) availableColors = colorMap.basica[selectedGen];
                else if (esHoodie && colorMap.hoodie && colorMap.hoodie[selectedGen]) availableColors = colorMap.hoodie[selectedGen];
                else availableColors = Array.isArray(product.colors) ? product.colors : ["Estándar"];
                colorSelect.innerHTML = availableColors.map(c => `<option value="${c}">${c}</option>`).join('');
            }
        }
    }

    updateFormState();
    if (elGenero) elGenero.onchange = () => updateFormState();

    if (elTipoPlayera) {
        elTipoPlayera.onchange = () => {
            const val = elTipoPlayera.value;
            if (esPoliesterPolo) {
                if (val === "Playera Básica") updatePriceDisplay(200);
                else if (val === "Playera Tipo Polo" || val === "Tipo Polo") updatePriceDisplay(300);
                else updatePriceDisplay(product.price);
            }
            if (esBasica && !esSublimado) {
                if (val === "Tipo Polo") document.getElementById('detail-img').src = './assets/img/polo/playera10.png';
                else document.getElementById('detail-img').src = product.image; 
            }
        };
    }

    initializeGalleryCarousel();

    // Botón Agregar al Carrito
    const addBtn = document.getElementById('add-to-cart-detail-btn');
    if (addBtn) {
        const newAddBtn = addBtn.cloneNode(true);
        addBtn.parentNode.replaceChild(newAddBtn, addBtn);
        newAddBtn.addEventListener('click', () => {
            let generoSeleccionado = '';
            if (elGenero && requiereGenero) {
                generoSeleccionado = elGenero.value;
                if (!generoSeleccionado) return showToast("⚠️ Por favor selecciona para quién es la prenda.");
            }
            let tipoSeleccionado = '';
            if (requiereTipoPlayera && elTipoPlayera) {
                tipoSeleccionado = elTipoPlayera.value;
                if (!tipoSeleccionado || elTipoPlayera.disabled) return showToast("⚠️ Por favor selecciona el tipo de playera.");
            }
            
            const selectedSize = esAccesorios ? product.sizes[0] : (sizeSelect ? sizeSelect.value : 'Única');
            const selectedColor = (esSublimado || esAccesorios) ? 'Predeterminado' : (colorSelect ? colorSelect.value : 'Estándar');

            if (!esAccesorios && (!selectedSize || sizeSelect.disabled)) return showToast("⚠️ Por favor selecciona la talla.");
            if (!esAccesorios && !esSublimado && !selectedColor) return showToast("⚠️ Por favor selecciona el color.");

            const customInput = document.getElementById('detail-custom');
            const customText = customInput && customInput.value.trim() ? customInput.value.trim() : "Sin detalle especificado";

            cart.push({
                cartId: Date.now(),
                name: product.name + (tipoSeleccionado ? ` (${tipoSeleccionado})` : ''),
                price: currentPrice,
                size: selectedSize,
                color: selectedColor,
                custom: customText,
                ...(generoSeleccionado && { genero: generoSeleccionado }),
                ...(tipoSeleccionado && { tipoPlayera: tipoSeleccionado })
            });
            saveCart();
            showToast(`¡${product.name} agregado al carrito! ✨`);
        });
    }
}

// LÓGICA DEL CARRUSEL AUTOMÁTICO EN LOOP INFINITO (MUESTRAS)
function moveGallerySlide(direction) {
    const track = document.getElementById('gallery-carousel-track');
    if (!track) return;

    const slideCount = track.querySelectorAll('.gallery-carousel-slide:not(.gallery-carousel-clone)').length;
    if (slideCount < 2) return;

    currentGalleryPosition += direction < 0 ? -1 : 1;
    updateGalleryCarouselPosition();
}

function initializeGalleryCarousel() {
    const track = document.getElementById('gallery-carousel-track');
    if (!track) return;

    stopGalleryAutoScroll();
    currentGalleryPosition = 0;
    track.innerHTML = '';

    const images = products.flatMap(product => product.gallery || []);
    for (let index = images.length - 1; index > 0; index--) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [images[index], images[randomIndex]] = [images[randomIndex], images[index]];
    }

    images.slice(0, 15).forEach(imageUrl => {
        const item = document.createElement('div');
        item.className = 'gallery-carousel-slide';
        item.style = "min-width: 180px; height: 180px; background: #fff; border-radius: 8px; border: 1px solid #eee; padding: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;";

        const image = document.createElement('img');
        image.src = imageUrl;
        image.alt = 'Muestra de trabajo';
        image.style = 'max-width: 100%; max-height: 100%; object-fit: contain;';
        item.appendChild(image);
        track.appendChild(item);
    });

    const originalSlides = Array.from(track.querySelectorAll('.gallery-carousel-slide'));
    if (originalSlides.length > 1) {
        const firstClone = originalSlides[0].cloneNode(true);
        const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
        firstClone.classList.add('gallery-carousel-clone');
        lastClone.classList.add('gallery-carousel-clone');
        track.appendChild(firstClone);
        track.insertBefore(lastClone, track.firstChild);
        currentGalleryPosition = 1;
    }

    track.ontransitionend = (event) => {
        if (event.target !== track || event.propertyName !== 'transform') return;

        const slideCount = track.querySelectorAll('.gallery-carousel-slide:not(.gallery-carousel-clone)').length;
        if (currentGalleryPosition === 0) {
            currentGalleryPosition = slideCount;
            updateGalleryCarouselPosition(false);
        } else if (currentGalleryPosition === slideCount + 1) {
            currentGalleryPosition = 1;
            updateGalleryCarouselPosition(false);
        }
    };

    updateGalleryCarouselPosition(false);
    startGalleryAutoScroll();

    const wrapper = document.querySelector('.gallery-carousel-wrapper');
    if (wrapper) {
        wrapper.onmouseenter = stopGalleryAutoScroll;
        wrapper.onmouseleave = startGalleryAutoScroll;
    }

    window.addEventListener('resize', () => updateGalleryCarouselPosition(false));
}

function updateGalleryCarouselPosition(animate = true) {
    const track = document.getElementById('gallery-carousel-track');
    if (!track) return;

    const slides = Array.from(track.querySelectorAll('.gallery-carousel-slide'));
    const activeSlide = slides[currentGalleryPosition];
    const wrapper = track.parentElement;
    if (!activeSlide || !wrapper) return;

    if (!animate) track.style.transition = 'none';
    const slideCenter = activeSlide.offsetLeft + activeSlide.offsetWidth / 2;
    const trackOffset = track.offsetLeft;
    const wrapperCenter = wrapper.clientWidth / 2;
    track.style.transform = `translateX(${wrapperCenter - trackOffset - slideCenter}px)`;

    slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === currentGalleryPosition);
        slide.classList.toggle('is-nearby', Math.abs(index - currentGalleryPosition) === 1);
    });

    if (!animate) {
        track.offsetHeight;
        track.style.transition = '';
    }
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

// LÓGICA DEL CARRUSEL PRINCIPAL (index.html) - CORREGIDO
let heroCurrentSlide = 0;
let heroPhysicalSlide = 1;
let heroTimer = null;

function moveSlide(direction) {
    const track = document.getElementById('carousel-track');
    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide:not(.carousel-slide-clone)');
    if (slides.length < 2) return;

    const nextSlide = heroCurrentSlide + direction;
    const slideCount = slides.length;
    const physicalSlide = nextSlide < 0
        ? 0
        : nextSlide >= slideCount
            ? slideCount + 1
            : nextSlide + 1;

    updateHeroCarousel(
        (nextSlide + slideCount) % slideCount,
        physicalSlide
    );
}

function updateHeroCarousel(index, physicalIndex, animate = true) {
    const track = document.getElementById('carousel-track');
    const container = track ? track.parentElement : null;
    if (!track || !container) return;

    const slides = track.querySelectorAll('.carousel-slide');
    if (slides.length === 0) return;

    heroCurrentSlide = index;
    heroPhysicalSlide = physicalIndex;
    if (!animate) track.style.transition = 'none';

    slides.forEach((slide, index) => {
        slide.classList.toggle('current-slide', index === heroPhysicalSlide);
        slide.classList.toggle('is-nearby', Math.abs(index - heroPhysicalSlide) === 1);
    });

    const activeSlide = slides[heroPhysicalSlide];
    const slideCenter = activeSlide.offsetLeft + activeSlide.offsetWidth / 2;
    const containerCenter = container.clientWidth / 2;
    track.style.transform = `translateX(${containerCenter - slideCenter}px)`;
    if (!animate) {
        track.offsetHeight;
        track.style.transition = '';
    }

    const pagination = document.getElementById('carousel-pagination');
    if (pagination) {
        pagination.querySelectorAll('button').forEach((button, buttonIndex) => {
            const isActive = buttonIndex === heroCurrentSlide;
            button.classList.toggle('is-active', isActive);
            button.setAttribute('aria-current', isActive ? 'true' : 'false');
        });
    }
}

function setHeroSlide(index, animate = true) {
    const track = document.getElementById('carousel-track');
    if (!track) return;

    const slides = track.querySelectorAll('.carousel-slide:not(.carousel-slide-clone)');
    if (slides.length === 0) return;

    const slideIndex = (index + slides.length) % slides.length;
    const physicalIndex = track.querySelector('.carousel-slide-clone') ? slideIndex + 1 : slideIndex;
    updateHeroCarousel(slideIndex, physicalIndex, animate);
}

function startHeroAutoScroll() {
    stopHeroAutoScroll();
    heroTimer = setInterval(() => {
        moveSlide(1);
    }, 4000);
}

function stopHeroAutoScroll() {
    if (heroTimer) {
        clearInterval(heroTimer);
        heroTimer = null;
    }
}

function initHeroCarousel() {
    const track = document.getElementById('carousel-track');
    if (!track) return;

    const originalSlides = Array.from(track.querySelectorAll('.carousel-slide'));
    if (originalSlides.length > 1) {
        const firstClone = originalSlides[0].cloneNode(true);
        const lastClone = originalSlides[originalSlides.length - 1].cloneNode(true);
        firstClone.classList.add('carousel-slide-clone');
        lastClone.classList.add('carousel-slide-clone');
        firstClone.classList.remove('current-slide');
        lastClone.classList.remove('current-slide');
        firstClone.setAttribute('aria-hidden', 'true');
        lastClone.setAttribute('aria-hidden', 'true');
        track.appendChild(firstClone);
        track.insertBefore(lastClone, track.firstChild);
    }

    const slides = track.querySelectorAll('.carousel-slide:not(.carousel-slide-clone)');
    const pagination = document.getElementById('carousel-pagination');

    if (pagination) {
        pagination.innerHTML = '';
        slides.forEach((_, index) => {
            const button = document.createElement('button');
            button.type = 'button';
            button.setAttribute('aria-label', `Mostrar diapositiva ${index + 1}`);
            button.addEventListener('click', () => {
                setHeroSlide(index);
                startHeroAutoScroll();
            });
            pagination.appendChild(button);
        });
    }

    track.addEventListener('transitionend', (event) => {
        if (event.target !== track || event.propertyName !== 'transform') return;

        const slideCount = track.querySelectorAll('.carousel-slide:not(.carousel-slide-clone)').length;
        if (heroPhysicalSlide === 0) {
            updateHeroCarousel(heroCurrentSlide, slideCount, false);
        } else if (heroPhysicalSlide === slideCount + 1) {
            updateHeroCarousel(heroCurrentSlide, 1, false);
        }
    });

    setHeroSlide(0, false);

    // Iniciar auto-scroll
    startHeroAutoScroll();

    // Pausar con el cursor
    const banner = document.querySelector('.banner-carousel');
    if (banner) {
        banner.onmouseenter = stopHeroAutoScroll;
        banner.onmouseleave = startHeroAutoScroll;
    }

    // Ajustar si la ventana cambia de tamaño
    window.addEventListener('resize', () => setHeroSlide(heroCurrentSlide, false));
}
// BÚSQUEDA INTELIGENTE CON SINÓNIMOS Y ERRORES COMUNES
function filterProducts() {
    const input = document.getElementById('search-input');
    if (!input) return;

    const normalize = (text) => {
        return (text || '')
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .replace(/[^a-z0-9\s]/g, "");
    };

    const synonyms = {
        'judi': 'hoodie',
        'hudi': 'hoodie',
        'jodi': 'hoodie',
        'sudadera': 'hoodie',
        'chamarra': 'hoodie',
        'tasa': 'taza',
        'tasas': 'taza',
        'tacas': 'taza',
        'vaso': 'taza',
        'polera': 'playera',
        'remera': 'playera',
        'camiseta': 'playera',
        'polo': 'playera',
        'gorras': 'gorra',
        'cachucha': 'gorra',
        'totebag': 'tote bag',
        'bolsa': 'tote bag',
        'bolso': 'tote bag'
    };

    const queryRaw = input.value.trim();

    if (queryRaw === '') {
        renderHomeProducts(products);
        return;
    }

    const queryClean = normalize(queryRaw);
    const searchTerm = synonyms[queryClean] || queryClean;

    const filtered = products.filter(p => {
        const nameClean = normalize(p.name);
        const descClean = normalize(p.description);

        return nameClean.includes(searchTerm) || descClean.includes(searchTerm);
    });

    renderHomeProducts(filtered);

    const grid = document.getElementById('products-grid') || document.getElementById('home-products-grid');
    if (grid && filtered.length === 0) {
        grid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #666;">
                <p style="font-size: 1.2rem; margin-bottom: 8px;">No encontramos productos para "<strong>${input.value}</strong>"</p>
                <small>Intenta buscar por: Playera, Hoodie, Taza, Gorra o Tote Bag.</small>
            </div>
        `;
    }
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
                ${item.genero ? `<small>Para: <strong>${item.genero}</strong></small><br>` : ''}
                <small>Talla: ${item.size} | Color: ${item.color}</small><br>
                <small><em>${item.custom}</em></small><br>
                <span style="color: #6b1d2f; font-weight: 600;">$${item.price} MXN</span>
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
        let text = "¡Hola CROMA Project! Me interesa realizar el siguiente pedido:\n\n";
        
        cart.forEach((item, index) => {
            text += `${index + 1}. ${item.name}\n`;
            if (item.genero) text += `   • Categoría: ${item.genero}\n`;
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

// MANEJO DESPLEGABLE EN PREGUNTAS FRECUENTES (FAQ)
function initFAQAccordion() {
    const faqQuestions = document.querySelectorAll('.faq-question, .faq-accordion-btn');
    if (faqQuestions.length === 0) return;

    faqQuestions.forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;

            document.querySelectorAll('.faq-item, .faq-accordion-card').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('active');
                }
            });

            faqItem.classList.toggle('active');
        });
    });
}

// INICIALIZACIÓN COMPLETA DE LA APLICACIÓN
document.addEventListener("DOMContentLoaded", () => {
    updateCartUI();
    renderHomeProducts();
    renderFullCatalog();
    renderProductDetailPage();
    initFAQAccordion();
    initHeroCarousel();
});