window.onload = function(){
    var respuesta = prompt("Ingrese cadena de texto");
       
    document.write(comparacion(respuesta));
}
function comparacion(miTexto){
    var min = miTexto.toLowerCase();
    var max = miTexto.toUpperCase();
    if(max.localeCompare(miTexto)==0)
        return "Usa Solo mayuscula";
    else if(min.localeCompare(miTexto)==0)
        return "Usa Solo minuscula";
    else
        return "Usa mayusculas y minusculas";

}