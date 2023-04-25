




const fs = require('fs');
const autosDB = JSON.parse(fs.readFileSync('./data/autos.json', 'utf-8'))
const escribirJson = (data) => fs.writeFileSync('./data/autos.json', JSON.stringify(data), 'utf-8')

const concesionarias = {
    autos: autosDB,
    buscarAuto: function (patente) {
        /* let autoEncontrado = [] 
        this.autos.forEach(auto => {
            if(auto.patente == patente){
                autoEncontrado.push(auto)
            }
        });
        if(autoEncontrado.length > 0){
            return autoEncontrado[0]
        }else{
            return null
        }
        */
        //let autoEncontrado = this.autos.filter(auto => auto.patente == patente);
        let auto = this.autos.find((auto) => auto.patente == patente);
        return auto ? auto : null
        /* if(auto){
            return auto
        }else{
            return null
        }  */ 

    },

};


module.exports = concesionarias
