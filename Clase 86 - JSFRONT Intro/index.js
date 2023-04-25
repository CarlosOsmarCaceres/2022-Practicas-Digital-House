document.querySelector("h1").innerHTML += " Jonatan"
document.querySelector("h1").style.color = "Red"
document.querySelector("h1").style.display = "none"

let elemento1 = document.querySelector(".clase1");
let elementosClase1 = document.querySelectorAll(".clase1")

alert("Alerta!")
let respuesta = prompt("Escribi tu nombre")
console.log(respuesta)

let eliminar = confirm("¿Estas seguro que queres eliminar?")
console.log(eliminar)

/* console.log(elemento1)
console.log(elementosClase1) */

/* for (let index = 0; index < elementosClase1.length; index++) {
    const element = elementosClase1[index];
    element.style.color = "yellow"
} */

let elementoId = document.getElementById('identificador')

console.log(elementoId.innerHTML)
elementoId.innerText += " Jonatan"

let lista = document.querySelector("ul");

let nombres = ["Jhan", "Ulises", "Robert"]

for (let index = 0; index < nombres.length; index++) {
    const element = nombres[index];
    lista.innerHTML += "<li>" + element + "</li>"
}

elementosClase1[0].classList.remove("error")
elementosClase1[0].classList.add("ok")


elementosClase1[1].addEventListener("click", () => {
    elementosClase1[1].classList.toggle("error")
    document.body.classList.toggle("dark")
})


