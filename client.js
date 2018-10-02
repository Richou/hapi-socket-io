'use strict';

const io = require('socket.io-client');
const socket = io('ws://localhost:4000');
setTimeout(() => {
    console.log('sending hello');
    socket.emit('hello', 'from Client !');
}, 2000);