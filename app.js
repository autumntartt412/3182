var express = require('express');
var app = express();
app.set('vie engine', 'pug');
app.use('/static', express.static('public'));
app.get('/', function (req, res) {
res.render('index', { title: "hipster code", message: "this is a temp message"});
});

app.listen(3000, function() {
console.log("We are listening on port 3000.")
});