var Vehiculos;
(function (Vehiculos) {
    class Vehiculo {
        constructor(marca, modelo) {
            this.marca = marca;
            this.modelo = modelo;
        }
        vehiculoToJson() {
            return '{"marca":' + this.marca + ',' + '"modelo":' + this.modelo;
        }
    }
    Vehiculos.Vehiculo = Vehiculo;
})(Vehiculos || (Vehiculos = {}));
