function iniciarSesion(e) {
    e.preventDefault();

    let usuario = document.getElementById("usuario").value;
    let password = document.getElementById("password").value;

    fetch("php/login.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: "usuario=" + usuario + "&password=" + password
    })
    .then(res => res.text())
    .then(data => {
        if (data === "ok") {
            window.location.href = "menuprincipal.html";
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    });
}