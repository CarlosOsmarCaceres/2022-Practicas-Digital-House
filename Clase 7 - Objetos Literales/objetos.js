// estamos hablando de objetos no de clase.
//las acciones las vamos a representar con funciones
//las funciones que son aplicadas a funciones son metodos
//la funcion es un objeto de JS
let mesa={
    cantidadDePatas:4,
    forma:"cuadrada",
    material:"madera",
    altura:0.75,   
    desplegar:function(){
        return "Soy una mesa desplegable"
    }
}

console.log(mesa);
console.log(mesa.cantidadDePatas);
mesa.cantidadDePatas=3;
console.log(mesa.cantidadDePatas)
mesa.superficie=25;
console.log(mesa);
console.log(mesa.desplegar())

let personaje={
    tipo:"soldado",
    vida:100,
    atacar:function(){
        return "Veni que te mato";
    },
    mover:function(direccion){
        return "me movi hacia"+direccion;
    },
}

console.log(personaje.mover("Adelante"));
//INSTANCIAS
// Funciones constructoras comienza con mayuscula, es una matriz
function Mesa(patas,forma,material,altura){
    this.cantidadDePatas=patas;
    this.forma=forma;
    this.material=material;
    this.desplegar=function(){
        return "Soy una mesa desplegable"
    }
}
// Instanciar un objeto (MESA)
let mesaDeDosPatas=new Mesa(2,"Rectangular","Metal y Vidrio",80)

console.log(mesaDeDosPatas)

let mesaDeMadera=new Mesa(4,"Redonda","Madera",75)
mesaDeMadera.otroDato=function(){
    "Otro dato";
}

console.log(mesaDeMadera.desplegar())
////////////////
function soldado(name,attack){
    this.name=name;
    this.attack=attack;
    this.atacar=function(){
        return"El valro del ataque es "+this.attack
    }
}

let arquero=new soldado("Legolas",20)
console.log(arquero.atacar())