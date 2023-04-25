const db = require ("../../database/models");

module.exports = {
    list: (req, res)=> {
        db.Genre.findAll()
        .then((genres)=>{
            let response = {
                meta: {
                    status: 200, //Es recurso encontrado
                    url: "/api/genres",
                    total: genres.length
                },
                data: genres,
            }
            res.json(response)
        })
        .catch((error)=>{
            let response = {
                meta:{
                    status: 400,
                    url: "/api/genres",
                },
                error: error
                // error: {
                //     msg: error
                // }
            }
            res.json(response)
        })
    },
    detail: (req,res)=>{
        db.Genre.findByPk(req.params.id)
        .then((genre)=>{
            let response = {
                meta: {
                    status: 200, //Es recurso encontrado
                    url: "/api/genres" + req.params.id,
                },
                data: genre,
            }
            res.json(response)
        })
        .catch((error)=>{
            let respuesta = {
                meta:{
                    status: 404,
                    url: "/api/genres",
                },
                error: error
            }
            res.json(respuesta)
        })
    }
}