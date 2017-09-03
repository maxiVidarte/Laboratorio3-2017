window.onload = function(){
var meses = {1:"enero",2:"febrero",3:"marzo",4:"abril",5:"mayo",6:"junio",7:"julio",8:"agosto",9:"septiembre",10:"octubre",11:"noviembre",12:"diciembre"};
for (var i = 1; i  < 13; i++) {
    var element = meses[i];
    document.write(i+" - " + element+ "</br>");
}
}
