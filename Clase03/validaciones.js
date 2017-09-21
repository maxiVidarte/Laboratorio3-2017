
function validarCampos(){
    var nombre = getItem("txtNombre").value;
    var apellido = getItem("txtApellido").value;

    if (nombre == "" && apellido == "")
    {
        alert("Rellenar campos faltantes");
        getItem("txtNombre").className = "error";
        getItem("txtApellido").className = "error";
        return;
    }
    if(confirm("Esta seguro que desea agregar una persona") == true){
        var tCuerpo = getItem("tCuerpo");
        console.log(tCuerpo.innerHTML);
        tCuerpo.innerHTML = tCuerpo.innerHTML + 
        "<tr><td>"+nombre+"</td>" + 
        "<td>"+apellido+"</td>" +
        "<td><a href=''>borrar</a></td></tr>";
    }
}
function getItem(identificador){

return document.getElementById(identificador);
}