let clubesUno = ["Sacachispas", "Atlas", "Atlanta"];
let clubesDos = ["All Boys", "Villa Dalmine", "Nueva Chicago"];
let todosLosClubes = [...clubesUno, "Brown", ...clubesDos]
console.log(todosLosClubes)

let OtrosClubes = ["BArcelona", "Madrid", "Juventus"]
console.log(OtrosClubes)

let mesaDeMadera = {
    material: "Madera",
    altura: 0.8,
}

let mesaDeMaderaDos = {
    ...mesaDeMadera,
    altura: 0.9,
    cantidadDePatas: 4
}

console.log(mesaDeMaderaDos)

let notas = [9.3, 2.5, 7.8, 5.5, 10]
console.log(...notas)
console.log(Math.min(...notas))

function miFuncion (p1,p2, ...otro){
    return p1 + p2 + otro
}

console.log(miFuncion("Hola", "Como va", 2, true))