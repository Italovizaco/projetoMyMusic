// Detectar o evento click que será usado para disparar a Modal, apenas nas imagens da galeria.
document.addEventListener('click', function (e) {
    // console.log(e.target);

    // Verificar se o click foi dado em alguém que tem a classe da imagem
    if (e.target.classList.contains('gallery-item')) {
        // recuperar o src e o alt
        const src = e.target.getAttribute('src');
        const alt = e.target.getAttribute('alt');
        // console.log(src,alt);
        // atribuindo os valores à janela modal
        document.querySelector('.modal-title').textContent = alt;
        document.querySelector('.modal-img').src = src;
        const myModal = new bootstrap.Modal(document.getElementById('gallery-modal'));
        myModal.show();
    }
})