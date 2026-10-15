/**
 * CROMA PROJECT - HALLOWEEN EXPERIENCE JS ("Intermedio Místico")
 * Agrega efectos visuales suaves (murciélagos sutiles, partículas mágicas de vela,
 * telarañas y un botón para alternar entre el Modo Spooky y el Modo Clásico).
 */

document.addEventListener('DOMContentLoaded', () => {
    initHalloweenFeatures();
});

function initHalloweenFeatures() {
    // 1. Inyectar telarañas vectoriales si no están en el DOM
    if (!document.querySelector('.spooky-web-top-left')) {
        const webLeft = document.createElement('div');
        webLeft.className = 'spooky-web-top-left';
        document.body.appendChild(webLeft);

        const webRight = document.createElement('div');
        webRight.className = 'spooky-web-top-right';
        document.body.appendChild(webRight);
    }

    // 2. Inicializar Canvas de partículas místicas (murciélagos y chispas de vela)
    initSpookyCanvas();

    // 3. Crear el botón interactivo de Alternar Modo Spooky / Clásico
    createSpookyToggle();

    // 4. Mejorar el placeholder del buscador si existe
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.placeholder = "Buscar hechizos...";
    }
}

/**
 * Sistema ligero de partículas en Canvas: Chispas de vela y pequeños murciélagos
 */
function initSpookyCanvas() {
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
    const particleCount = window.innerWidth < 768 ? 16 : 28;

    // Crear partículas híbridas: chispas y murciélagos en silueta
    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 3 + 1.5,
            speedX: (Math.random() - 0.5) * 0.8,
            speedY: -Math.random() * 0.7 - 0.2, // suben suavemente como humo/fuego
            opacity: Math.random() * 0.6 + 0.2,
            type: Math.random() > 0.82 ? 'bat' : 'ember', // 18% murciélagos, 82% chispas
            wingSpan: Math.random() * 9 + 8,
            wingAngle: 0
        });
    }

    let animationFrameId;

    function drawBat(ctx, x, y, size, angle) {
        ctx.save();
        ctx.translate(x, y);
        ctx.fillStyle = '#4A1320';
        ctx.beginPath();
        // Silueta simple y estilizada de murciélago con alas batiendo
        const wingY = Math.sin(angle) * 4;
        ctx.moveTo(0, 0);
        ctx.quadraticCurveTo(-size, -wingY, -size * 1.6, -wingY * 0.5);
        ctx.quadraticCurveTo(-size * 0.8, 4, 0, 2);
        ctx.quadraticCurveTo(size * 0.8, 4, size * 1.6, -wingY * 0.5);
        ctx.quadraticCurveTo(size, -wingY, 0, 0);
        ctx.fill();
        ctx.restore();
    }

    function animate() {
        if (document.body.classList.contains('spooky-off')) {
            ctx.clearRect(0, 0, width, height);
            animationFrameId = requestAnimationFrame(animate);
            return;
        }

        ctx.clearRect(0, 0, width, height);

        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;

            // Reciclar si sale de la pantalla
            if (p.y < -20) {
                p.y = height + 10;
                p.x = Math.random() * width;
            }
            if (p.x < -20) p.x = width + 10;
            if (p.x > width + 20) p.x = -10;

            if (p.type === 'bat') {
                p.wingAngle += 0.12;
                p.speedX = Math.sin(p.wingAngle * 0.5) * 1.2;
                drawBat(ctx, p.x, p.y, p.wingSpan, p.wingAngle);
            } else {
                // Chispa mágica ámbar/calabaza
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 138, 61, ${p.opacity})`;
                ctx.shadowBlur = 8;
                ctx.shadowColor = 'rgba(255, 117, 24, 0.8)';
                ctx.fill();
                ctx.shadowBlur = 0; // reset
            }
        });

        animationFrameId = requestAnimationFrame(animate);
    }

    animate();
}

/**
 * Botón interactivo flotante para encender/apagar la magia de Halloween
 */
function createSpookyToggle() {
    if (document.getElementById('spooky-toggle')) return;

    const savedState = localStorage.getItem('croma_spooky_mode');
    if (savedState === 'off') {
        document.body.classList.add('spooky-off');
    }

    const toggleBtn = document.createElement('button');
    toggleBtn.id = 'spooky-toggle';
    toggleBtn.className = 'spooky-toggle-btn';
    toggleBtn.setAttribute('title', 'Alternar modo temático de Halloween');
    
    updateToggleButtonContent(toggleBtn, savedState !== 'off');

    toggleBtn.addEventListener('click', () => {
        const isCurrentlyOff = document.body.classList.contains('spooky-off');
        if (isCurrentlyOff) {
            document.body.classList.remove('spooky-off');
            localStorage.setItem('croma_spooky_mode', 'on');
            updateToggleButtonContent(toggleBtn, true);
            if (typeof showToast === 'function') {
                showToast("🎃 ¡Modo Halloween Activado!");
            }
        } else {
            document.body.classList.add('spooky-off');
            localStorage.setItem('croma_spooky_mode', 'off');
            updateToggleButtonContent(toggleBtn, false);
            if (typeof showToast === 'function') {
                showToast("🍷 Regresaste al Modo Clásico");
            }
        }
    });

    document.body.appendChild(toggleBtn);
}

function updateToggleButtonContent(button, isSpookyActive) {
    if (isSpookyActive) {
        button.innerHTML = `<span class="toggle-icon">🎃</span> Modo Spooky: <strong>ON</strong>`;
    } else {
        button.innerHTML = `<span class="toggle-icon">🍷</span> Modo Clásico: <strong>ON</strong>`;
    }
}

