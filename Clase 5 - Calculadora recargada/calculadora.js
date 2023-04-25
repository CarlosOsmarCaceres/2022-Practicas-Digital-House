const sumar = require('./funciones/sumar')
const restar = require('./funciones/restar')
const multiplicar = require('./funciones/multiplicar')
const dividir = require('./funciones/dividir')
const process = require('process')
//console.log(process.argv[1])

let operacion = process.argv[2].toLowerCase()   // Guarda la palabra de la posicion. Ejemplo Sumar
let numero1 = Number(process.argv[3])           // Captura la posicion 3 numero1 
let numero2 = Number(process.argv[4])           // Captura la posicion 4 numero2

if(operacion === "sumar"){
    console.log("**********************************")
    console.log("El resultado de la suma es: " + sumar(numero1, numero2))
    console.log("**********************************")
}

if(operacion === "restar"){
    console.log("**********************************")
    console.log("El resultado de la resta es: " + restar(numero1, numero2))
    console.log("**********************************")
}

if(operacion === "multiplicar"){
    console.log("**********************************")
    console.log("El resultado de la multiplicación es: " + multiplicar(numero1, numero2))
    console.log("**********************************")
}

if(operacion === "dividir"){
    if(numero1 !== 0 && numero2 !== 0){
        console.log("**********************************")
        console.log("El resultado de la división es: " + dividir(numero1, numero2))
        console.log("**********************************")
    }else{
        console.log(dividir(numero1, numero2))
    }
}



