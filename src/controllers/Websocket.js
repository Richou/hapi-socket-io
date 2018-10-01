'use strict';
import Handlers from '../handlers/Handlers';

exports.register = (server, options) => {
    const io = require('socket.io')(server.listener);
    const handler = new Handlers();
    io.on('connection', socket => {
        console.log('new connection ', socket.id);
        socket.on('hello', handler.helloWorld);
        socket.on('disconnect', () => {
            console.log('disconnected ', socket.id);
        })
    });
}

exports.name = 'WebsocketPlugin';