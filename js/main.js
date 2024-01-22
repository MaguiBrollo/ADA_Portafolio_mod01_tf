const nav = document.getElementById("nav")
const abrir = document.getElementById("abrir")
const cerrar = document.getElementById("cerrar")

const cerrar_h = document.getElementById("cerrar_h")
const cerrar_p = document.getElementById("cerrar_p")
const cerrar_c = document.getElementById("cerrar_c")
const cerrar_co = document.getElementById("cerrar_co")


abrir.addEventListener("click", () => {
    nav.classList.add("visible");
}
)

cerrar.addEventListener("click", ()=> {
    nav.classList.remove("visible");
}
)

cerrar_h.addEventListener("click", ()=> {
    nav.classList.remove("visible");
}
)

cerrar_p.addEventListener("click", ()=> {
    nav.classList.remove("visible");
}
)

cerrar_c.addEventListener("click", ()=> {
    nav.classList.remove("visible");
}
)

cerrar_co.addEventListener("click", ()=> {
    nav.classList.remove("visible");
}
)