namespace Personas{
    export class Persona{
        public nombre:string;
        public apellido:string;
        public edad:number;
        
            constructor(nombre:string,apellido:string,edad:number){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            }
            personaToJson():string{
                return '[{"nombre":'+this.nombre+','+'"apellido":'+this.apellido+','+'"edad":'+this.edad;
            }
    
        }
    }