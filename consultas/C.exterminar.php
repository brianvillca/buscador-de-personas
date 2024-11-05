<?php
include "./connection.php";
$query ="DELETE FROM alumnos where nombre = '" . $_POST['nombre'] . "'";
mysqli_query($connection,$query);

echo"ok";
?>