// Espera a que todo el contenido del DOM estÃ© completamente cargado y parseado
document.addEventListener('DOMContentLoaded', function() {

    // Selecciona todos los enlaces de anclaje que apuntan a secciones dentro de la pÃ¡gina
    // Un enlace de anclaje tiene un href que empieza con '#'
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    // Itera sobre cada enlace de anclaje encontrado
    anchorLinks.forEach(anchor => {
        // AÃ±ade un "escuchador de eventos" para el evento 'click' en cada enlace
        anchor.addEventListener('click', function (event) {
            // Previene el comportamiento por defecto del navegador al hacer clic en un anclaje
            // (que es saltar directamente a la secciÃ³n)
            event.preventDefault();

            // Obtiene el valor del atributo 'href' del enlace en el que se hizo clic
            // Por ejemplo, si href="#proyectos", targetId serÃ¡ "#proyectos"
            const targetId = this.getAttribute('href');

            // Selecciona el elemento del DOM que tiene el ID correspondiente al targetId
            // Por ejemplo, document.querySelector("#proyectos") seleccionarÃ¡ <section id="proyectos">
            const targetElement = document.querySelector(targetId);

            // Verifica si el elemento objetivo realmente existe en la pÃ¡gina
            if (targetElement) {
                // Calcula la posiciÃ³n a la que queremos desplazarnos.
                // targetElement.offsetTop es la distancia desde la parte superior del documento
                // hasta el inicio del elemento objetivo.
                // Le restamos 56 pÃ­xeles (que es la altura aproximada de nuestra barra de navegaciÃ³n fija)
                // para que la secciÃ³n no quede oculta debajo de la barra al desplazarse.
                const offsetTop = targetElement.offsetTop - 56;

                // Realiza el desplazamiento suave de la ventana del navegador
                window.scrollTo({
                    top: offsetTop,   // La posiciÃ³n vertical a la que desplazarse
                    behavior: 'smooth' // Â¡Esta es la clave para el efecto de desplazamiento suave!
                });
            }
        });
    });

});