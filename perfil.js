

document.addEventListener("DOMContentLoaded", function () {

    // --- DATOS TEMPORALES MIENTRAS NO HAY BD ---
    const datosUsuarioTemporal = {
        nombre: "Usuario Demo",
        genero: "Mujer",
        telefono: "+506 6000-0000",
        correo: "usuario@demo.com",
        foto: "archivos/user.png"
    };

    // SIMULACIÓN de llamada a base de datos / API
    cargarDatosUsuario(datosUsuarioTemporal);
});


// Función preparada para recibir datos reales de una API o BD
function cargarDatosUsuario(datos) {

    document.getElementById("campoNombre").textContent = datos.nombre;
    document.getElementById("campoGenero").textContent = datos.genero;
    document.getElementById("campoTelefono").textContent = datos.telefono;
    document.getElementById("campoCorreo").textContent = datos.correo;

    
    document.getElementById("fotoPerfil").src = datos.foto;
}

