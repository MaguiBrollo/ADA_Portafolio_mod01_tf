const nav = document.querySelector("#nav")
const abrir = document.querySelector("#abrir")
const cerrar = document.querySelector("#cerrar")

const cerrar_h = document.querySelector("#cerrar_h")
const cerrar_p = document.querySelector("#cerrar_p")
const cerrar_c = document.querySelector("#cerrar_c")
const cerrar_co = document.querySelector("#cerrar_co")


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