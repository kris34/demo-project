const express = require('express');
const hbs = require('express-handlebars').create({
  extname: '.hbs',
});

const homeController = require('./controllers/home');

const app = express();
const port = 5555;

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(homeController);

app.listen(port, () => console.log(`Listening on port ${port}`));
