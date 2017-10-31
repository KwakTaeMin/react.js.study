var express = require('express');
var path = require('path');
var http = require('http');
var morgan = require('morgan');
var app = express();
http = http.Server(app);
var io = require('socket.io')(http);

app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('chat message', function(msg){
      console.log('message: ' + msg);
      io.emit('server message', msg);
    });

    socket.on('disconnect', function() {
        console.log('user disconnect');
    });
});

http.listen(4000, function(){
    console.log("listening on 4000 ");
});
