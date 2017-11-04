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
///referenciar el ts de la clase padre
///<reference path="./Animal.ts"/>
var Animales;
(function (Animales) {
    var Perros = /** @class */ (function (_super) {
        __extends(Perros, _super);
        //constructor con parametro opcional
        function Perros(name) {
            return _super.call(this, name) || this;
        }
        Perros.prototype.hacerRuido = function () {
            console.log("guau");
        };
        return Perros;
    }(Animales.Animal));
    Animales.Perros = Perros;
})(Animales || (Animales = {}));
