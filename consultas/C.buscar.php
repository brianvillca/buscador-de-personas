<?php
include "connection.php";
$query = "SELECT * FROM alumnos WHERE nombre LIKE'%" . $_POST['nombre'] . "%'LIMIT 5";
$result =  mysqli_query($connection, $query);


$rows = array();

while($rec = mysqli_fetch_assoc($result)) {
    $rows[] = $rec;
}

if(empty($rows)) {
    echo "no se encontró nada";  
} else if(!empty($rows)) {
    echo json_encode($rows) ;
} else {
    echo json_encode($rows) ;
}
?>