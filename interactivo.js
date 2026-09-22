// El escudo protector: Espera a que la página y todas las librerías carguen por completo
window.addEventListener("load", () => {
    
    // 1. Hace que el cuerpo de la página aparezca con un desvanecimiento suave
    document.body.classList.add("fade-in");

    // 2. Inicializar la librería externa de movimientos en scroll (AOS) de forma segura
    if (typeof AOS !== "undefined") {
        AOS.init({ 
            once: false, 
            mirror: true 
        });
    } else {
        console.log("AOS no está listo aún, se omiten temporalmente las animaciones en scroll.");
    }

    // 3. Lógica operativa del menú de tres puntos verticales
    const menuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');

    if (menuBtn && navLinks) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active'); // Transforma los 3 puntos en una X
            navLinks.classList.toggle('open');  // Despliega la cortina lateral verde
        });
    }

    // 4. Sistema automático de transición fluida al cambiar de página independiente
    const linksNavegacion = document.querySelectorAll("nav a, .logo-container");
    
    linksNavegacion.forEach(link => {
        link.addEventListener("click", (evento) => {
            const destinoUrl = link.getAttribute("href");

            // Verifica que el enlace sea válido para saltar a otra página externa
            if (destinoUrl && destinoUrl !== "#" && !destinoUrl.startsWith("#")) {
                evento.preventDefault(); // Detiene el salto brusco instantáneo
                
                // Cierra la cortina lateral antes de irse si el usuario la tenía abierta
                if (menuBtn) menuBtn.classList.remove('active');
                if (navLinks) navLinks.classList.remove('open');
                
                // Desvanece la pantalla actual hacia el color verde
                document.body.classList.remove("fade-in");
                
                // Salta a la siguiente página tras 400ms exactos de desvanecimiento
                setTimeout(() => {
                    window.location.href = destinoUrl;
                }, 400);
            }
        });
    });
});
