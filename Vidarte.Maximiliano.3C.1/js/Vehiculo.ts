namespace Vehiculos{
    export class Vehiculo{
        public marca:string;
        public modelo:number;
        
            constructor(marca:string,modelo:number){
            this.marca = marca;
            this.modelo = modelo;
            }
            vehiculoToJson():string{
                return '{"marca":'+this.marca+','+'"modelo":'+this.modelo;
            }
    
        }
    }