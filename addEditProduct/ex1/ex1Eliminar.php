<?php
    if(isset($_GET['id']) && !empty($_GET['id'])) {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "lrraddedit";

        $conn = new mysqli($servername, $username, $password, $dbname);
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = $conn->prepare("DELETE FROM productes WHERE id = ?");
        $sql->bind_param("i", $_GET['id']); 
        $sql->execute();

        if ($sql->affected_rows > 0) {
            echo "Producte eliminat correctament.";
        } else {
            echo "Error al eliminar el producte.";
        }

        $sql->close();
        $conn->close();
    } else {
        echo "El ID de producto no és vàlid.";
    }

    header('Location: ex1Llistat.php');
    exit();
?>
