function MostrarFormBotones(){
var texto = '<div class="container"> 
<form class="form-ingreso" onsubmit="GuardarCD();return false">   <button  class="btn btn-lg btn-info" >1- UNO </button></br><button  class="btn btn-lg btn-danger " >2- DOS </button></br><button  class="btn btn-lg btn-success" >3-TRES</button>  </br>             </form>    </div>';

$("#principal").html(texto);


}
function ocultarBoton(){
    $("#uno").hide;
}