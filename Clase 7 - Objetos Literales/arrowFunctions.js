//Function
// tienen prioridad las funciones arrow
const sumar=(a,b) => a+b;
const restar=(a,b) => a-b;
const multiplicar=(a,b) => a*b;
const dividir=(a,b) => a/b;
console.log(sumar(2,2));

const restar=function(a,b){
    return a-b;
}

const saludar=nombre=>{
    let saludo="Buen dia"
    return saludo+" "+nombre;
}

const saludar2=nombre=>"Hola"+nombre;

/////////////////////////////////

//Function
// const sumar = (a, b) => a + b; 
// const restar = (a, b) => a - b; 
// const multiplicar = (a, b) => a * b; 
// const dividir = (a, b) => a / b; 


// console.log(sumar(2, 2))

// const saludar = nombre => {
//     let saludo = "Buena dia"
//     return saludo + " " + nombre
// }


// const saludar2 = nombre => "Hola, " + nombre
