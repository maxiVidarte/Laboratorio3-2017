window.onload = function(){
var personas = [{"nombre": "maximiliano","apellido": "vidarte","edad":29}, 
{"nombre": "adrian","apellido": "puentes","edad":52},
{"nombre": "juan","apellido": "perez","edad":35}];

for (var index = 0; index < personas.length; index++) {
    var element = personas[index];
    console.log(element.nombre);
    console.log(element.apellido);
    console.log(element.edad);
}
    
}
