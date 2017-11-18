///<reference path="./Persona.ts"/>
var Personas;
(function (Personas) {
    class Empleado extends Personas.Persona {
        constructor(nombre, apellido, edad, legajo, horario) {
            super(nombre, apellido, edad);
            this.legajo = legajo;
            this.horario = horario;
        }
        empleadoToJson() {
            return super.personaToJson() + ',' + '"legajo": ' + this.legajo + ',' + '"horario": ' + this.horario + '}';
        }
    }
    Personas.Empleado = Empleado;
})(Personas || (Personas = {}));
