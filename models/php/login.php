<?php
include("conexion.php");

$usuario = $_POST['usuario'];
$password = $_POST['password'];

$sql = "SELECT * FROM usuarios WHERE usuario='$usuario' AND password='$password'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "ok";
} else {
    echo "error";
}
?>