var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('accepted request', function(tripId){
    socket.broadcast.emit('show trip', tripId);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});