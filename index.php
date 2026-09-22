<?php include_once 'includes/header.php'; ?>

<!-- SECCIÓN NOSOTROS -->
<section class="hero" id="nosotros">
    <div class="hero-text">
        <h2>Expresa tu estilo e identidad</h2>
        <p>Ofrecemos productos personalizados y creativos que permiten a nuestros clientes llevar su personalidad a donde quieran.</p>
    </div>
</section>

<!-- SECCIÓN CATÁLOGO DE PRODUCTOS -->
<section class="catalog" id="catalogo">
    <h2>Nuestros Productos</h2>
    <div class="products-grid" id="products-grid">
        <!-- Los productos se cargarán dinámicamente con JavaScript -->
    </div>
</section>

<!-- MODAL DEL CARRITO -->
<div id="cart-modal" class="modal">
    <div class="modal-content">
        <span class="close-btn">&times;</span>
        <h2>Tu Carrito de Compras</h2>
        <div id="cart-items">
            <!-- Productos agregados -->
        </div>
        <div class="cart-total">
            <h3>Total: $<span id="cart-total-price">0</span> MXN</h3>
        </div>
        <button id="whatsapp-send-btn" class="btn-whatsapp">
            Enviar Pedido por WhatsApp 📲
        </button>
    </div>
</div>

<?php include_once 'includes/footer.php'; ?>