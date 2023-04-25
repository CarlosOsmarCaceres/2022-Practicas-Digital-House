let palabra="Palabra"
           //0123456    
console.log(palabra[0])
//LENGTH
console.log("-----------------LENGTH-------------------")
let texto="Me encanta programacion";
console.log(texto.length)// length para contar caracteres

//INDEXOF
console.log("-----------------INDEXOF-------------------")
console.log(texto.indexOf("Encanta")) //indexof devuelve la posicion  y si no la encuentea devuelve -1
console.log(texto.indexOf("encanta"))

//SLICE
console.log("-----------------SLICE-------------------")
console.log(texto.slice(3))
console.log(texto.slice(5,10))//aqui se puede complementar con index of y luego slice para traer la palabra

//TRIN
console.log("-----------------TRIN-------------------")
let nombreConEspacios="         Juan"
console.log(nombreConEspacios)
console.log(nombreConEspacios.trim())// TRIN quita los espacios de adelante y de atras

//SPLIT
console.log("-----------------SPLIT-------------------")
console.log(texto.split(" "))//saca los elementos de la palabra , por ejemplo el espacio " "

//REPLACE
console.log("-----------------REPLACE-------------------")
console.log(texto.replace("programacion","la Play"))// a traves de dos argumento reemplazo una palabra por otra.