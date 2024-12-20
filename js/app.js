document.addEventListener('DOMContentLoaded', function () {
    crearGaleria();
    mostrarImagen();
});

function crearGaleria() {
    const CANTIDAD_IMAGENES = 16;
    const galeria = document.querySelector('.galeria-imagenes');
    for (let i = 1; i <= CANTIDAD_IMAGENES; i++) {
        const imagen = document.createElement('PICTURE');
        imagen.innerHTML = `
        <source src="/img/gallery/full/${i}.avif" type="image/avif">
        <source src="img/gallery/full/${i}.webp" type="image/webp">
        <img loading="lazy" width="200" height="300" src="img/gallery/full/${i}.jpg" alt="imagen galeria">
        `;

        // Event handler
        imagen.onclick = function () {
            mostrarImagen(i);
        };
        galeria.appendChild(imagen);
    }
}

function mostrarImagen(i) {
    const imagen = document.createElement('PICTURE');
    imagen.innerHTML = `
    <source src="/img/gallery/full/${i}.avif" type="image/avif">
    <source src="img/gallery/full/${i}.webp" type="image/webp">
    <img loading="lazy" width="200" height="300" src="img/gallery/full/${i}.jpg" alt="imagen galeria">
    `;

    // Generating modal
    const modal = document.createElement('DIV');
    modal.classList.add('modal');
    modal.onclick = cerrarModal;

    // Button to close modal
    const cerrarModalBtn = document.createElement('BUTTON');
    cerrarModalBtn.textContent = 'X';
    cerrarModalBtn.classList.add('btn-cerrar');
    cerrarModalBtn.onclick = cerrarModal;

    modal.appendChild(imagen);
    modal.appendChild(cerrarModalBtn);

    // Add to HTML
    const body = document.querySelector('body');
    body.classList.add('overflow-hidden'); // Disable scroll
    body.appendChild(modal);
}

function cerrarModal() {
    const modal = document.querySelector('.modal');
    modal.classList.add('fade-out');
    setTimeout(() => {
        modal?.remove();
        const body = document.querySelector('body');
        body.classList.remove('overflow-hidden');
    }, 500);
}
