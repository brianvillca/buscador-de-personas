<?php
include "connection.php";
$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$verify = "SELECT * FROM alumnos WHERE nombre LIKE '$nombre' AND apellido LIKE '$apellido'";
$query= "INSERT INTO alumnos (nombre, apellido) values('$nombre','$apellido')";
$verify_query = mysqli_query($connection,$verify);
if (mysqli_num_rows($verify_query) == 0) {
    mysqli_query($connection,$query);
} else {
    if (mysqli_num_rows($verify_query) > 0) {
        echo "exists";
    }
}

?>