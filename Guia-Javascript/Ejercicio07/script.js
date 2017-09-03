window.onload = function(){
    var Apellido = prompt("Ingrese apellido");
    var Nombre = prompt("Ingrese nombre");
    validacion(Apellido,Nombre);
}
function validacion(ap, nom){
    ap = ap.toUpperCase();
    var nom2 = nom.replace(nom[0],nom[0].toUpperCase());
    document.write(ap+ "  " +nom2);
}
