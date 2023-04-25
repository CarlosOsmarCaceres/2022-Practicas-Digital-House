
const process = require ("process");  
const funcionesDeTareas = require("./funcionesDeTareas")

let accion = process.argv[2] && process.argv[2].toLowerCase();

switch(accion){
    case "listar": 
        let listaDeTareas  = funcionesDeTareas.leerJson()
        for (let index= 0; index < listaDeTareas.length; index++){
            console.log(listaDeTareas[index].Titulo);
            console.log("----------------------------------")
        }
        break;
    case undefined:
        console.log("Atención - Tienes que pasar una acción .")
        console.log("----------------------------------")
        break;
    default: 
        console.log("No entiendo qué quieres hacer .")
        console.log("----------------------------------")
}


function esParImpar(num){
    if(num %2 ==0){
        return "Es Par";
    }else{
        return "Es Impar";
    }
}
console.log(esParImpar(5))
