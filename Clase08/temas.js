//libro codesafe o codeclean como el tio bob
//  TEMAS A TRATAR EN ESTA CLASE

let num ; //let es una variable local mientras var es global

//1) MAP, REDUCE Y FILTER 
//map transforma de una arra de json en otro pero operando en cada uno de los elementos
num.map(num => num*num);//va a operar un numero que se multiplica y lo retorna. se llama (arrow function)

//filter devuelve un array pero de lo que yo quiero.
num.filter(num=>num>3);//esto devuelve los numeros mayores a 3
//reduce devuelve un resultado unico de cada valor o sea un solo dato... 
num.reduce(function (total,num){return total+=num;},0);// el 0 es otro parametro del reduce, que seria como se inicializa el acumulador
valor de variable que va acumulando "total", y el item "num"
//2)bootstrap es un conjunto de estilos
//class= "col-xs-12 col-sm-8  col-md-9 col-lg-9"