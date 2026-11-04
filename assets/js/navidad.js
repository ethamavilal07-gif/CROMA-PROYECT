/**
 * CROMA PROJECT - CHRISTMAS EXPERIENCE JS ("Gothic Wine Holiday")
 * Agrega efectos visuales navideños: caída de nieve suave y partículas doradas,
 * guirnaldas de esquina, trineo de Santa Claus volando y botón de encendido/apagado.
 */

document.addEventListener('DOMContentLoaded', () => {
    initChristmasFeatures();
});

function initChristmasFeatures() {
    // 1. Inyectar guirnaldas en las esquinas si no existen
    if (!document.querySelector('.spooky-web-top-left')) {
        const branchLeft = document.createElement('div');
        branchLeft.className = 'spooky-web-top-left';
        document.body.appendChild(branchLeft);

        const branchRight = document.createElement('div');
        branchRight.className = 'spooky-web-top-right';
        document.body.appendChild(branchRight);
    }

    // 2. Inyectar a Santa Claus en su trineo (mediante etiqueta <img> directa)
    if (!document.querySelector('.santa-flyer')) {
        const santaContainer = document.createElement('div');
        santaContainer.className = 'santa-flyer';
        santaContainer.setAttribute('aria-hidden', 'true');

        const santaImg = document.createElement('img');
        // Ruta absoluta desde la raíz de tu proyecto para evitar fallos de rutas relativas:
        santaImg.src = 'assets/img/santa-trineo.png'; 
        santaImg.alt = 'Santa Claus';
        santaImg.style.width = '100%';
        santaImg.style.height = 'auto';
        santaImg.style.display = 'block';

        santaContainer.appendChild(santaImg);
        document.body.appendChild(santaContainer);
    }

    // 3. Inicializar Canvas de copos de nieve y chispas doradas
    initSnowCanvas();

    // 4. Crear o enlazar el botón interactivo de Alternar Modo Navidad / Clásico
    createChristmasToggle();

    // 5. Ajustar placeholder del buscador si está presente en la vista
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = "Buscar regalos navideños...";
    }
}

/**
 * Sistema ligero de partículas en Canvas: Caída suave de copos de nieve y chispas doradas
 */
function initSnowCanvas() {
    let canvas = document.getElementById('spooky-particles-canvas');
    if (!canvas) {
        canvas = document.createElement('canvas');
        canvas.id = 'spooky-particles-canvas';
        document.body.appendChild(canvas);
    }

    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    });

    const particles = [];
    const particleCount = window.innerWidth < 768 ? 25 : 55;

    for (let i = 0; i < particleCount; i++) {
        const isSnowflake = Math.random() > 0.25; // 75% nieve, 25% chispas doradas
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            radius: isSnowflake ? Math.random() * 3 + 1 : Math.random() * 2 + 1,
            speedY: isSnowflake ? Math.random() * 1.2 + 0.6 : Math.random() * 0.8 + 0.3,
            speedX: Math.random() * 0.6 - 0.3,
            swingAngle: Math.random() * Math.PI * 2,
            swingSpeed: Math.random() * 0.02 + 0.01,
            opacity: Math.random() * 0.7 + 0.3,
            type: isSnowflake ? 'snow' : 'sparkle'
        });
    }

    function animate() {
        if (document.body.classList.contains('spooky-off')) {
            ctx.clearRect(0, 0, width, height);
            requestAnimationFrame(animate);
            return;
        }

        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.swingAngle += p.swingSpeed;
            p.y += p.speedY;
            p.x += Math.sin(p.swingAngle) * 0.7 + p.speedX;

            // Reiniciar partícula al salir por la parte inferior o laterales
            if (p.y > height + 10) {
                p.y = -10;
                p.x = Math.random() * width;
            }
            if (p.x < -10) p.x = width + 10;
            if (p.x > width + 10) p.x = -10;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);

            if (p.type === 'snow') {
                ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
                ctx.shadowBlur = 4;
                ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
            } else {
    ctx.fillStyle = `rgba(168, 224, 255, ${p.opacity})`;
    ctx.shadowBlur = 8;
    ctx.shadowColor = 'rgba(120, 205, 255, 0.95)';
}

            ctx.fill();
            ctx.shadowBlur = 0; // Reset
        });

        requestAnimationFrame(animate);
    }

    animate();
}

/**
 * Botón interactivo flotante para encender/apagar el modo Navidad
 */
function createChristmasToggle() {
    if (document.getElementById('spooky-toggle')) return;

    const savedState = localStorage.getItem('croma_xmas_mode');
    if (savedState === 'off') {
        document.body.classList.add('spooky-off');
    }

    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'spooky-toggle';
    toggleBtn.className = 'spooky-toggle-btn';
    toggleBtn.setAttribute('title', 'Alternar modo temático de Navidad');

    updateToggleButtonContent(toggleBtn, savedState !== 'off');

    toggleBtn.addEventListener('click', () => {
        const isCurrentlyOff = document.body.classList.contains('spooky-off');
        if (isCurrentlyOff) {
            document.body.classList.remove('spooky-off');
            localStorage.setItem('croma_xmas_mode', 'on');
            updateToggleButtonContent(toggleBtn, true);
            if (typeof showToast === 'function') {
                showToast("🎄 ¡Modo Navidad Activado!");
            }
        } else {
            document.body.classList.add('spooky-off');
            localStorage.setItem('croma_xmas_mode', 'off');
            updateToggleButtonContent(toggleBtn, false);
            if (typeof showToast === 'function') {
                showToast("🍷 Regresaste al Modo Clásico");
            }
        }
    });

    document.body.appendChild(toggleBtn);
}

function updateToggleButtonContent(button, isXmasActive) {
    if (isXmasActive) {
        button.innerHTML = `<span class="toggle-icon">🎄</span> Modo Navidad: <strong>ON</strong>`;
    } else {
        button.innerHTML = `<span class="toggle-icon">🍷</span> Modo Clásico: <strong>ON</strong>`;
    }
}