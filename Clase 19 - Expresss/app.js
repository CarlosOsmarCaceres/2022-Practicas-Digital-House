const express = require('express');
const app = express();
const PORT = 3000;

/* app.get('/', (req, res) => {
    res.send('Hola Mundo!')
}) */
app.get('/', (req, res) => {
    res.sendFile()
})

app.listen(PORT, () => console.log(`Servidor levantado en el puerto ${PORT}`))
