<?
define("DB_HOST", "localhost");
define("DB_NAME", "addedit");
define("DB_USER", "root");
define("DB_PSW", "");
define("DB_PORT", 3306);

$connect = mysqli_connect(DB_HOST, DB_USER, DB_PSW, DB_NAME, DB_PORT);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
    
if(isset($_POST["nomProducte"]) && !empty($_POST["nomProducte"])){
    if($_POST["addEdit"]==0){
        $sql = "INSERT INTO productes (nom) VALUES ('" . $_POST["nomProducte"] ."')";
    }else{
        $sql = "UPDATE productes SET nom='" . $_POST["nomProducte"] . "' WHERE id=" . $_POST["addEdit"];
    }
    

    echo $sql;

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }

    $conn->close();

}

header('Location: ex1Llistat.php');

?>