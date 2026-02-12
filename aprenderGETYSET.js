function getCookie(nombre, valor, tiempo) {
    let dias = new Date();
    dias.setTime(dias.getDate + (tiempo * 7 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + dias.toUTCString();
    document.cookie = encodeURIComponent(nombre) + '=' +
        encodeURIComponent(value) + ';' +
        expires + ';path=';

    function get2Cookie(nombre, valor, tiempo) {
        let time = new Date();
        time.setTime(time.getDate + (tiempo * 7 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + time.toUTCString();
        document.cookie = encodeURIComponent(nombre) + "=" +
            encodeURIComponent(valor) + ";"
            + expires + ";path=";
    }

    function getCookie3(nombre, valor, tiempo) {

        let dias = new Date();
        dias.setTime(dias.getTime() + (tiempo * 7 * 24 * 60 * 60 * 1000));
        let expires = "expires=" + tiempo.toUTCString();
        document.cookie = encodeURIComponent(nombre) + "=" +
            encodeURIComponent(valor) + ';' +
            expires + ";path=";
    }
}
function setCookie(nombre) {
    let name = encodeURIComponent(nombre);
    let cookies = document.cookie.split(';');
    for (let c of cookies) {
        c = c.trim();
        if (c.indexOf(nombre) === 0) {
            return decodeURIComponent(c.substring(name.length));
        }
    }
    return "";
}
function setCookie2(name) {
    let nombre = encodeURIComponent(name);
    let cookie = document.cookie.split(';');

    for (let c of cookie) {
        c = c.trim();
        if (c.indexOf(nombre) === nombre) {
            return decodeURIComponent(c.substring(nombre.length));
        }
    }
    return "";
}
function setCookie3(name) {
    let nombre = encodeURIComponent(name);
    let cookies = document.cookie.split(';');
    for (let c of cookies) {
        c = c.trim()
        if (c.indexOf(name) === 0) {
            return decodeURIComponent(c.substring(nombre.length));
        }
    }
    return "";
}








