// el nombre que venga por req.body.query v a ser el nombnre autorizado??

let usersAdmin =["Ada","Greta","Vin","Tin"]

const adminMiddleware =(req,res,next)=>{
    if (usersAdmin.includes(req.query.user)) { // si el array incluye el nombre que esta llegando por req.query.user, enotces hacemos un next, de lo contrario devolvemos el mjs error.
       next(); 
    }else{
        res.send("No tienes privilegios para ingresar")
    }
}


//para aplicarlos exportamos y vamos a la ruta
module.exports = adminMiddleware;