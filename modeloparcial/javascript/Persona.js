var Personas;
(function (Personas) {
    var Persona = /** @class */ (function () {
        function Persona(nombre, apellido, email) {
            this.nombre = nombre;
            this.apellido = apellido;
            this.email = email;
        }
        Persona.prototype.MostrarPersona = function () {
            return "nombre:" + this.nombre + "apellido:" + this.apellido + "email:" + this.email;
        };
        return Persona;
    }());
    Personas.Persona = Persona;
})(Personas || (Personas = {}));
