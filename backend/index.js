const express = require('express'); 
const hbs = require('hbs');
const wax = require('wax-on');

const app = express();
app.set('view engine', 'hbs');

wax.on(hbs.handlebars);
wax.setLayoutPath('./frontend/comic')

app.get('/', (req, res) => {
  res.render('index');
});


app.listen(3000, ()=>console.log("Server started"))