<?php
header('Content-Type: application/json');

$dbhost = "localhost";
$dbname = "fetchselectlaia";
$dbuser = "root";
$dbpass = "";

$connect = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

if ($connect->connect_error) {
    die("No s'ha pogut connectar a la BBDD: " . $connect->connect_error);
}

    $sql = "SELECT * FROM categories";
    $result = $connect->query($sql);
    $categories = array();

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $categoria = array(
                'categoriaId' => $row['categoriaId'],
                'categoriaName' => $row['categoriaName']
            );
            array_push($categories, $categoria);
        }
    }
    echo json_encode($categories);

$connect->close();
?>
