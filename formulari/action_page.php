<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Recibir los datos del formulario
  $usuari = $_POST["usuari"];
  $email = $_POST["email"];
  $contrasenya = $_POST["contrasenya"];
  $codip = $_POST["codip"];

  echo "Usuari: " . $usuari . "<br>";
  echo "Correu electrònic: " . $email . "<br>";
  echo "Contrasenya: " . $contrasenya . "<br>";
  echo "Codi Postal: " . $codip . "<br>";
}
?>
