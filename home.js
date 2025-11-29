document.addEventListener("DOMContentLoaded", () => {

    const btnPerfil = document.getElementById("btnPerfil");

    btnPerfil.addEventListener("click", () => {
        window.electronAPI.abrirPerfil();
    });

});
