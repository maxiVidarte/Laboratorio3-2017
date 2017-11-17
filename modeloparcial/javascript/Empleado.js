///<reference path="./Persona.ts"/>
var Personas;
(function (Personas) {
    class Empleado extends Personas.Persona {
        constructor(nombre, apellido, email, profesion) {
            super(nombre, apellido, email);
            this.profesion = profesion;
        }
        MostrarEmpleado() {
            return '{' + super.MostrarPersona() + "," + "profesion: " + this.profesion + '}';
        }
    }
    Personas.Empleado = Empleado;
})(Personas || (Personas = {}));
