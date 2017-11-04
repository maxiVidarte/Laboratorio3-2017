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
    var Gatos = /** @class */ (function (_super) {
        __extends(Gatos, _super);
        function Gatos(name) {
            return _super.call(this, name) || this;
        }
        Gatos.prototype.hacerRuido = function () {
            console.log("miau");
        };
        return Gatos;
    }(Animales.Animal));
    Animales.Gatos = Gatos;
})(Animales || (Animales = {}));
