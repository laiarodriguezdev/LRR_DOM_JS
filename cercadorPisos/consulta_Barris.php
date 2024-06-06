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

// Em peta aqui aixi que ho comento. 
// $districte_id = $_POST['id_districte']; 

$sql = "SELECT id, id_districte, name FROM barris ORDER BY name ASC";
$result = mysqli_query($conn, $sql);

// Comprovar si hi ha resultats
if (mysqli_num_rows($result) > 0) {
    // Construir les opcions del select dels barris
    $options = "";
    while ($row = mysqli_fetch_assoc($result)) {
        $options .= "<option value='" . $row['id_districte'] . "'>" . $row['name'] . "</option>";
    }
    echo $options;
} else {
    echo "<option value=''>No s'han trobat barris</option>";
}

// Tancar la connexió a la base de dades
mysqli_close($conn);
?>
