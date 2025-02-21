const express = require('express'); 
const hbs = require('hbs');
const wax = require('wax-on');

const app = express();
app.set('view engine', 'hbs');
app.use(express.static('public'));

app.set('views', './views');
wax.on(hbs.handlebars);
wax.setLayoutPath('./views/layouts');

const helpers = require('handlebars-helpers');
helpers({
  'handlebars': hbs.handlebars
})

// Route to render base.hbs
app.get('/', (req, res) => {
  console.log("Rendering base.hbs");  // Debugging line
  res.render('base');  // Renders views/base.hbs with layout
});


const PORT = 5500;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});