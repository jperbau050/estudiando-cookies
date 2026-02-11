const nombreInput = document.getElementById('item');
const formulario = document.querySelector('form');
const listaUl = document.querySelector('ul');
const botonBorrar =document .querySelector('button');
// Quitamos la variable 'nombre' de aquí porque no hace falta fuera

// 1. Cargar JSON
let tareasArray = localStorage.getItem('nuevo') ? JSON.parse(localStorage.getItem('nuevo')) : [];

// 2. Pintar (Corregido: forEach con E mayúscula)
tareasArray.forEach(tarea => crearElementoLista(tarea));

// 3. Establecer en LocalStorage (Corregido: preventDefault e input correcto)
formulario.addEventListener('submit', function(e) {
    

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
botonBorrar.addEventListener('click',()=>{
    localStorage.removeItem('nuevo');
    tareasArray=[];
    listaUl.innerHTML="";
})