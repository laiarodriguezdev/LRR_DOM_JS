<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Laia Rodríguez Ramos</title>
</head>
<body>

<?php

    define("DB_HOST", "localhost");
    define("DB_NAME", "fetchselectlaia");
    define("DB_USER", "root");
    define("DB_PSW", "");
    define("DB_PORT", 3306);

    $connect = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);
    $categoria = 1;

    if (!$connect) {
        echo "Error: " . mysqli_connect_error();
    } else {
        $consulta = "SELECT * FROM subcategories WHERE categoriaId = $categoria";
        $connexio = mysqli_query($connect, $consulta);
        $return = array();

        if($connexio){
            $numResultat = mysqli_num_rows(($connexio));
            if($numResultat > 0){
                while ($row = mysqli_fetch_assoc($connexio)) {
                    $object = new stdClass();
                    $object->subId= $row["subcategoriaId"];
                    $object->name = $row["subcategoriaName"];
                    array_push($return, $object);
                }
            } else {
                echo "No s'han trobat dades.";
            }
        } else {
            echo "Error en la consulta: " . mysqli_error($connect);
        }

        echo json_encode($return);
        $connect->close();

    }
?>
</body>
</html>