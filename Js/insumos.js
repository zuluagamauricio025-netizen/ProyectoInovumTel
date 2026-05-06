// ELIMINAR
document.addEventListener("click", function(e) {
    if (e.target.classList.contains("delete-btn")) {
        if (confirm("¿Eliminar insumo?")) {
            e.target.closest(".item-card").remove();
        }
    }
});

// BUSCADOR
const buscador = document.querySelector(".search-box input");

if (buscador) {
    buscador.addEventListener("keyup", function() {
        const texto = this.value.toLowerCase();
        document.querySelectorAll(".item-card").forEach(item => {
            const nombre = item.querySelector(".item-name").textContent.toLowerCase();
            item.style.display = nombre.includes(texto) ? "block" : "none";
        });
    });
}

// AGREGAR
const btnAdd = document.querySelector(".add-btn");

if (btnAdd) {
    btnAdd.addEventListener("click", function() {
        const nombre = prompt("Nombre:");
        const stock = prompt("Stock:");
        const precio = prompt("Precio:");

        if (!nombre || !stock || !precio) return;

        const nuevo = document.createElement("div");
        nuevo.classList.add("item-card");

        nuevo.innerHTML = `
            <div class="item-top">
                <div class="item-name">${nombre}</div>
                <div class="badge ok">Disponible</div>
            </div>
            <div class="item-info">
                <div><strong>Stock:</strong> ${stock}</div>
                <div><strong>Precio:</strong> $${precio}</div>
            </div>
            <div class="item-actions">
                <button class="mini-btn delete-btn">Eliminar</button>
            </div>
        `;

        document.querySelector(".insumos-list").appendChild(nuevo);
    });
}