const express = require ("express")
const app = express()
const path = require("path")
const PORT = 3000
app.use(express.static(path.join(__dirname,"public")))

app.get ("/", (req, res) => {
    res.sendFile(path.join__direname,"./views/home.html")
})


app.listen(PORT, () => console.log(
    "Servidor escuchando el puerto ${PORT}http://localhost:${PORT}"
    ))