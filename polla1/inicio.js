//crear una cookie
function setCookie(cname,cvalor,exdays){
    let d = new Date();
    //establecer tiempo que dura en expirar la cookie
    d.setTime(d.getTime() + (exdays *24 *60 *60 *1000))
    let expires = "expires=" + d-toUTCString();

    //cremaos la cookie
    document.cookie=encodeURIComponent(cname) + "=" + encodeURIComponent(cvalor) + ";" + expires + "; path=/";

}
function getCookie(cname){
    let name = encodeURIComponent(cname) + "=";
    let cookies = document.cookie.split(';');
    for(let c of cookies){
        c = c.trim();
        if(c.indexOf(name)===0){
            return encodeURIComponent(c.substring(name.length));
        }
    }
    return ""
}