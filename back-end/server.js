'use strict';

//import { Message } from './app/chat-models/message';

// Module dependencies.
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const serveStatic = require('serve-static');
const db = require('./app/connection');
const app = express();
const port = 3000;

// add request body data under ".body"
app.use(bodyParser.json());

require('./app/routes/index')(app);

const server = app.listen(port, function() {
    console.log('SlipSmart APP started on port ' + port);
});

const io = require('socket.io')(server);
var players = {};

io.on('connect', (socket) => {
    console.log('Connected client on port %s.', port);
    socket.on('message', (message) => {
        console.log('[server](message): %s', JSON.stringify(message));
        io.emit('message', message);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });

});

exports = module.exports = app;