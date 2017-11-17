///<reference path="./Persona.ts"/>
///<reference path="./Empleado.ts"/>
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
var datos:Array<string>=[];

function Mostrar(){

    
}
function Modificar(valor){
    console.log(valor);
}
function Borrar(valor){
    console.log(valor);
}
function Guardar(){
    var nombre = $('#txtNombre').val().toString();
    var apellido = $('#txtApellido').val().toString();
    var email = $('#txtEmail').val().toString();
    var profesion = $('#txtProfesion').val().toString();
    var miEmpleado = new Personas.Empleado(nombre,apellido,email,profesion);
    var miJson = JSON.stringify(miEmpleado);
    datos.push(JSON.parse(miJson));
    Mostrar();
    Limpiar();
}
function Limpiar(){
    $('#txtNombre').val('');
    $('#txtApellido').val('');
    $('#txtEmail').val('');
    $('#txtProfesion').val('');
}
