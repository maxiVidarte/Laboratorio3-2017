///<reference path="./Vehiculo.ts"/>
///<reference path="./Auto.ts"/>
///<reference path="../node_modules/@types/jquery/index.d.ts"/>
var datos:Array<Vehiculos.Auto>=[];
var getLocal = localStorage.getItem("datos");
window.onload=function(){
    CargaModelos();
}
function CargaModelos(){
    for (var index = 2000; index <= 2017; index++) {
        $("#txtModelo").append("<option>"+index+"</option>");
        $("#txtModelo2").append("<option>"+index+"</option>");
        $("#txtOpcion").append("<option>"+index+"</option>");
    }
}
function agregarAuto():void{
    let miArray;
    if(getLocal != null){
        miArray = localStorage.getItem("datos");
        datos = JSON.parse(miArray);
    }
    let marca:string = $('#txtMarca').val().toString();
    let modelo:number =parseInt($('#txtModelo').val().toString());
    let precio:number= parseInt($('#txtPrecio').val().toString());
    let color:string=$('#txtColor').val().toString();
    let miAuto:Vehiculos.Auto = new Vehiculos.Auto(marca,modelo,precio,color);
    datos.push(miAuto); 
    let myJson:string = JSON.stringify(datos);
    localStorage.setItem("datos",myJson);
    getLocal = localStorage.getItem("datos");
    limpiarFormulario();
    mostrarAutos();
}
function limpiarFormulario():void{
    $('#txtMarca').val('');
    $('#txtModelo').val('');
    $('#txtPrecio').val('');
    $('#txtColor').val('');
}
function mostrarAutos():void{
    if(getLocal != null){
    let datos = localStorage.getItem("datos");
    let miJson = JSON.parse(datos);
    let indice = 0 ;
    var cuerpo =$("#cuerpo").html(""); 
    miJson.map(function(Autos){
       $("#cuerpo").append("<tr><td>"+Autos.marca+"</td>"+"<td>"+Autos.color+"</td>"+"<td>"+Autos.modelo+"</td>"+"<td>"+Autos.precio+"</td>"+"<td><a onclick='Eliminar("+indice+")' class='glyphicon glyphicon-trash'></a><a onclick='Modificar("+indice+")' class='glyphicon glyphicon-download'></a> </td>");
        indice++;
        return Autos;});    
    }
}
function CancelarModificacion(){
    limpiarFormulario();
    $("#tituloAlta").html("Alta Auto");
    $("#Cancelar").attr("onclick","limpiarFormulario()");
    $("#GuardarAuto").attr("onclick","agregarAuto()");
    $("#GuardarAuto").html("Aceptar <span class='glyphicon glyphicon-floppy-disk' ></span>");
}
function Modificar(i:number):void{
    $("#tituloAlta").html("Modificar Auto");
    $("#Cancelar").attr("onclick","CancelarModificacion()");
    $("#GuardarAuto").attr("onclick","ModificarAuto("+i+")");
    $("#GuardarAuto").html("Modificar <span class='glyphicon glyphicon-floppy-disk' ></span>");
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    let miAuto;
    for (var index = 0; index < miJson.length; index++) {
        var element = miJson[index];
        if(index  == i){
            miAuto = element;
        }
        
    }
    $("#txtMarca").val(miAuto.marca);
    $('#txtColor').val(miAuto.color);
    $('#txtModelo').val(miAuto.modelo);
    $('#txtPrecio').val(miAuto.precio);
}
function ModificarAuto(i:number){
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    let index = 0;
    miArray = miJson.map(function(Autos){ 
        if(index==i){
        Autos.marca = $("#txtMarca").val();
        Autos.color = $("#txtColor").val();
        Autos.modelo = $("#txtModelo").val();
        Autos.precio = $("#txtPrecio").val();
        }
        index++;
        return Autos;
    });
    miJson = JSON.stringify(miArray);
    localStorage.setItem("datos",miJson);
    mostrarAutos();
    CancelarModificacion();
} 
function Eliminar(i:number):void{
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    let miAuto;
    for (var index = 0; index < miJson.length; index++) {
        var element = miJson[index];
        if(index  == i){
            miAuto = element;
        }
        
    }
    miArray = miJson.filter(function(Autos){
        if(miAuto!=Autos)
        {
            return Autos;
        }
    });
    miJson = JSON.stringify(miArray);
    localStorage.setItem("datos",miJson);
    mostrarAutos();
}
function filtrarPorModelo(){
    let opcion = $("#txtModelo2").val();
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    let indice = 0;
    $("#cuerpo").html('');
    miJson.filter(function(Autos){
        if(opcion==Autos.modelo)
        return Autos;
    }).map(function(Autos){
        
        $("#cuerpo").append("<tr><td>"+Autos.marca+"</td>"+"<td>"+Autos.color+"</td>"+"<td>"+Autos.modelo+"</td>"+"<td>"+Autos.precio+"</td>"+"<td><a onclick='Eliminar("+indice+")' class='glyphicon glyphicon-trash'></a><a onclick='Modificar("+indice+")' class='glyphicon glyphicon-download'></a> </td>");
        indice++;
        return Autos;
    });
    
}
function promedioMasCaro(){

    let opcion =$("#txtOpcion").val();
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    let cont:number = 0;

    let hola = miJson.filter(function(Autos){
        if(Autos.modelo==opcion)
          return Autos;
      }).reduce(function(total:Number,Autos){
        if(Autos.precio>total)
        {
            total = Autos.precio;
        }
        return total;
      },0 );
      let indice = 0;
      miJson.filter(function(Autos){
          if(Autos.precio == hola){
              return $("#cuerpo").html("<tr><td>"+Autos.marca+"</td>"+"<td>"+Autos.color+"</td>"+"<td>"+Autos.modelo+"</td>"+"<td>"+Autos.precio+"</td>"+"<td><a onclick='Eliminar("+indice+")' class='glyphicon glyphicon-trash'></a><a onclick='Modificar("+indice+")' class='glyphicon glyphicon-download'></a> </td>");;
          }
          indice++;
      });
      
}
function SoloNYA(){
    let miArray = localStorage.getItem("datos");
    let miJson = JSON.parse(miArray);
    $("#cuerpo").html('');
    miJson.map(function(Autos){
       // $("#cuerpo").append("<tr><td>"+Autos.marca+"</td>"+"<td>"+Autos.color+"</td></tr>");
        return Autos;
    })
}