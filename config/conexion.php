<?php
$conn = new mysqli("localhost", "root", "", "inovumtel");

if ($conn->connect_error) {
    die("Error de conexión");
}
?>