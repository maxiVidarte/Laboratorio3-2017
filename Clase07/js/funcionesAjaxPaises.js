
function MostarPaises()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		url:"https://restcountries.eu/rest/v2/region/americas",
	
	})
	.then(function(retorno){
		console.info(retorno);
		var paises="";
		var cont = 0;
		retorno.forEach(function(element) {
			if(cont<3) 
				paises = paises+element.name+"</br>";
				cont++;
		}, this);
		$("#principal").html(paises);
		$("#informe").html("Correcto MostarPaises ");	
	})
	.catch(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});

}

function MostarPais()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		url:"https://restcountries.eu/rest/v2/name/argentina",
	
	})
	.then(function(retorno){
		console.info(retorno);
		var pais;
		retorno.forEach(function(element) {
			pais=element.name +"</br>"+ element.capital;
		}, this);
		$("#principal").html(pais);
		$("#informe").html("Correcto MostarPais");	
	})
	.catch(function(retorno){
		$("#botonesABM").html(":(");
		$("#informe").html(retorno.responseText);	
	});

}

