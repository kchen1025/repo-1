var express = require('express');
var app = express();
app.use(express.logger());


var dummy = fs.readFileSync(index.html,String);

var buffer = new Buffer(80);
buffer.write(dummy,"utf-8");
var output = buffer.toString("utf-8",0,20);


app.get('/', function(request, response) {
  response.send(output);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});