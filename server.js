var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;
var knex = require('./db/knex');
var index = require('./routes/indexRoutes');
var todos = require('./routes/todosRoutes');
var app = express();
app.use(bodyParser.json({ extended: true}));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use('/', index);

app.use('/todos', todos);

app.listen(port, function() {
  console.log("listening on port: ", port);
});
