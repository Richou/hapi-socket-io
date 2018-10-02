'use strict';
const hapiJwt = require('hapi-auth-jwt2')

// bring your own validation function
const validate = async function (decoded, request) {

    console.log(decoded);

    return {isValid : true}
};

exports.register = (server, options) => {
    server.register(hapiJwt);
    server.auth.strategy('jwt', 'jwt',
    { key: 'blabla',          // Never Share your secret key, this one is shitty so I don't care
        validate: validate,
        verifyOptions: { algorithms: [ 'HS256' ] }
    });

    server.auth.default('jwt');
}

exports.name = 'AuthenticationPlugin';