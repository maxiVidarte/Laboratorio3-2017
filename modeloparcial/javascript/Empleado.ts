///<reference path="./Persona.ts"/>
namespace Personas{
        export class Empleado extends Persona{
            public profesion:string;
    
            constructor(nombre:string,apellido:string,email:string,profesion:string){
                super(nombre,apellido,email);
            }
    
            MostrarEmpleado():string{
                return super.MostrarPersona()+"profesion:"+this.profesion;
            }
    
        }
    } 