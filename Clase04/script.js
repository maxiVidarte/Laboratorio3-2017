
        var xmlHttp = new XMLHttpRequest();
        var callback = function(){
         
            if(xmlHttp.readyState === 4){
                if(xmlHttp.status === 200){
         
                    console.log(xmlHttp.response);
                }
            }
        }
        function peticion(){
            xmlHttp.onreadystatechange = callback;        
            var url = valida();
            xmlHttp.open("GET",url,true);
            xmlHttp.send();
        }
        function valida(){
            var usuario = document.getElementById("usr").value;
            var contraseña = document.getElementById("pass").value;
            if(usuario== "" || contraseña == "")
                var usr = "http://localhost:3000/loginUsuario";
            else
                var usr = "http://localhost:3000/loginUsuario?usr="+usuario+"&pass="+contraseña;
                return usr;
        }
        /*function peticionGet(){
            xmlHttp.onreadystatechange = callback;        
            xmlHttp.open("GET","http://localhost:3000/login",true);
            xmlHttp.send();
        }
        
        window.onload = peticionGet;*/

        function MostrarMensaje(){
            var enlace = document.getElementById("Usuario");
            alert(enlace.value);
        }
        function Limpiar(){
            var usuario = document.getElementById("Usuario");
            var contraseña = document.getElementById("Contraseña");
            usuario.value= "";
            contraseña.value ="";
        }