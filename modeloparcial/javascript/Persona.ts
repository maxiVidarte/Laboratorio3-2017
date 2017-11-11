namespace Personas{
export class Persona{
    public nombre:string;
    public apellido:string;
    public email:string;
    
        constructor(nombre:string,apellido:string,email:string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        }
        MostrarPersona():string{
            return "nombre:"+this.nombre+"apellido:"+this.apellido+"email:"+this.email;
        }

    }
}