const input = document.getElementById('colorInput');
const mensaje =document.getElementById('mensaje');

function guardarColor(){
    const color =input.value;
    if(color){
        localStorage.setItem('color_favorito',color);
        mensaje.innerText="color guardado" + color;
    }else{
        mensaje.innerText="escribe un color";
    }
}
function leerColor(){
    const colorGuardado = localStorage.getItem('color_favorito');
    if(colorGuardado){
        mensaje.innerText =" el color es: " +colorGuardado
    }else{
        mensaje.innerText="no encontrado";
    }
}
function borrarColor(){
    const colorr = localStorage.getItem('color_favorito');
    if(colorr){
        localStorage.removeItem("color_favorito");
        mensaje.innerHTML="color " + colorr + " borrado con exito"
    }else{
        mensaje.innerText ="no encontrado";
    }
}