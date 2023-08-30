// Puedes utilizar JavaScript para agregar funcionalidades adicionales si es necesario

// Abre el teclado numérico al hacer clic en el número de teléfono
const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
phoneLinks.forEach((link) => {
    link.addEventListener("click", () => {
        link.blur(); // Para quitar el enfoque después del clic
    });
});

// Abre la aplicación de correo al hacer clic en el correo electrónico
const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
emailLinks.forEach((link) => {
    link.addEventListener("click", () => {
        link.blur(); // Para quitar el enfoque después del clic
    });
});
