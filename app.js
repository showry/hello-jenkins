var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello sample devops demo1 ');
  
});
 
app.listen(process.env.PORT || 5000);
 
module.exports = app;
