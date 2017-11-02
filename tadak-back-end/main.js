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


var numUsers = 0;
var userList = [];

io.on('connection', function(socket){
    console.log('a user connected');

    var addedUser = false;

    socket.on('new message', function (data) {
        io.emit('new message', {
            username: socket.username,
            message: data
        });
    });

    socket.on('add user', function (username) {
        if (addedUser) return;
        userList.push(username);
        socket.username = username;
        ++numUsers;
        addedUser = true;
        console.log(userList);
        socket.emit('login', {
            numUsers: numUsers,
            userList : userList
        });

        io.emit('user joined', {
            username: socket.username,
            numUsers: numUsers
        });

    });

    // when the client emits 'typing', we broadcast it to others
    socket.on('typing', function () {
        socket.broadcast.emit('typing', {
            username: socket.username
        });
    });

    socket.on('stop typing', function () {
        socket.broadcast.emit('stop typing', {
            username: socket.username
        });
    });

    socket.on('chat message', function(msg){

        io.emit('server message', msg);
    });

    socket.on('disconnect', function() {

        if (addedUser) {

           --numUsers;
           console.log("user indexOf : " + userList.indexOf(socket.username))
           userList.slice(userList.indexOf(socket.username), 1);
           console.log(userList);
           socket.broadcast.emit('login', {
               numUsers: numUsers,
               userList : userList
           });
            // echo globally that this client has left
           socket.broadcast.emit('user left', {
               username: socket.username,
               numUsers: numUsers
           });
        }
    });
});

http.listen(4000, function(){
    console.log("listening on 4000");
});
