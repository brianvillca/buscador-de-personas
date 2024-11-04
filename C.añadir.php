<?php
include "connection.php";
$query= "INSERT INTO alumnos (nombre, apellido) values('" .$_POST['nombre']. "','" .$_POST['apellido'].   "')";
mysqli_query($connection,$query);

echo"ok";
?>