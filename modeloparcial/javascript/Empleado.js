var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
///<reference path="./Persona.ts"/>
var Personas;
(function (Personas) {
    var Empleado = /** @class */ (function (_super) {
        __extends(Empleado, _super);
        function Empleado(nombre, apellido, email, profesion) {
            return _super.call(this, nombre, apellido, email) || this;
        }
        Empleado.prototype.MostrarEmpleado = function () {
            return _super.prototype.MostrarPersona.call(this) + "profesion:" + this.profesion;
        };
        return Empleado;
    }(Personas.Persona));
    Personas.Empleado = Empleado;
})(Personas || (Personas = {}));
