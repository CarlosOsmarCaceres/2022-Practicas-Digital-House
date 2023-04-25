const fs = require ("fs")
const autos = require("../Clase 12 - Consesionario/consesionarias")
const autosDB = JSON.parse(fs.readFileSync("./data/autos.json","utf-8"))//PArsea lo que devuelva el archivo json
const escribirJson = data => fs.writeFileSync("./data/autos.json", JSON.stringify(data),"utf-8")

const concesionarias = {
    autos: autosDB, // tenemos a disposocion en la variable autos db todos los autos de autos.json
    //etapa 1
    buscarAutos: function (patente){
        let auto =  this.autos.find((auto) =>  auto.patente == patente)
        return auto ? auto : null
        //etapa 2 min 1:16
    },
    venderAuto: function(patente){
        /*let autoEncontrado = this.bsucarAuto(patente)
        autoEncontrado.vendido = true
        return autoEncontrado*/
        //etapa 3  min 1:33
        let autoEncontrado = this.buscarAutos(patente)
        if (autoEncontrado){
            autoEncontrado.vendido = true
            //return autoEncontrado
        }
        escribirJson(this.autos)
        return "Hemos vendido el auto patente " + autoEncontrado.patente
        
    },
    autosParaLaVenta: function (){
        return this.autos.filter((auto) => auto.vendido === false)
    }

}
    

module.exports = concesionarias