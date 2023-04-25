/* let parrafos = document.getElementsByTagName('p')
console.log(parrafos)
let titulo = document.getElementById('title')
titulo.innerText = "Otro titulo"
let parrafosRojos = document.getElementsByClassName('text-danger')
console.log(parrafosRojos)
let todosLosParrafos = document.querySelectorAll('p')
console.log(todosLosParrafos)
let primerParrafo = document.querySelector('p')
console.log(primerParrafo) */

let button = document.querySelector("btn-menu")
let menu =document.querySelector("#menu")

button.addEventListener("click", function(){
    //console.log("Hiciste Click")
    //menu.style.display = "block"
    /* if(menu.classList.contains('active')){
        menu.classList.remove('active')
    }else{
        menu.classList.add('active')
    } */
    menu.classList.toggle("active")
})