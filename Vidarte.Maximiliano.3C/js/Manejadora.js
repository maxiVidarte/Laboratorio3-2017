///<reference path="./Persona.ts"/>
///<reference path="./Empleado.ts"/>
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
var datos = [];
function agregarEmpleado() {
    let nombre = $('#txtNombre').val().toString();
    let apellido = $('#txtApellido').val().toString();
    let edad = $('#txtEdad').val().toString();
    let legajo = parseInt($('#txtLegajo').val().toString());
    let horario = $('#txtHorario').val().toString();
    let miEmpleado = new Personas.Empleado(nombre, apellido, edad, legajo, horario);
    datos.push(miEmpleado);
    let myJson = JSON.stringify(datos);
    localStorage.setItem("datos", myJson);
    limpiarFormulario();
    mostrarEmpleados();
}
function limpiarFormulario() {
    $('#txtNombre').val('');
    $('#txtApellido').val('');
    $('#txtEdad').val('');
    $('#txtLegajo').val('');
    $('#txtHorario').val('mañana');
}
function mostrarEmpleados() {
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    var cuerpo = $("#cuerpo").html("");
    miJson.map(function (persona) {
        $("#cuerpo").append("<tr><td>" + persona.nombre + "</td>" + "<td>" + persona.apellido + "</td>" + "<td>" + persona.edad + "</td>" + "<td>" + persona.legajo + "</td>" + "<td>" + persona.horario + "</td>" + "<td><a onclick='Eliminar(" + persona.legajo + ")' class='glyphicon glyphicon-trash'></a><a onclick='Modificar(" + persona.legajo + ")' class='glyphicon glyphicon-download'></a> </td>");
        return persona;
    });
}
function Modificar(i) {
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    miJson.filter(function (persona) {
        if (persona.legajo == i)
            return persona;
    }).map(function (persona) {
        $("#txtNombre").val(persona.nombre);
        $('#txtApellido').val(persona.apellido);
        $('#txtEdad').val(persona.edad);
        $('#txtLegajo').val(persona.legajo);
        $('#txtHorario').val(persona.horario);
        return persona;
    });
    mostrarEmpleados();
}
function Eliminar(i) {
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    miArray = miJson.filter(function (persona) { if (persona.legajo != i)
        return persona; });
    miJson = JSON.stringify(miArray);
    localStorage.setItem("datos", miJson);
    mostrarEmpleados();
}
function filtrarPorHorario() {
    let opcion = $("#txtOpcion").val();
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    $("#cuerpo").html('');
    miJson.filter(function (persona) {
        if (opcion == persona.horario)
            return persona;
    }).map(function (persona) {
        $("#cuerpo").append("<tr><td>" + persona.nombre + "</td>" + "<td>" + persona.apellido + "</td>" + "<td>" + persona.edad + "</td>" + "<td>" + persona.legajo + "</td>" + "<td>" + persona.horario + "</td>" + "<td><a href='' onclick='Eliminar(" + persona.legajo + ")' class='glyphicon glyphicon-trash'></a><a href='' onclick='Modificar(" + persona.legajo + ")' class='glyphicon glyphicon-download'></a> </td>");
        return persona;
    });
}
function promedioEdadPorHorario() {
    let opcion = $("#txtOpcion").val();
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    let cont = 0;
    let hola = miJson.filter(function (persona) {
        if (persona.horario == opcion)
            return persona;
    }).reduce(function (total, persona) {
        cont++;
        return total += persona.edad;
    }, 0);
    console.log(hola);
}
function SoloNYA() {
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    $("#cuerpo").html('');
    miJson.map(function (persona) {
        $("#cuerpo").append("<tr><td>" + persona.nombre + "</td>" + "<td>" + persona.apellido + "</td></tr>");
        return persona;
    });
}
