///<reference path="../node_modules/@types/jquery/index.d.ts"/>
function EnviarDatos() {
  var $function =  $.ajax({
        url:"c:\Users\alumno\Desktop\maxi\Clase10bis\index.html",
        type:"post",
        data:{
            email:$("#email").val(),
            password:$("#password").val()
        }
    });
}
function CompletarDatos($usuario){
    $("#email").val($usuario);
    $("#password").val("1234");
}