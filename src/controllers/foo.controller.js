'use strict';

exports.register = function(server, options) {
    return server.register([]).then(() => {
        server.route({
            method: 'GET',
            path: '/foo',
            config: {auth: 'jwt'},
            handler: (request, reply) => {                
                return reply.response({}).code(200)
            }
        })
    });
};

exports.name = "FooPlugin"