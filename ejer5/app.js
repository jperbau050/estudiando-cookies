import { createElement } from "react";

const nombreInput = document.getElementById('item');
const formulario = document.querySelector('form');
const listaUl = document.querySelector('ul');
const botonBorrar = document.querySelector('button');
// Quitamos la variable 'nombre' de aquí porque no hace falta fuera

// 1. Cargar JSON
let tareasArray = localStorage.getItem('nuevo') ? JSON.parse(localStorage.getItem('nuevo')) : [];

// 2. Pintar (Corregido: forEach con E mayúscula)
tareasArray.forEach(tarea => crearElementoLista(tarea));

// 3. Establecer en LocalStorage (Corregido: preventDefault e input correcto)
formulario.addEventListener('submit', function (e) {


    const nuevaTarea = {
        id: Math.floor(Math.random() * 999999), // Mejor usar floor para números enteros
        valor: nombreInput.value // Usamos el nombre correcto de la variable
    };


    tareasArray.push(nuevaTarea);
    localStorage.setItem('nuevo', JSON.stringify(tareasArray));

    crearElementoLista(nuevaTarea);
    nombreInput.value = ""; // Limpiamos el input

});

// 4. Función crear lista (Esta estaba perfecta)
function crearElementoLista(objetoTarea) {
    const li = document.createElement('li');
    li.textContent = objetoTarea.valor;
    listaUl.appendChild(li);
}

// 5. Borrar 
botonBorrar.addEventListener('click', () => {
    localStorage.removeItem('nuevo');
    tareasArray = [];
    listaUl.innerHTML = "";
})



    < body >
    <section id="notes-app">
        <input type="text" id="new-note" placeholder="Escribe una nota...">
            <button id="add-note-btn">Añadir</button>

            <!-- Contenedor donde irán las notas -->
            <ul id="notes-list"></ul>
    </section>
</body >


const input = document.getElementById('new-note');
const boton = document.getElementById('add-note-btn');
const lista = document.getElementById('notes-list');

boton.addEventListener('click', crearNota);

//Recuperar el valor del input.
const valor = input.value;
//Crear un nuevo elemento <li>.
const li = document.createElement('li');
//Añadir el texto de la nota dentro del <li>.
li.appendChild(valor);
li.textContent = valor + " ";
//Crear un botón con el texto "Eliminar".
const btnBorrar = document.createElement('button');
btnBorrar.textContent = "Eliminar";
//Insertar el botón dentro del <li>.
li.appendChild(btnBorrar);
//Insertar el <li> dentro del <ul>.
lista.appendChild(li);
//Limpiar el input después de añadir la nota.
input.value = "";

btnBorrar.addEventListener('click'()=> {
    li.remove();
}
)

    < body >
    <section id="text-app">
        <textarea id="text-input" placeholder="Escribe un texto..."></textarea>
        <button id="add-text-btn">Añadir texto</button>
        <button id="clear-texts-btn">Borrar todo</button>

        <!-- Contenedor donde aparecerán los textos -->
        <div id="texts-container"></div>
    </section>
</body >
const texto = document.getElementById('text-input');
const btnAñadir = document.getElementById('add-text-btn');
const btnBorrar = document.getElementById('clear-texts-btn');
const dividi = document.getElementById('texts-container');

btnAñadir.addEventListener('click', crearTexto);

function crearTexto() {
//Recuperar el valor del textarea.
let testo=texto.value;
//Crear un nuevo elemento < div >.
let newDiv=document.createElement('div');
//Insertar el texto dentro del < div >.
newDiv.textContent=testo;
//Añadir una clase llamada "text-box" al < div >.
newDiv.classList.add('text-box')
//Insertar el < div > dentro del contenedor texts - container.
dividi.appendChild(newDiv);
//Limpiar el textarea después de añadir el texto.
texto.value="";

//Programa el código para que al hacer click en “Borrar todo” se eliminen todos los textos del contenedor.
btnBorrar.addEventListener('click',()=>{
    dividi.innerHTML="";
})
}