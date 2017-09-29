var xmlHttp = new XMLHttpRequest();

var callback = function () {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            localStorage.setItem("usuario",document.getElementById("Usuario").value);
            var miArray = JSON.parse(xmlHttp.response);
            var url = "C:/Users/Casa/Desktop/Laboratorio3-2017/practica/index.html?color="+miArray.preferencias.color+"&font="+miArray.preferencias.font+"&usuario="+document.getElementById("Usuario").value;
            if(miArray.autenticado = "si"){
                window.location.replace(url);
            }
            
        }
    }
}

function MandarPost(){
    
    xmlHttp.onreadystatechange = callback;
    var mijson = '{ "email":"'+document.getElementById("Usuario").value+'","password":"'+ document.getElementById("Contraseña").value+'" }';
    xmlHttp.open("POST","http://localhost:1337/login",true);
    xmlHttp.send(mijson);
}

function getParameterByName(name, url) {
    if(!url) 
    url = window.location.href;
    
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), results = regex.exec(url);
    if(!results) return null;
    if(!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}   
    

