namespace Personas{
    export class Persona{
        public nombre:string;
        public apellido:string;
        public edad:string;
        
            constructor(nombre:string,apellido:string,edad:string){
            this.nombre = nombre;
            this.apellido = apellido;
            this.edad = edad;
            }
            personaToJson():string{
                return '[{"nombre":'+this.nombre+','+'"apellido":'+this.apellido+','+'"edad":'+this.edad;
            }
    
        }
    }