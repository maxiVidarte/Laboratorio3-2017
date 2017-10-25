

function MostarRandom()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		//url:"./ServidorPHP/php/RetornarRandom.php"
		url:"http://localhost:8080/ServidorPHP/php/RetornarRandom.php"
	
	}).then(function(retorno){
		$("#informe").html("");
		if(retorno>0)
		$("#principal").html(retorno+" El valor es positivo");
		else if(retorno<0)
		$("#principal").html(retorno+" El valor es negativo");
		else
		$("#principal").html(retorno+" El valor es 0");
	})
	
	

}

function MostarRandomlimitadoGet()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		//url:"./ServidorPHP/php/RetornarRandomlimitadoGet.php",
		url:"http://localhost:8080/ServidorPHP/php/RetornarRandomlimitadoGet.php",
		type:"get"
	})
	.then(function(retorno){
		console.info(retorno);
		$("#principal").html(retorno);
		$("#informe").html("Correcto MostarRandomlimitadoGet");	
	})
	.catch(function(retorno){
		$("#principal").html("Error:"+retorno.statusText +"<br>"+ retorno.status);
		$("#informe").html("Retorno con error");
		$("#error").html(retorno.responseText);	
	});

}
function MostarRandomlimitadoPost()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		//url:"./ServidorPHP/php/RetornarRandomlimitadoPost.php",
		url:"http://localhost:8080/ServidorPHP/php/RetornarRandomlimitadoPost.php",
		type:"post"
	})
	.then(function(retorno){
		console.info(retorno);
		$("#principal").html(retorno);
		$("#informe").html("Correcto MostarRandomlimitadoPost");	
	})
	.catch(function(retorno){
		console.log(retorno);
		$("#informe").html("Retorno con error");
		$("#principal").html("Error :" +retorno.statusText +"<br>"+ retorno.status);	
		$("#error").html(retorno.responseText);	
	});

}

function GuardarNumero()
{

	$("#informe").html("<img src='imagenes/ajax-loader.gif' style='width: 30px;'/>");
	$("#error").html("");
	var funcionAjax=$.ajax({
		//url:"./ServidorPHP/php/GuardarNumero.php",
		url:"http://localhost:8080/ServidorPHP/php/GuardarNumero.php",
		type:"post",
		data:{numero:10}
	})
	.then(function(retorno){
		console.info(retorno);
		$("#principal").html(retorno);
		$("#informe").html("Correcto MostarRandomlimitadoPost");	
	})
	.catch(function(retorno){
		console.log(retorno);
		$("#informe").html("Retorno con error");
		$("#principal").html("Error :" +retorno.statusText +"<br>"+ retorno.status);	
		$("#error").html(retorno.responseText);	
	});

}

