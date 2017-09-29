<?php 
$listaProductos = $_POST["json"];
//var_dump($listaProductos);
$myjson= json_decode($listaProductos);
echo $myjson;
$myString= json_encode($myjson);
//var_dump($myString);


?>