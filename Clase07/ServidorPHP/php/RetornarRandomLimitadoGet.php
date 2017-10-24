<?php 
sleep(2);
if(isset($_GET['maximo'])&&isset($_GET['minimo']) )
{
    echo rand($_GET['minimo'], $_GET['maximo']);
}else{
    header("HTTP/1.0 404 faltan parametros"); 
    die(json_encode(array('error' => 'no le pasastes los parametros maximo y minimo')));
}
?>