var express = require('express');
var app = express();
var path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', function(request, response){
	response.render('index.ejs');
});

app.listen(3000, function(){
	console.log("Server is now running on port 3000");
});