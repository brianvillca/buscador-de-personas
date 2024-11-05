<?php
include "./connection.php";
$actualName = $_POST['nombre'];
$newName = $_POST['nuvnombre'];
$actualApellido = $_POST['apellido'];
$newApellido = $_POST['nuvapellido'];

$query = "UPDATE alumnos 
SET nombre = '$newName', apellido = '$newApellido' 
WHERE nombre = '$actualName' AND apellido = '$actualApellido'";
mysqli_query($connection,$query);
echo "ok";
?>