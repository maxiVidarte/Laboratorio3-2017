<?php 
sleep(2);

$numero=$_POST['numero'];
$archivo=fopen("numeros.txt","a");
fwrite($archivo,$numero);
fclose($archivo);
echo "Guardo correctamente";

?>