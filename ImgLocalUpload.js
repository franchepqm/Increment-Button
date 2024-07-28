function mostrarVistaPrevia(fileInput, visor) {
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            visor.src = e.target.result;
            visor.style.display = 'block';
        }
        reader.readAsDataURL(file);
    } else {
        visor.style.display = 'none';
    }
}
dynamicElements.innerHTML = `
        <input type="file" id="fileInput">
        <img id="Visor" src="#" alt="">
    `;
