///referenciar el ts de la clase padre
///<reference path="./Animal.ts"/>
///<reference path="./Perro.ts"/>
///<reference path="./Gato.ts"/>
///<reference path="./node_modules/@types/jquery/index.d.ts"/>

var perro:Animales.Perros = new Animales.Perros("perro");
var gato:Animales.Gatos= new Animales.Gatos("gato");

var nombre:Array<Animales.Animal> = new Array<Animales.Animal>();
nombre.push(perro);
nombre.push(gato);
nombre.forEach(function(animal:Animales.Animal){
    var a:any = $("#input").val("Soy un "+animal.name);
    console.log("Soy un "+animal.name);
    animal.hacerRuido();
})