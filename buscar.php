<?php
include "./connection.php";
$query = "SELECT * FROM alumnos where nombre LIKE '%" . $_POST['nombre'] . "%'";
$result =  mysqli_query($connection, $query);


$rows = array();

while($rec = mysqli_fetch_assoc($result)) {
    $rows[] = $rec;
}



/*
echo "<pre>";
print_r($rows);
echo "</pre>";
*/

if(count($rows) == 0) {
    echo "{no se encontro}";  
} else if(count($rows) == 1) {
    echo json_encode($rows) ;
} else {
    echo json_encode($rows) ;
}


//echo "ok";



//print_r($_POST);
?>