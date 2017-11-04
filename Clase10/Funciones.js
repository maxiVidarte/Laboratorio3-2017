///referenciar el ts de la clase padre
///<reference path="./Animal.ts"/>
///<reference path="./Perro.ts"/>
///<reference path="./Gato.ts"/>
///<reference path="./node_modules/@types/jquery/index.d.ts"/>
var perro = new Animales.Perros("perro");
var gato = new Animales.Gatos("gato");
var nombre = new Array();
nombre.push(perro);
nombre.push(gato);
nombre.forEach(function (animal) {
    var a = $("#input").val("Soy un " + animal.name);
    console.log("Soy un " + animal.name);
    animal.hacerRuido();
});
