'use strict';
import Handlers from '../handlers/Handlers';

exports.register = (server, options) => {
    const { io } = server.plugins['hapi-io'];
    const handler = new Handlers();
    io.on('connection', socket => {
        console.log('new connection ', socket.client.conn.id);
        socket.on('disconnect', () => {
            console.log('disconnected', socket.id);
        })
    });
    server.route({
        method: 'GET',
        path: '/messages',
        config: {
            auth: 'jwt',
            plugins: {
                'hapi-io': {
                    event: 'hello',
                    mappings: {
                        header: ['Authorization']
                    }
                }
            },
            tags: ['api']
        },
        handler: function(request, reply) {
            handler.helloWorld(request.query.id);
            return reply.response({}).code(200);
        }
    });
}

exports.name = 'WebsocketPlugin';