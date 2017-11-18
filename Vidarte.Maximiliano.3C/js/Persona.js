var Personas;
(function (Personas) {
    class Persona {
        constructor(nombre, apellido, edad) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
        }
        personaToJson() {
            return '[{"nombre":' + this.nombre + ',' + '"apellido":' + this.apellido + ',' + '"edad":' + this.edad;
        }
    }
    Personas.Persona = Persona;
})(Personas || (Personas = {}));
