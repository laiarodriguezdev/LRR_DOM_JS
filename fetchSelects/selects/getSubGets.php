<?php
header('Content-Type: application/json');

$dbhost = "localhost";
$dbname = "fetchselectlaia";
$dbuser = "root";
$dbpass = "";

$connect = new mysqli($dbhost, $dbuser, $dbpass, $dbname);

if ($connect->connect_error) {
    die(json_encode(["error" => "No s'ha pogut connectar a la BBDD: " . $connect->connect_error]));
}

if (isset($_POST['categoria'])) {
    $cat = $_POST['categoria'];
    $subCats = "SELECT * FROM subcategories WHERE categoriaId = $cat";
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
        echo json_encode($subCategories);
    } else {
        echo json_encode(["message" => "No se encontraron subcategorías para la categoría proporcionada."]);
    }
} else {
    echo json_encode(["error" => "Parámetro 'categoria' no está establecido."]);
}

$connect->close();
?>
