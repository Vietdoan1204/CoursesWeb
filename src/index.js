const path = require('path');
const express = require('express');
const methodOverride = require('method-override')
const morgan = require('morgan');
const {engine} = require('express-handlebars');
const route = require('./routes');
const db = require('./config/db');


const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.engine('.hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a + b
  }
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'resources/views'));

//Routes init
route(app);
//Connect to DB
db.connect();



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})