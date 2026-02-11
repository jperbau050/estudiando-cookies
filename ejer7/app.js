// 1. Corregido el getItem dentro del parse
let notas = localStorage.getItem('nuevo') ? JSON.parse(localStorage.getItem('nuevo')) : [];
const listaUl = document.querySelector('ul');

window.onload = function() {
    notas.forEach(nota => pintarNota(nota));
}

function pintarNota(obj) {
    const li = document.createElement('li');
    li.innerText = obj.texto;

    // Esto funciona porque obj.urgente ahora será true o false
    if (obj.urgente) {
        li.style.color = "red";
        li.style.fontWeight = "bold";
    }

    listaUl.appendChild(li);
}

function limpiarNotas() {
    localStorage.removeItem('nuevo');
    notas = [];
    listaUl.innerHTML = "";
}

function agregarNota() {
    const input = document.getElementById('notaTexto');
    const select = document.getElementById('prioridadSelect');

    if (input.value.trim() === "") {
        return;
    }

    const nuevaNota = {
        texto: input.value,
        // Corregido: comparamos para que devuelva un booleano
        urgente: select.value === "urgente" 
    };

    notas.push(nuevaNota);
    // Corregido: hay que pasar el nombre y el valor convertido a texto
    localStorage.setItem('nuevo', JSON.stringify(notas));

    pintarNota(nuevaNota);
    input.value = "";
}