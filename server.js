'use strict';

const Glue = require('glue');
const Path = require('path');
const servOptions = { relativeTo: Path.join(__dirname, './src')};

const manifest = require('./config/manifest.json');

const startServer = async function () {
    const server = await Glue.compose(manifest, servOptions);
    await server.start();
    console.log(`Server running at ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

startServer();