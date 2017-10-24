<?php 
sleep(2);
if(isset($_POST['maximo'])&&isset($_POST['minimo']) )
{
    echo rand($_POST['minimo'],$_POST['maximo']);
}else{
    header("HTTP/1.0 500 faltan parametros"); 
    die(json_encode(array('error' => 'no le pasastes los parametros maximo y minimo')));
}
?>