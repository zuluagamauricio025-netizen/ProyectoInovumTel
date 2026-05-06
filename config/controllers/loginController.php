<?php

include("../../config/conexion.php");

$usuario = $_POST['usuario'];
$contrasena = $_POST['contrasena'];

$sql = "SELECT * FROM usuarios 
        WHERE usuario='$usuario' 
        AND contrasena='$contrasena'";

$resultado = $conn->query($sql);

if($resultado->num_rows > 0){
    echo "ok";
}else{
    echo "error";
}

?>