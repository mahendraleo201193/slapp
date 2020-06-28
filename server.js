var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var app = express();

app.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

const db = require("./models");

db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

app.use('/public', express.static(__dirname + '/html'));

require("./routes/routes.js")(app);

app.listen(3000);

