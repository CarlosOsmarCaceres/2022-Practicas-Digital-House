module.exports = {
    index: (req,res)=>{
        res.render("index") // Devuelve  index ejs

    },
    admin:(req,res)=>{
        res.render("admin",{
            admin: req.query.user  //hace un res.render de la vista admin y que devuelva el nombre que me hayan pasa por QString
        })                          // admnim: es una variable se uso como tag en admin.ejs 
    }

}