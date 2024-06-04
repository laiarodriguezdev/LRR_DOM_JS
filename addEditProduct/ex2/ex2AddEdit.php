<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "lrraddedit";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if (isset($_POST["nomProducte"]) && !empty($_POST["nomProducte"])) {
    $nomProducte = $conn->real_escape_string($_POST["nomProducte"]);
    $addEdit = intval($_POST["addEdit"]);
    
    if ($addEdit == 0) {
        $sql = "INSERT INTO productes (nomProducte) VALUES ('$nomProducte')";
    } else {
        $sql = "UPDATE productes SET nomProducte='$nomProducte' WHERE id=$addEdit";
    }

    echo $sql;

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();
    
    header('Location: ex2FormLlistat.php');
    exit();  
} else {
    echo "No product name provided";
}
?>
