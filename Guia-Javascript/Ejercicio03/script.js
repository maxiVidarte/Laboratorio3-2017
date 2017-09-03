window.onload = function(){

    var ingresado = prompt("ingrese un numero");
    while(isNaN(ingresado)){
       alert(ingresado+" no es un numero");
       var ingresado = prompt("ingrese un numero");
    }
    if(ingresado % 2== 0){
        alert("el numero "+ingresado +" es par");
    }
    else{
        alert("el numero "+ingresado +" es impar");
    }


}