var xmlHttp = new XMLHttpRequest();

var callback = function () {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            localStorage.setItem("usuario",document.getElementById("Usuario").value);
            var miArray = JSON.parse(xmlHttp.response);
            
            if(miArray.autenticado = "si"){
                var url = "C:/Users/Casa/Desktop/Laboratorio3-2017/practica/index.html?color="+miArray.preferencias.color+"&font="+miArray.preferencias.font+"&usuario="+document.getElementById("Usuario").value;  
                window.location.replace(url);
            }
            
        }
    }
}
var callback2 = function () {
    var texthtml= document.getElementById("txtpost");
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            var respuesta = JSON.parse(xmlHttp.response);
             texthtml.innerHTML= texthtml.innerHTML + "<div><div><h1>" + respuesta.title +"</h1><h2>"+respuesta.header+"</h2><label type='text'>"+respuesta.posttext+"<br><label type='text'>"+respuesta.author+"<br><label type='text'>Fecha del post: "+respuesta.date+"</div></div>";           
        }
    }
}
function MandarPost(){
    
    xmlHttp.onreadystatechange = callback;
    var mijson = '{ "email":"'+document.getElementById("Usuario").value+'","password":"'+ document.getElementById("Contraseña").value+'" }';
    xmlHttp.open("POST","http://localhost:1337/login",true);
    xmlHttp.send(mijson);
}
function NuevoPost(){
    ocultar();
   xmlHttp.onreadystatechange = callback2;
   var miJson = '{"title":"'+document.getElementById("title").value+'","header":"'+document.getElementById("header").value+'","posttext":"'+document.getElementById("header").value+'","author":"'+localStorage.getItem("usuario")+'" }';
   xmlHttp.open("POST","http://localhost:1337/postearNuevaEntrada",true);
   xmlHttp.send(miJson);
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
    
function ocultar() {
    
        if (document.getElementById("btnOcultar").value == "Cancelar") {
            document.getElementById("btnOcultar").value = "Postear";
            document.getElementById("Posteo").hidden = true;
        }
        else {
            document.getElementById("btnOcultar").value = "Cancelar";
            document.getElementById("Posteo").hidden = false;
        }
    }

