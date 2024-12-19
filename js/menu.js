// Obtener los elementos
const menuIcon = document.getElementById('menu-icon');
const navList = document.getElementById('nav-list');

// Toggle para abrir y cerrar el menú
menuIcon.addEventListener('click', () => {
    navList.classList.toggle('active');
});

