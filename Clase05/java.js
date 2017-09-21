
// function(){
// var personas = [{"nombre": "maximiliano","apellido": "vidarte","edad":29}, 
// {"nombre": "adrian","apellido": "puentes","edad":52},
// {"nombre": "juan","apellido": "perez","edad":35}];

// for (var index = 0; index < personas.length; index++) {
//     var element = personas[index];
//     console.log(element.nombre);
//     console.log(element.apellido);
//     console.log(element.edad);
// }
// }

var xmlHttp = new XMLHttpRequest();
var callback = function () {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            var miArray = JSON.parse(xmlHttp.response);
            for (var index = 0; index < miArray.length; index++) {
                var element = miArray[index];
                var tCuerpo = getItem("tCuerpo");

                tCuerpo.innerHTML = tCuerpo.innerHTML +
                    "<tr><td>" + element.nombre + "</td>" +
                    "<td>" + element.apellido + "</td>" +
                    "<td>" + element.fecha + "</td>" +
                    "<td>" + element.telefono + "</td>" +
                    "<td><a href=''>borrar</a></td></tr>";
            }

        }
    }
}
function peticionPost() {
    if(confirm("Esta seguro que desea agregar una persona?")==true){
    xmlHttp.onreadystatechange = callback;
    var url = valida();
    xmlHttp.open("POST", "http://localhost:3000/nuevaPersona", true);
    xmlHttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    xmlHttp.send(url);
    }
    else{
        getItem("txtNombre").value ="";
        getItem("txtApellido").value="";
        getItem("txtFecha").value="";
        getItem("txtTelefono").value="";
    }
}
function valida() {
    var nombre = getItem("txtNombre").value;
    var apellido = getItem("txtApellido").value;
    var fecha = getItem("txtFecha").value;
    var telefono = getItem("txtTelefono").value;
    var usr = "";
    if (nombre == "" || apellido == "") { }
    else
        usr = "nombre=" + nombre + "&apellido=" + apellido + "&fecha=" + fecha + "&telefono=" + telefono;
    return usr;
}
function listado() {
    xmlHttp.onreadystatechange = callback;
    xmlHttp.open("GET", "http://localhost:3000/personas", true);
    xmlHttp.send();
}

function getItem(identificador) {
    return document.getElementById(identificador);
}
function ocultar() {

    if (getItem("btnOcultar").value == "ocultar") {
        getItem("btnOcultar").value = "abrir";
        getItem("Agregar").hidden = true;
    }
    else {
        getItem("btnOcultar").value = "ocultar";
        getItem("Agregar").hidden = false;
    }
}
function eliminar(elemento){
    var id=elemento.parentNode.getAttribute("id");
    node=document.getElementById(id);
    node.parentNode.removeChild(node);
}
window.onload = listado;