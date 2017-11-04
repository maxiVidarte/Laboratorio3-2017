///referenciar el ts de la clase padre
///<reference path="./Animal.ts"/>
namespace Animales {
    export class Gatos extends Animal{
    
        constructor(name:string){
            super(name);
        }
        hacerRuido():void{
            console.log("miau");
        }
    }
}
