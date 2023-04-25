
const express = require ("express");     // requiero libreria express
const app = express() // ejecucion del páquete expres, devuelve umuchas propiedades o metodos
                        //Guardo en app las propiedades o metodos de la ejecicion express
const path = require("path") // path permite trabajar con rutas

const PORT = 3000

app.use(express.static("image")) //aplica milwares a nivel aplicacion

/* Routing*/
//res.send("HOMEPAGE")
app.get ("/", function(req, res){ // primer parametro es solicitud y segundo parametro respuesta
    res.sendFile(path.join(__dirname, "/views/home.html")) //dirname trae la ruta completa 
                                                            //sendFile recibe el parametro y busca el archivo


                                                        })  
    // HOMEPAGE
    app.get ("/contact", function(req, res){ // primer parametro es solicitud y segundo parametro respuesta
    //let mensaje = "CONTACTO"
    //res.send(mensaje)  // "/contact" es la ruta que vamos a crear
    res.sendFile(path.join(__dirname, "/views/contac.html"))

})  // CONTAC
app.get ("/about", function(req, res){ // primer parametro es solicitud y segundo parametro respuesta
    //res.send("NOSOTROS")
    res.sendFile(path.join(__dirname, "/views/about.html"))

})  // ABOUT

app.listen(PORT, function(){
    console.log("Servidor escuchando el puerto ${PORT}, http://localhost:${PORT}")
})
