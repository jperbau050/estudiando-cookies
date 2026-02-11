// Referencia al div donde escribiremos los mensajes
const estado = document.getElementById('estado');

function guardar() {
    const valor = document.getElementById('inputUser').value;
    
    if (valor) {
        // Sintaxis: Cookies.set(nombre, valor, { propiedades })
        // 'expires: 7' significa que dura 7 días automáticamente
        Cookies.set('usuario_sesion', valor, { expires: 7, path: '/' });
        
        estado.innerText = "✅ Cookie guardada: " + valor;
    } else {
        estado.innerText = "❌ Escribe algo primero";
    }
}

function consultar() {
    // Sintaxis: Cookies.get(nombre)
    const galleta = Cookies.get('usuario_sesion');
    
    if (galleta) {
        estado.innerText = "🔍 Valor recuperado: " + galleta;
    } else {
        estado.innerText = "⚠️ La cookie no existe.";
    }
}

function eliminar() {
    // Sintaxis: Cookies.remove(nombre)
    Cookies.remove('usuario_sesion');
    estado.innerText = "🗑️ Cookie eliminada.";
}