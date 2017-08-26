
function validar() {
    var nombre = $("txtUsr").value;
    var contraseña = $("txtPass").value;
    if (nombre == "maxi") {
        alert("ok");
    }
    else
        alert("error");
}

function $(identificador) {
    return document.getElementById(identificador);
}
