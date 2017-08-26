function validar(){
    var nombre = $("txtUsr").value;
    var pass = $("txtPass").value;

    if(nombre=="matias"&&pass=="123"){
        alert("OK");
    }else{
        alert("No OK");
        
    }
}

function $(identificador){

    return document.getElementById(identificador);

}