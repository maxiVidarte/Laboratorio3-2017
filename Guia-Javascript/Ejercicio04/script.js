window.onload = function(){
    var nprimo = 0;
    for (var index = 2; nprimo < 20; index++) {
    
     if((index % 2) ==0){
         nprimo++;
         document.getElementById("parrafo").innerHTML += index + "</br>";
     }

    }

}