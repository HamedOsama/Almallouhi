const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const errorMiddleWare = require('./middleware/error-middleware');
const ServerError = require('./interface/Error');
const api = require('./router/index');
const cookieParser = require("cookie-parser");
const morgan = require('morgan');
require('./connection/db')

const PORT = process.argv[2] || 5000

// middleware
// app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser());
app.use(morgan('dev'))

// cors
app.use(cors());

app.use('/images', express.static(path.join(__dirname, "./images")))

// homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

// api routes
app.use('/api/v1', api);

app.use((_, __, next) => {
  next(ServerError.badRequest(404, 'page not found'))
})
// 
app.use(errorMiddleWare);

app.listen(PORT, () => { console.log('server is run on port ' + PORT) })