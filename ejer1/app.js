// Función para GUARDAR (Set)
// Recibe el valor que queremos meter en la cookie
function setCookie(valor) {
    let fecha = new Date();
    // 7 días (7 * 24 horas * 60 min * 60 seg * 1000 ms)
    fecha.setTime(fecha.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = "visitas=" + valor + ";expires=" + fecha.toUTCString() + ";path=/";
}

// Función para LEER (Get)
function getCookie() {
    let nombre = "visitas=";
    let lista = document.cookie.split(';');
    for (let i = 0; i < lista.length; i++) {
        let c = lista[i].trim();
        if (c.indexOf(nombre) == 0) {
            return c.substring(nombre.length, c.length);
        }
    }
    return "0"; // Si no existe la cookie, devolvemos 0 como texto
}

// --- LÓGICA DE EJECUCIÓN ---
// 1. Leemos el valor actual
let n = parseInt(getCookie());

// 2. Sumamos 1 a la visita actual
let nuevaVisita = n + 1;

// 3. Mostramos en el HTML (en el div con id "contador")
document.getElementById('contador').innerText = nuevaVisita;

// 4. Guardamos el nuevo valor en la cookie
setCookie(nuevaVisita);

console.log("Visitas actualizadas a: " + nuevaVisita);