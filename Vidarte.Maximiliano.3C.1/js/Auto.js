///<reference path="./Vehiculo.ts"/>
var Vehiculos;
(function (Vehiculos) {
    class Auto extends Vehiculos.Vehiculo {
        constructor(marca, modelo, precio, color) {
            super(marca, modelo);
            this.precio = precio;
            this.color = color;
        }
        autoToJson() {
            return super.vehiculoToJson() + ',' + '"precio": ' + this.precio + ',' + '"color: ' + this.color + '}';
        }
    }
    Vehiculos.Auto = Auto;
})(Vehiculos || (Vehiculos = {}));
