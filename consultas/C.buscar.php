<?php
include "connection.php";
$query = "SELECT * FROM alumnos WHERE nombre LIKE'%" . $_POST['nombre'] . "%'LIMIT 5";
$result =  mysqli_query($connection, $query);


$rows = array();

while($rec = mysqli_fetch_assoc($result)) {
    $rows[] = $rec;
}

if(count($rows) == 0) {
    echo "{no se encontro}";  
} else if(count($rows) == 1) {
    echo json_encode($rows) ;
} else {
    echo json_encode($rows) ;
}
?>