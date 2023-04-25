//const moviesController = require("../../controllers/moviesController");
const db = require("../../database/models");
const { validationResult } = require("express-validator");
module.exports = {
    create: (req, res)=>{
        let errors =validationResult(req);
        if (errors.isEmpty()) {
            db.Movie.create(
                {
                    title: req.body.title,
                    rating: req.body.rating,
                    awards: req.body.awards,
                    release_date: req.body.release_date,
                    length: req.body.length,
                    genre_id: req.body.genre_id
                }
            )
            .then((movie)=> {
                let response = {
                    meta:{
                        status: 201,
                        edpoint: "/api/movies" + movie.id,
                    },
                    data: movie
                }
                res.status(201).json(response);
            })  
            .catch((error)=>{
                res.status(400).json({
                    error: error,
                });
            });                  
        }else{
            res.send(errors)
        }
    },
    destroy: (req, res)=>{
    },
};