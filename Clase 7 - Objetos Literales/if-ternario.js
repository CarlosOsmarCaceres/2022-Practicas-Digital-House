let boolean = true
if (boolean) {
    console.log("Primera expresion");
}else{
    console.log("Segunda expresion");
}

boolean ? console.log("Primera Expresion") : console.log("Segunda expresion");//Esto es un if terniario hace lo mismo

let flecha = (dato) => dato ? "Verdadero" : "Falso"

function anonima (dato){
    if(dato){
        return 
    }
}

console.log(flecha(boolean))