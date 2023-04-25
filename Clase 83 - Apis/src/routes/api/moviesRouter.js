const express = require("express");
const router = express.Router();
const {create, destroy} = require("../../controllers/moviesController")
const moviesValidator = require("../../validations/movieValidator")

router.post("/api/movies",moviesValidator ,create);
router.delete("/api/movies/id",destroy);



module.exports = router;