const btnRegister = document.querySelector(".btn-register");
const btnCancel = document.querySelector(".btn-cancel");

if (btnRegister) {
    btnRegister.addEventListener("click", function() {
        const nombre = document.querySelector("input[type='text']").value;

        if (!nombre) {
            alert("Ingrese el nombre");
            return;
        }

        alert("Cliente registrado correctamente");
    });
}

if (btnCancel) {
    btnCancel.addEventListener("click", function() {
        if (confirm("¿Cancelar?")) {
            window.location.href = "menuprincipal.html";
        }
    });
}