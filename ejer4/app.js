const contar = document.getElementById('contador');

function sumar() {
    const numero = contar.innerText;
    let sumando = parseInt(numero) + 1;
    localStorage.setItem('sumando', sumando);
    contar.innerText = sumando;
}
function resetear(){
    localStorage.removeItem('sumando');
    contar.innerText=0;

}
const guardado = localStorage.getItem('sumando');
if (guardado) {
    contar.innerText = guardado;
} else {
    contar.innerText = 0;
}