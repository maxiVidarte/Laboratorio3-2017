///referenciar el ts de la clase padre
///<reference path="./Animal.ts"/>
namespace Animales {
    export class Perros extends Animal{
    
        //constructor con parametro opcional
        constructor(name:string){
            super(name);
        }
        hacerRuido():void{
            console.log("guau");
        }
    
    }
}