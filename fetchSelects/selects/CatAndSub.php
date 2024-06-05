<?php
$dbhost = "localhost";
$dbname = "fetchselectlaia";
$dbuser = "root";
$dbpass = "";

$connect = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

if ($connect->connect_error) {
    die("No se pudo conectar con la base de datos: " . $connect->connect_error);
}

if (isset($_POST['cat1'])) {
    $cat = $connect->real_escape_string($_POST['cat1']);
    $subCats = "SELECT * FROM subcategories WHERE categoriaId = $cat"; // Asumiendo que 'categoriaId' es el campo correcto en tu tabla de subcategorías
    $response = $connect->query($subCats);
    $subCategories = array();

    if ($response && $response->num_rows > 0) {
        while ($row = $response->fetch_assoc()) {
            $subCategoria = array(
                'subcategoriaId' => $row['subcategoriaId'],
                'subcategoriaName' => $row['subcategoriaName']
            );
            array_push($subCategories, $subCategoria);
        }
    }
    echo json_encode($subCategories);
} else {
    $sql = "SELECT * FROM categories";
    $result = $connect->query($sql);
    $categorias = array();

    if ($result && $result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $categoria = array(
                'categoriaId' => $row['categoriaId'],
                'categoriaName' => $row['categoriaName']
            );
            array_push($categorias, $categoria);
        }
    }
    echo json_encode($categorias);
}

$connect->close();
?>
