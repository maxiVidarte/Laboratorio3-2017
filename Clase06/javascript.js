function logInPOST()
{
    var datosLogin = {
        email : $("#email").val(), 
        password : $("#password").val()
    }

    var datosLoginString = JSON.stringify(datosLogin);

    var URL = "http://localhost:1337/login";
    var DATA = datosLoginString;
    
    $.post(URL,DATA,retornoLogin);
}

function retornoLogin(dato) {
    console.info(dato);
    var test = dato.preferencias;
    console.log(test);
    
    localStorage.setItem("Email", $("#email").val());
    localStorage.setItem("Preferencias", test);
    window.location.replace("index.html");
}

function postearBlog()
{
    var datosPost = {
        "title" : $("#titulo").val(), 
        "header" : $("#cabecera").val(),
        "posttext" : $("#texto").val(),
        "author" : localStorage.getItem("Email")
    }

    var datosPostString = JSON.stringify(datosPost);

    var URL = "http://localhost:1337/postearNuevaEntrada";
    var DATA = datosPostString;
    
    $.post(URL,DATA,retornoPosteo);
    $('#spinner').show();
    $('#formulario').hide();
}

function retornoPosteo(dato) {
    $('#spinner').hide();
    console.info(dato);

    var tituloPost = dato.title;
    var headerPost = dato.header;
    var textoPost = dato.posttext;
    var fechaPost = dato.date;
    var autorPost = dato.author;

    var viejoPosteo = $("#posteos").html();    

    $("#posteos").html(viejoPosteo+'<div class="col-sm-4"><h1>'+tituloPost+'</h1><h3>'+headerPost+'</h3><p>'+textoPost+'</p><p>Posteado por '+autorPost+' el '+fechaPost+'</p></div>');   
}

function cancelarPost(){
    $('#formulario').hide();
}