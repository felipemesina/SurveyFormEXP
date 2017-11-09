const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();
const port = process.env.PORT || 8000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(session({ secret: 'secret1' }));
app.use(express.static(__dirname + '/static'));
app.use(bodyParser.urlencoded({extended: true }));


require('./routes/routes.js')(app);
app.listen(port);
