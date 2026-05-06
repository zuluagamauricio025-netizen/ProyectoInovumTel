document.getElementById("formUsuario").addEventListener("submit", function(e) {
    e.preventDefault();

    let datos = new FormData(this);

    fetch("../controllers/usuarioController.php", {
        method: "POST",
        body: datos
    })
    .then(res => res.json())
    .then(data => {
        if (data.status === "ok") {
            alert("Usuario registrado correctamente");
        } else {
            alert("Error al registrar");
        }
    })
    .catch(error => console.log(error));
});