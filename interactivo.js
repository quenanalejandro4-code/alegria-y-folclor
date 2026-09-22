document.addEventListener("DOMContentLoaded", () => {
    // 1. Hace que la página aparezca con suavidad al cargar
    setTimeout(() => {
        document.body.classList.add("fade-in");
    }, 50);

    // 2. Inicializar Animaciones en Scroll AOS (Librería de movimiento)
    AOS.init({ 
        once: false, 
        mirror: true 
    });

    // 3. Lógica del menú desplegable móvil (Hamburguesa)
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            navLinks.classList.toggle('open');
        });
    }

    // 4. SISTEMA DE TRANSICIÓN SUAVE AL CAMBIAR DE PÁGINA
    const linksNavegacion = document.querySelectorAll("nav a, .logo-container");
    
    linksNavegacion.forEach(link => {
        link.addEventListener("click", (evento) => {
            const destinoUrl = link.getAttribute("href");

            // Solo aplica la transición si es un enlace válido y no una almohadilla limpia
            if (destinoUrl && destinoUrl !== "#" && !destinoUrl.startsWith("#")) {
                evento.preventDefault(); // Detiene el salto inmediato brusco
                
                // Desvanece la página actual
                document.body.classList.remove("fade-in");
                
                // Espera a que termine la animación de desvanecimiento (500ms) y salta a la otra página
                setTimeout(() => {
                    window.location.href = destinoUrl;
                }, 500);
            }
        });
    });
});
