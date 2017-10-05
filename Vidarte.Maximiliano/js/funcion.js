var xmlHttp = new XMLHttpRequest();

function enviar(){
    xmlHttp.onreadystatechange = callback;
    var mijson = '{ "email":"'+document.getElementById("txtEmail").value+'","password":"'+ document.getElementById("txtPassword").value+'" }';
    xmlHttp.open("POST","http://localhost:3000/login",true);
    xmlHttp.setRequestHeader("content-type", "application/json");
    xmlHttp.send(mijson);
}
var callback = function(){
    document.getElementById("spinner").hidden=false;
    document.getElementById("miUsuario").hidden=true;
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            var respuesta = JSON.parse(xmlHttp.response);
            document.getElementById("spinner").hidden=true;
            document.getElementById("miUsuario").hidden=false;
            if(respuesta.type == "error"){
                document.getElementById("txtEmail").style= "border-color:red";
                document.getElementById("txtPassword").style= "border-color:red";
                var cuerpo = document.getElementById("txtError");
                cuerpo.innerHTML = '<FONT COLOR="red">debe ingresar un email y un password </FONT>';
                
            }else{
                var miString = window.location.href;
                miString = miString.replace("login.html","index.html");
                localStorage.setItem("usuario",document.getElementById("txtEmail").value);
                localStorage.setItem("type",respuesta.type);
                window.location.replace(miString);
            }

        }
    }
}
