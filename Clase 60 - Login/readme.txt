npm i ejs cookie-parser express-validator express-session bcryptjs

2 - entrar: en packa jason main: src/app.js

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');

app.set('views engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

const userRouter = require('./routes/users')

app.use('/', userRouter);

app.listen(PORT, () => console.log("Servidor levantado en el puerto: " + PORT))


///////////////////////////////////////////////

<div class="mb-3">
    <label for="name" class="form-label">Ingrese su nombre</label>
    <input type="text" class="form-control" id="name">
</div>
//////////////////////////////////////////////////

<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
 //////////////////////////////////////////////////////
 <select class="form-select" name="color">
            <option selected>Elegí un color</option>
            <option value="red">Rojo</option>
            <option value="green">Verde</option>
            <option value="blue">Azul</option>
        </select>
        <div class="mb-3">
            <label for="email" class="form-label">Ingrese su email</label>
            <input type="email" class="form-control" id="email">
        </div>
///////////////////////////////////////////////////////////

<div class="mb-3">
          <label for="name" class="form-label">Ingrese su nombre</label>
          <input type="text" name="nombre" class="form-control" id="name">
        </div>
        <select class="form-select" name="color">
            <option selected>Elegí un color</option>
            <option value="red">Rojo</option>
            <option value="green">Verde</option>
            <option value="blue">Azul</option>
        </select>
        <div class="mb-3">
            <label for="email" class="form-label">Ingrese su email</label>
            <input type="email" name="email" class="form-control" id="email">
        </div>
        <div class="mb-3">
            <label for="edad" class="form-label">Ingrese su edad</label>
            <input type="edad" name="edad" class="form-control" id="edad">
        </div>
