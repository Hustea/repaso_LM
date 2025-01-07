const infoBtn = document.getElementById('info-btn');
const dialog = document.getElementById('info-dialog');
const closeBtn = document.getElementById('cerrar-dialogo');

infoBtn.addEventListener('click', () => {
    dialog.showModal();
});

closeBtn.addEventListener('click', () => {
    dialog.close();
});
