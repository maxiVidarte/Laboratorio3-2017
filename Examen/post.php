<?php 
if (isset($_POST["titulo"])&&isset($_POST["header"])&&isset($_POST["post"])&&isset($_POST["autor"]))
{
		echo "<h1>".$_POST["titulo"]."</h1><h2>".$_POST["header"]."</h2><label type='text'>".$_POST["post"]."<br><label type='text'>".$_POST["autor"];
}
 ?>