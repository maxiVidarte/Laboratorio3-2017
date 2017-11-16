///<reference path="./Persona.ts"/>
///<reference path="./Empleado.ts"/>
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
function Modificar() {
    console.log("hola modificar como estas");
}
function Guardar() {
    console.log("nombre" + $("#txtNombre").val() + " apellido:" + $("#txtApellido").val());
}
