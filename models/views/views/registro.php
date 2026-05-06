<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registro Usuario</title>
</head>
<body>

<form id="formUsuario">

    <input type="text" name="nombre" placeholder="Nombre" required>
    <input type="text" name="apellido" placeholder="Apellido" required>
    <input type="text" name="usuario" placeholder="Usuario" required>
    <input type="password" name="contrasena" placeholder="Contraseña" required>

    <select name="rol">
        <option value="admin">Admin</option>
        <option value="empleado">Empleado</option>
    </select>

    <button type="submit">Registrar</button>

</form>

<!-- AQUÍ CONECTAS TU JS -->
<script src="../js/usuarios.js"></script>

</body>
</html>