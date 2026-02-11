function setCookie(nombre, valor, tiempo) {
    let dias = new Date();
    dias.setTime(dias.getTime() + (tiempo * 24 * 60 * 60 * 1000));
    let expires = "expires=" + dias.toUTCString();
    document.cookie = encodeURIComponent(nombre) + "=" +
        encodeURIComponent(valor) + ';' +
        expires + ';path='
}
function getCookie(nombre) {

    let name = encodeURIComponent(nombre) + "+";
    let cookies = document.cookie.split(';');

    for (let c of cookies) {
        c = c.trim();
        if (c.indexOf(nombre) === 0) {
            return decodeURIComponent(c.substring(name.length));
        }
    }
    return "";

}
function borrarIdioma(nombre) {
    document.cookie = encodeURIComponent(nombre) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}


//ia
const select = document.getElementById('idiomaSelect');
const saludo = document.getElementById('saludo');

// Carga inicial: Al abrir la web, leemos la cookie
window.onload = function() {
    let idiomaGuardado = getCookie("preferencia_idioma");
    if (idiomaGuardado !== "") {
        select.value = idiomaGuardado;
        actualizarTexto(idiomaGuardado);
        console.log("Idioma recuperado de la cookie: " + idiomaGuardado);
    }
};

// Función para el botón Guardar
function guardar() {
    let valorSeleccionado = select.value;
    // Guardamos la cookie por 7 días
    setCookie("preferencia_idioma", valorSeleccionado, 7);
    actualizarTexto(valorSeleccionado);
    alert("Idioma guardado: " + valorSeleccionado);
}

// Función para el botón Borrar
function borrar() {
    // Borramos poniendo fecha expirada
    document.cookie = "preferencia_idioma=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    saludo.innerText = "Hola!";
    alert("Cookie borrada");
}

// Función auxiliar para cambiar el saludo
function actualizarTexto(idm) {
    if (idm === "Inglés") {
        saludo.innerText = "Hello!";
    } else {
        saludo.innerText = "Hola!";
    }
}