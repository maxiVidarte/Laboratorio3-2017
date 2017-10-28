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
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.hacerRuido = function () {
    };
    return Animal;
}());
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
}(Animal));
var Gato = /** @class */ (function (_super) {
    __extends(Gato, _super);
    function Gato(name) {
        return _super.call(this, name) || this;
    }
    Gato.prototype.hacerRuido = function () {
        console.log("miau");
    };
    return Gato;
}(Animal));
var perro = new Perros("perro");
var gato = new Gato("gato");
var nombre = new Array();
nombre.push(perro);
nombre.push(gato);
nombre.forEach(function (animal) {
    console.log("Soy un " + animal.name);
    animal.hacerRuido();
});
