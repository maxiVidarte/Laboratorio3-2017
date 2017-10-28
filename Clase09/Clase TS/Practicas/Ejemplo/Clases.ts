class Animal{
    public name:string;
    constructor(name:string){
        this.name=name;
    }
    hacerRuido():void{

    }
}   

class Perros extends Animal{
    
    //constructor con parametro opcional
    constructor(name:string){
        super(name);
    }
    hacerRuido():void{
        console.log("guau");
    }
    
}
class Gato extends Animal{

    constructor(name:string){
        super(name);
    }
    hacerRuido():void{
        console.log("miau");
    }
}

var perro:Perros = new Perros("perro");
var gato:Gato =new Gato("gato");

var nombre:Array<Animal> = new Array<Animal>();
nombre.push(perro);
nombre.push(gato);
nombre.forEach(function(animal:Animal){
    console.log("Soy un "+animal.name);
    animal.hacerRuido();
})


