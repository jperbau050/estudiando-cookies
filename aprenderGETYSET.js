function getCookie(nombre,valor,tiempo){
    let dias = new Date();
    dias.setTime(dias.getDate + (tiempo*7*24*60*60*1000));
    let expires = "expires=" + dias.toUTCString();
    document.cookie= encodeURIComponent(nombre) + '=' +
    encodeURIComponent(value) + ';' +
    expires + ';path=';
}
function setCookie(nombre){
    let name = encodeURIComponent(nombre);
    let cookies = document.cookie.split(';');
    for(c of cookies){
        c =c.trim();
        if(c.indexOf(nombre) === 0){
            return decodeURIComponent(c.substring(name.length));
        }
    }
    return "";
}