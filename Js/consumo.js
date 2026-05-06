let total = 84500;

const btnAgregar = document.querySelector(".btn-primary");
const lista = document.querySelector(".consumo-list");
const totalBox = document.querySelector(".amount");

if (btnAgregar) {
    btnAgregar.addEventListener("click", function() {
        const inputs = document.querySelectorAll(".form-control");

        const nombre = inputs[4].value;
        const cantidad = parseInt(inputs[5].value);
        const precio = parseInt(inputs[6].value);

        if (!nombre || !cantidad || !precio) {
            alert("Completa todos los campos");
            return;
        }

        const subtotal = cantidad * precio;
        total += subtotal;

        const nuevo = document.createElement("div");
        nuevo.classList.add("consumo-item");

        nuevo.innerHTML = `
            <div class="consumo-top">
                <div class="consumo-name">${nombre}</div>
                <div class="badge">Nuevo</div>
            </div>
            <div class="consumo-info">
                <div><strong>Cantidad:</strong> ${cantidad}</div>
                <div><strong>Vr. Unitario:</strong> $${precio}</div>
                <div><strong>Subtotal:</strong> $${subtotal}</div>
            </div>
            <div class="consumo-actions">
                <button class="mini-btn delete-btn">Eliminar</button>
            </div>
        `;

        lista.appendChild(nuevo);
        totalBox.textContent = "$" + total.toLocaleString();
    });
}

// ELIMINAR
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest(".consumo-item").remove();
    }
});