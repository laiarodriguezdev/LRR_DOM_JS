<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "m6";

$conn = mysqli_connect($servername, $username, $password, $dbname);

// Comprovar la connexió
if (!$conn) {
    die("Connexió fallida: " . mysqli_connect_error());
}

// Obtindre l'ID del districte de la petició POST
$districte_id = $_POST['id_districte']; 

// Fer una consulta per obtenir els barris basats en l'ID del districte
$sql = "SELECT id, name FROM barris WHERE id_districte = $districte_id ORDER BY name ASC";
$result = mysqli_query($conn, $sql);

// Comprovar si hi ha resultats
if (mysqli_num_rows($result) > 0) {
    // Construir les opcions del select dels barris
    $options = "";
    while ($row = mysqli_fetch_assoc($result)) {
        $options .= "<option value='" . $row['id'] . "'>" . $row['name'] . "</option>";
    }
    echo $options;
} else {
    echo "<option value=''>No s'han trobat barris</option>";
}

// Tancar la connexió a la base de dades
mysqli_close($conn);
?>
