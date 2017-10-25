function TraerBotones(numero)
{

	switch(numero)
	{
		
		case 1:
		$("#main-nav").html('<li><a onclick="MostrarError()" class="btn">Ajax<br> Error!!!</a></li><li><a onclick="MostrarSinParametros()" class="btn">Ajax<br>S/Parametros</a> </li> <li><a onclick="MostrarSinRetornarPromesa(\'foto\')" class="btn">Ajax Foto<br>(parametros y POST) </a> </li><li><a onclick="MostrarSinRetornarPromesa(\'video\')" class="btn">Ajax Video<br>(parametros y POST)</a> </li><li><a onclick="TraerBotones(2)" class="btn btn-success">Mas -> </a> </li>');
		break;
		case 2:
		$("#main-nav").html('<li><a onclick="MostarPais()" class="btn">Ajax<br> Mostrar Argentina</a></li> <li><a onclick="MostarPaises()" class="btn">Ajax<br> Mostrar paises</a></li>		<li><a onclick="TraerBotones(3)" class="btn btn-success"> Ejercicio asincrono-> </a> </li>');
		break;
		case 3:
		$("#main-nav").html('<li><a onclick="MostarRandom()" class="btn">Ajax<br>Random</a></li>				<li><a onclick="GuardarNumero()" class="btn">Ajax<br>Guardar</a></li>					<li><a onclick="MostarRandomlimitadoGet()" class="btn">Ajax Random <br> limitado GET</a></li>								<li><a onclick="MostarRandomlimitadoPost()" class="btn">Ajax Random <br>limitado POST</a></li>		 </li><li><a onclick="TraerBotones(4)" class="btn btn-success">ABM Con Login</a> </li>');
		break;
		case 4:
		$("#main-nav").html('<li><a onclick="MostrarSinRetornarPromesa(\'MostrarGrilla\')" class="btn">Mostrar <br>Grilla-Sesión-</a> </li>							<li><a onclick="MostarLogin()"  class="btn btn-primary"id="BotonLogin" >Login<br>-Sesión-</a> </li>	 </li><li><a onclick="TraerBotones(1)" class="btn btn-success">inicio -> </a> </li>');
		break;

	}
	
	

}
