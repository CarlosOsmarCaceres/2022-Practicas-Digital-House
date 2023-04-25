let frutas = ["Banana", "Frutilla", "Pera"];
console.log("Array original: " + frutas)//Array original: Banana,Frutilla,Pera => es strig

// //PUSH => agrega un elemento al fianl
frutas.push("Manzana")
console.log(frutas)//[ 'Banana', 'Frutilla', 'Pera', 'Manzana' ]
console.log(frutas.length)//4
const newArray = frutas.push("Pera")//5 => // Se está almacenando en el newArrays el nuevo indice

console.log(newArray)// 5
//console.log(frutas)//[ 'Banana', 'Frutilla', 'Pera', 'Manzana', 'Pera' ]
frutas.push("Uva", "Naranja")
console.log(frutas)//[
//     'Banana',  'Frutilla',
//     'Pera',    'Manzana',
//     'Pera',    'Uva',
//     'Naranja'
//   ]
console.log(newArray)//5
console.log(newArray)

// //POP elimina la ultima sin necesidad de nombrarla o llamarla, es por defaul frutas.pop()
const frutaEliminada = frutas.pop()
console.log(frutaEliminada)//Naranja
console.log(frutas)//[ 'Banana', 'Frutilla', 'Pera', 'Manzana', 'Pera', 'Uva' ]
console.log(newArray)//5
// //SHIFT Elimina el primer elemendo dentro de un array frutas.shift()
frutas.shift()
console.log(frutas)

// //UNSHIFT Agrega uno o varios elementos dentro de un array
frutas.unshift("Kiwi", "Mandarina")
console.log(frutas)//[ 'Kiwi', 'Mandarina', 'Frutilla', 'Pera', 'Manzana', 'Pera', 'Uva' ]

// //JOIN Une los elementos por coma y si lo especificas el el simbolo que elijas. 
console.log(frutas.join(" - "))//Kiwi - Mandarina - Frutilla - Pera - Manzana - Pera - Uva

// //INDEXOF busca ene l array el elemento que riciba como parametro
console.log(frutas.indexOf('Manzana'))//4
console.log(frutas.indexOf('Tomate'))//-1
let frutaABuscar = "Pera"

if(frutas.indexOf(frutaABuscar) === -1){
     console.log("No encontramos la fruta " + frutaABuscar)
 }else{
     console.log("La fruta que buscabas se encuentra en la posición " + frutas.indexOf(frutaABuscar))
 }
    //La fruta que buscabas se encuentra en la posición 3

// //METODO LASTINDEXOF busca desde atras a adelante en el array el elemento que riciba como parametro

if(frutas.lastIndexOf(frutaABuscar) === -1){
     console.log("No encontramos la fruta " + frutaABuscar)
 }else{
     console.log("La fruta que buscabas se encuentra en la posición " + frutas.indexOf(frutaABuscar))
     }
     //La fruta que buscabas se encuentra en la posición 3

// //INCLUDES busca ene l array el elemento que riciba como parametro pero retorna un booleano
console.log(frutas.includes("Tomate")) // false
console.log(frutas.includes("Pera")) // true

let users = [ "mail@mail.com", "mail2@mail.com", "mail3@mail.com" ]
let userMail = "maiil@mail.com"

if(users.includes(userMail)){
     console.log("Email ya registrado")
 }else{
     users.push(userMail)
 }

 console.log(users)//[
//     'mail@mail.com',
//     'mail2@mail.com',
//     'mail3@mail.com',
//     'maiil@mail.com'
//   ]
