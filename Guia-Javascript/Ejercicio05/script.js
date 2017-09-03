window.onload = function(){
    var numero = prompt("ingrese un numero");
    while(isNaN(numero))
    {
        alert("es un numero");
        if(numero > 0)
        {
             var total = 1;
    for (var i = 1; i <=numero; i++){
        total= total*i;
    }
           document.write(factorial(total));
        }
        else{
            var numero = prompt("ingrese un numero");
        }
    }
}
function factorial(n){
   
}