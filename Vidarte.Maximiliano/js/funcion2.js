var xmlHttp = new XMLHttpRequest();

function listado(){
    xmlHttp.onreadystatechange =callback;
    xmlHttp.open("GET","http://localhost:3000/noticias",true);
    xmlHttp.send();
}

var callback = function(){
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
           var miArray = JSON.parse(xmlHttp.response);
           var tcuerpo = document.getElementById("tema");
           var tbody = document.getElementById("titynot");
           tcuerpo.innerHTML = tcuerpo.innerHTML+ "<nav> <ul>";
           tbody.innerHTML = tbody.innerHTML +"<article>";
           for (var index = 0; index < miArray.length; index++) {
               var element = miArray[index];
               tcuerpo.innerHTML = tcuerpo.innerHTML+ '<li><a href="#"'+element.tema+'>'+element.titulo+'</li>';
               tbody.innerHTML = tbody.innerHTML +"<h2>"+element.titulo+"</h2>"+"<p>"+element.noticia+"</p>"+"<p>"+element.fecha+"</p>";
           }
           tbody.innerHTML = tbody.innerHTML +"</article>";
           tcuerpo.innerHTML = tcuerpo.innerHTML+ "</ul> <nav>";
           if(localStorage.getItem("type")=="Admin"){
            document.getElementById("btnOcultar").hidden = false;
           }
           else{
            document.getElementById("btnOcultar").hidden = true;
           }

        }
    }
}
var callback2 = function(){
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            console.log(xmlHttp.response);
        }
    }
}
function NuevaNoticia(){
    
    xmlHttp.onreadystatechange = callback2;
    var mijson = '{ "tema":"'+ document.getElementById("tema1").value+'","titulo":"'+ document.getElementById("titulo").value+'","noticia":"'+ document.getElementById("noticia").value+'","email":"'+localStorage.getItem("usuario")+'" }';
    xmlHttp.open("POST","http://localhost:3000/login",true);
    xmlHttp.setRequestHeader("content-type", "application/json");
    xmlHttp.send(mijson);
    
}
function ocultar() {
    
        if (document.getElementById("btnOcultar").value == "ocultar") {
            document.getElementById("btnOcultar").value = "Nueva Noticia";
            document.getElementById("nuevaNot").hidden = true;
            
        }
        else {
            document.getElementById("btnOcultar").value = "ocultar";
            document.getElementById("nuevaNot").hidden = false;
            document.getElementById("nuevaNot").modal("hide");
        }
    }
window.onload = listado;
