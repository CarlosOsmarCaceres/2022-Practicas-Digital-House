const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const expressSession = require('express-session');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"));

const userRouter = require('./routes/users')

app.use('/', userRouter);

app.listen(PORT, () => console.log("Servidor levantado en el puerto: " + PORT))
