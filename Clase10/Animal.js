var Animales;
(function (Animales) {
    var Animal = /** @class */ (function () {
        function Animal(name) {
            this.name = name;
        }
        Animal.prototype.hacerRuido = function () {
        };
        return Animal;
    }());
    Animales.Animal = Animal;
})(Animales || (Animales = {}));
