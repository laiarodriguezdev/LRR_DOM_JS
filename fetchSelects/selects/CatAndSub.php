<?php
$dbhost = "localhost";
$dbname = "fetchselectlaia";
$dbuser = "root";
$dbpass = "";

$connect = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

if ($connect->connect_error) {
    die("No sha pogut connectar amb la BBDD: " . $connect->connect_error);
}

if (isset($_POST['cat1'])) {
    $cat = $connect->real_escape_string($_POST['cat1']);
    $subQuery = "SELECT * FROM subcategories WHERE categoriaId = $cat";
    $response = $connect->query($subQuery);
    $subcategories = array();

    if ($response && $response->num_rows > 0) {
        while ($row = $response->fetch_assoc()) {
            $subCategoria = array(
                'subcategoriaId' => $row['subcategoriaId'],
                'subcategoriaName' => $row['subcategoriaName']
            );
            array_push($subcategories, $subCategoria);
        }
    }
    echo json_encode($subcategories);
} else {
    $catQuery = "SELECT * FROM categories";
    $result = $connect->query($catQuery);
    $categories = array();

    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $categoria = array(
                'categoriaId' => $row['categoriaId'],
                'categoriaName' => $row['categoriaName']
            );
            array_push($categories, $categoria);
        }
    }
    echo json_encode($categories);
}

$connect->close();
?>
