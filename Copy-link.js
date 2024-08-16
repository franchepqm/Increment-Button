document.getElementById('compartir-btn').addEventListener('click', () => {
    const url = window.location.href;
    navigator.clipboard.writeText(url).then(() => {
        alert('URL copiada en el portapapeles para compartir');
    }).catch(err => {
        console.error('Error al copiar la URL: ', err);
    });
});
