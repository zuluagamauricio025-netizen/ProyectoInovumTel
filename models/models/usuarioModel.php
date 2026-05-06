<?php
require_once("../config/conexion.php");

class Usuario {

    public static function insertar($nombre, $apellido, $usuario, $contrasena, $rol) {
        global $conn;

        $sql = "INSERT INTO usuarios (nombre, apellido, usuario, contrasena, rol)
                VALUES (?, ?, ?, ?, ?)";

        $stmt = $conn->prepare($sql);
        $stmt->bind_param("sssss", $nombre, $apellido, $usuario, $contrasena, $rol);

        return $stmt->execute();
    }
}
?>