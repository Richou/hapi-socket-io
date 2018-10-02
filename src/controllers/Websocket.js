'use strict';
import Handlers from '../handlers/Handlers';

exports.register = (server, options) => {
    const { io } = server.plugins['hapi-io'];
    const handler = new Handlers();
    io.on('connection', socket => {
        console.log('new connection ', socket.io);
        socket.on('hello', handler.helloWorld);
        socket.on('disconnect', () => {
            console.log('disconnected ', socket.id);
        })
    });
}

exports.name = 'WebsocketPlugin';