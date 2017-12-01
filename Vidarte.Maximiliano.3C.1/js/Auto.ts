///<reference path="./Vehiculo.ts"/>
namespace Vehiculos{
    export class Auto extends Vehiculo{
        public precio:number;
        public color:string;

        constructor(marca:string,modelo:number,precio:number,color:string){
            super(marca,modelo);
            this.precio= precio;
            this.color=color;
        }

        autoToJson():string{
            return super.vehiculoToJson()+','+'"precio": '+this.precio+','+'"color: '+this.color+'}';
        }

    }
} 