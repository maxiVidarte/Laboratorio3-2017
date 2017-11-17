var Personas;
(function (Personas) {
    class Persona {
        constructor(nombre, apellido, email) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
        }
        MostrarPersona() {
            return "nombre: " + this.nombre + "," + "apellido: " + this.apellido + "," + "email: " + this.email;
        }
    }
    Personas.Persona = Persona;
})(Personas || (Personas = {}));
