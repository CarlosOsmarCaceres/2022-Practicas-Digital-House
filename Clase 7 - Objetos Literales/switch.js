let colorSemaforo = "Verde"

if (colorSemaforo.toLowerCase()==="Verde"){
    console.log("Avance")
}else if(colorSemaforo.toLowerCase()==="Amarillo"){
    console.log("Stop")
}else{
    console.log(colorSemaforo + " no es un color de semaforo")
}

//SWITCH

switch (colorSemaforo.toLowerCase()){
    case "Verde":
        console.log("Avance")
        break;
    case "Amarillo":
        console.log("Con precaucion")
        break;
    case "Rojo":
        console.log("Stop")
        break;
    default:
        console.log(colorSemaforo + " no es un color de semaforo")
}

let diaDeLasemana = "martes";

switch (diaDeLasemana){
    case "lunes":
    case "miercoles":
    case "viernes"
        console.log("Tengo clase")
        break;
    case "martes":
        console.log("no hago nada hoy")
        break;
    default:
        console.log("Que aburrido no hay clases")
}

////////////////////////////////////////////////////

// let diaDeLaSemana = "martes";

// switch (diaDeLaSemana) {
//     case "lunes":
//     case "miercoles": 
//     case "viernes": 
//         console.log("Tengo clases");
//          break;
//     case "martes": 
//         console.log("No hago nada hoy")    
//         break;
//     default: 
//      console.log("Que aburrido no hay clases")     
// }
