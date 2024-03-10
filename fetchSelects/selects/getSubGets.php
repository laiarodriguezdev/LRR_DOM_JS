<?php
    define("DB_HOST", "localhost");
    define("DB_NAME", "fetchselectlaia");
    define("DB_USER", "root");
    define("DB_PSW", "");
    define("DB_PORT", 3306);
    $conexionBD = null;  
    $categoriaID = $_POST['categoria'];

$connect = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);

if (!$connect) {
    echo "Error: " . mysqli_connect_error();
} else {
    $consulta = "SELECT * FROM subcategories WHERE categoriaId = $categoriaID";
    $conexionBD = mysqli_query($connect, $consulta);
    $return = array();

    if($conexionBD){
        $numResultat = mysqli_num_rows(($conexionBD));
        if($numResultat > 0){
            while ($row = mysqli_fetch_assoc($conexionBD)) {
                $object = new stdClass();
                $object->subId= $row["subcategoriaId"];
                $object->name = $row["subcategoriaName"];
                $object->categoriaId = $row["categoriaId"];

                array_push($return, $object);
            }
        } else {
            echo "No s'han trobat resultats.";
        }
    } else {
        echo "Error en la consulta: " . mysqli_error($connect);
    }

    echo json_encode($return);
    $connect->close();

}
?>