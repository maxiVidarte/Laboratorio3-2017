///<reference path="./Persona.ts"/>
namespace Personas{
    export class Empleado extends Persona{
        public legajo:number;
        public horario:string;

        constructor(nombre:string,apellido:string,edad:number,legajo:number,horario:string){
            super(nombre,apellido,edad);
            this.legajo= legajo;
            this.horario=horario;
        }

        empleadoToJson():string{
            return super.personaToJson()+','+'"legajo": '+this.legajo+','+'"horario": '+this.horario+'}';
        }

    }
} 