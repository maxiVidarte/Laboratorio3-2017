function EnviarDatos()
{
	debugger;
	var url="index.html";
	var email=$("#email").val();
	var password=$("#password").val();
	var datoslogin= {"email":email, "password":password};
	
	$.post("http://localhost:1337/login",JSON.stringify(datoslogin),function (data) {
		console.log(response);
		if (data.autenticado =="si") {
			localStorage.setItem("datos",data);
			window.location.replace(url);
		}
		else{
			alert(data);
		}
	});
}