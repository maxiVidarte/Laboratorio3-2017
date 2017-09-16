 
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
var callback = function(){
    if(xmlHttp.readyState === 4){
        if(xmlHttp.status === 200){
            var miArray = JSON.parse(xmlHttp.response);
            for (var index = 0; index < miArray.length; index++) {
                var element = miArray[index];
                var tCuerpo = getItem("tCuerpo");
                
                        tCuerpo.innerHTML = tCuerpo.innerHTML + 
                        "<tr><td>"+element.nombre+"</td>" + 
                        "<td>"+element.apellido+"</td>" +
                        "<td>"+element.fecha+"</td>" +
                        "<td>"+element.telefono+"</td>" +
                        "<td><a href=''>borrar</a></td></tr>";
            }

        }
    }
}
    function peticionPost(){
    xmlHttp.onreadystatechange = callback; 
    var url = valida();       
    xmlHttp.open("POST","http://localhost:3000/nuevaPersona",true);
    xmlHttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlHttp.send(url);
    
}
function valida(){
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var usr = "";
    if(nombre== "" || apellido == "")
        {}
    else
        usr = "nombre="+nombre+"&apellido="+apellido;
        return usr;
}
    function peticion(){
    xmlHttp.onreadystatechange = callback;        
    xmlHttp.open("GET","http://localhost:3000/personas",true);
    xmlHttp.send();
}
    
   
    function validarCampos(){
        var nombre = getItem("txtNombre").value;
        var apellido = getItem("txtApellido").value;
        var fecha = getItem("txtFecha").value;
        var telefono = getItem("txtTelefono").value;
        
        
        if (nombre == "" && apellido == "")
        {
            alert("Rellenar campos faltantes");
            getItem("txtNombre").className = "error";
            getItem("txtApellido").className = "error";
            getItem("txtFecha").className = "error";
            getItem("txtTelefono").className = "error";
            return;
        }
        if(confirm("Esta seguro que desea agregar una persona") == true){
            var tCuerpo = getItem("tCuerpo");
    
            tCuerpo.innerHTML = tCuerpo.innerHTML + 
            "<tr><td>"+nombre+"</td>" + 
            "<td>"+apellido+"</td>" +
            "<td>"+fecha+"</td>" +
            "<td>"+telefono+"</td>" +
            "<td><a href=''>borrar</a></td></tr>";
        }
    }
    
    function getItem(identificador){
    
    return document.getElementById(identificador);
    }
    window.onload = peticion;