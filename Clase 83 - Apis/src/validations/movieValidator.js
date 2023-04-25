const {check} = require("express-validator");

module.exports = [
    check("title").notEmpty().withMessage("titulo requerido").bail()
    .isAlphanumeric().withMessage("titulo invalido"),
    check("rating").notEmpty().withMessage("Rating requerido").bail()
    .isDecimal().withMessage("Solo nuemeros"),
    check("awards").notEmpty().withMessage("Awards requerido").bail()
    .isNumeric().withMessage("Solo numeros"),
    check("release_date").notEmpty().withMessage("release_date requerido").bail()
    .isDate().withMessage("formato de fecha invalido"),
    check("length").isNumeric().withMessage("Solo numeros"),
    check("genre_id").isNumeric().withMessage("Solo numeros"),

]
