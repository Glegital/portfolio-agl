document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.querySelector('.toggle_btn');
    const toggleBtnIcon = document.querySelector('.toggle_btn i');
    const dropDownMenu = document.querySelector('.dropdown_menu');

    // Event listener para cerrar el menú cuando se hace clic en un enlace
    dropDownMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            dropDownMenu.classList.remove('open');
            toggleBtnIcon.classList = 'fa-solid fa-bars'; // Restablecer el icono del botón
        });
    });

    // Desactivar el menú por defecto
    dropDownMenu.classList.remove('open');

    toggleBtn.onclick = function () {
        // Alternar la clase 'open' para activar/desactivar el menú
        dropDownMenu.classList.toggle('open');

        // Actualizar el icono del botón según el estado del menú
        const isOpen = dropDownMenu.classList.contains('open');
        toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }

    // Mostrar el menú después de que la página esté completamente cargada
    dropDownMenu.style.display = 'block';
});

