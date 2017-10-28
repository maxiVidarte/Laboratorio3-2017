// Tipos
var batman:string = "Bruce";
var superman:string = "Clark";

var existe:boolean = false;

// Tuplas
var parejaHeroes:string[] = [batman,superman];
var villano:[string,number,boolean] = ["Lex Lutor",5,true];

// Arreglos
var aliados: Array<string> = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
enum fuerza{
fuerzaFlash = 5,
fuerzaSuperman = 100,
fuerzaBatman = 1,
fuerzaAcuaman = 0
};

// Retorno de funciones
function activar_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipo
var poder:string = "100";
var largoDelPoder:number = poder.length;
console.log( largoDelPoder );
