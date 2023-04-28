/* This is a basic setup for a Node.js server using the Express framework. */
const express = require('express');
const app = express();
const path = require('path');
const process = require('process');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Enrutadores
const indexRouter = require("./routers/indexRouter")

app.use(express.static(path.join(__dirname, 'public')))
// Middelewaresde rutas
app.use("/", indexRouter)// gestiona ruta home - contacto

app.listen(PORT, () => console.log(`
Server listen port ${PORT}
http://localhost:${PORT}
`))