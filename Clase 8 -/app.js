const fs =require ("fs");//requiere fs para leer archivos
let tareasJson =fs.readFileSync("./tareas.json","utf-8");//Leemos el archivo JSON // ver que hace readFileSync
const process = require ("process")//Aqui se guarda la nueva variable. Requiere process para una accion
console.log(tareasJson)

let tareasParseadas = JSON.parse(tareasJson);
console.log(tareasParseadas[1]);

let action = process.argv[2] && process.argv[2].toLowerCase();
console.log(action)

switch (action) {
    case "listar": 
        for (let i = 0; i < tareasParseadas.length; i++){
            console.log(`Tarea: ${tareasParseadas[i].titulo} \nEstado: ${tareasParseadas[i].estado}`)
            console.log("-----------------------------------------------------")
        }
        break;
    case undefined:
        console.log("Atencion tienes que apsar una accion");
        break
    default:
        console.log("No entiendo que quieres hacer, ponete las pilas")
}

/*console.log("Tarea: " + tareasParseadas[2].titulo + " / " + "Estado: " + tareasParseadas[2].estado)// template String
console.log(`Tarea: ${tareasParseadas[2].titulo} Estado: ${tareasParseadas[2].estado}`)
*/
/*
for (let index = 0; index < tareasParseadas.length; index++){
    console.log("Tareas " + tareasParseadas[index].titulo)
}

//FOR ejemplo de for
/*for (let i = 0;i <= 2 ; i++){// se ejecuta el valor de index hasta que index llegue al valor de 2
    console.log("Vuelta " + i)

}*/
/*let i = 0; 
while(i < tareasParseadas.length){
    console.log("Tareas " + tareasParseadas[i++].titulo)

}

do{
    console.log("Tareas " + tareasParseadas[i++].titulo)

}while(i < tareasParseadas.length)*/
/*for (let index = 0; index < tareasParseadas.length ; index++){
    console.log("Tarea " + tareasParseadas[index].titulo)
}

let i = 6
console.log("While")
while (i < tareasParseadas.length) {
    console.log("Tarea " + tareasParseadas[i].titulo)
    i++
}

console.log("Do While")

do {
    console.log("Tarea ")
    i++
} while (i < tareasParseadas.length)
*/