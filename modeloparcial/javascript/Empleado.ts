///<reference path="./Persona.ts"/>
namespace Personas{
        export class Empleado extends Persona{
            public profesion:string;
    
            constructor(nombre:string,apellido:string,email:string,profesion:string){
                super(nombre,apellido,email);
                this.profesion= profesion;
            }
    
            MostrarEmpleado():string{
                return '{'+super.MostrarPersona()+","+"profesion: "+this.profesion+'}';
            }
    
        }
    } 