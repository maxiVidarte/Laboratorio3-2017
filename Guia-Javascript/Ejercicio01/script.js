window.onload = function(){
    var string1 = "HOLA MUNDO!!!";
    var string2 = "Puedo mostrar comillas 'simples'";
    var string3 = 'y tambien comillas "dobles"';

    document.getElementById("Texto").innerHTML = string1 + "</br>" + string2 +  "</br>" + string3;
}