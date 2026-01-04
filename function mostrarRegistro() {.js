function resaltar(fila) {
    document.querySelectorAll("tbody tr").forEach(tr => {
        tr.classList.remove("activo");
    });
    fila.classList.add("activo");
}


const elementos = document.querySelectorAll(".fade-in");

function mostrar() {
    const trigger = window.innerHeight * 0.85;
    elementos.forEach(el => {
        if (el.getBoundingClientRect().top < trigger) {
            el.classList.add("visible");
        }
    });
}

window.addEventListener("scroll", mostrar);
window.addEventListener("load", mostrar);
