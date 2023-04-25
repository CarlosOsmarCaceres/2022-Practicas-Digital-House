const fs = require("fs")//Requiero fs para escribir
//1.
const logMiddleware = (req,res, next)=>{
    let texto = "El usuario ingresó a la ruta: " + req.url + "\n" // Con req.url obtenemos la ruta donde se hizo el reques
    fs.appendFileSync("src/logs/userLogs.txt", texto);//fs.appendFileSync, desde la raiz + parametro del texto que es lo que quiero escribir
                                                        //luego hacer un next
    next();
}


//2_ exporto el logMiddlware como el multer
module.exports = logMiddleware;

//3_ Colocamos el lddlware en l aplicacion en el app