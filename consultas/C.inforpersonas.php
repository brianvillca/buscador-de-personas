<?php
include "./connection.php";
$query = "SELECT * FROM alumnos";
$result = mysqli_query($connection, $query);

$rows = array();
while($rec = mysqli_fetch_assoc($result)) {
    $rows[] = $rec;
}
echo json_encode($rows);
?>
