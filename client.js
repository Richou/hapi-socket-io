'use strict';

const io = require('socket.io-client');
const socket = io('ws://localhost:4000');
socket.on('connect_error', function(){
    console.log('Connection Failed');
});
socket.on('connect', function(){
    console.log('Connected');
    console.log('sending hello');
    socket.on('values', values => {
        console.log(values)
    })
    socket.send('coucou')
    socket.emit('hello', { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.OXrPBnyBu32qTXgr2HZXRSgoYQo8k17Pzd5Ahbv8-C0', id : "from client !"});

});
socket.on('disconnect', function () {
  console.log('Disconnected');
});