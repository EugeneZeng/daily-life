#!/usr/bin/env node

/**
 * Module dependencies.
 */
const app = require('./app');
const debug = require('debug')('server');

var port = "3000";
//启动服务
var apiServer = app.listen(port, function() {
    console.log('API server running. Listening on port ' + apiServer.address().port);
});
apiServer.on('error', onError);
apiServer.on('listening', onListening);
process.on('uncaughtException', err => {
    console.error("this is some error,please check:", err);
});
process.on('unhandledRejection', (reason, ...args) => {
    let strReason = JSON.stringify(reason);
    console.log(`Promise unhandledRejection >> Reason: ${strReason}`, args || "");
});

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = `Pipe ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
    var addr = apiServer.address();
    var bind = typeof addr === 'string' ?
        'pipe ' + addr :
        'port ' + addr.port;
    debug('Listening on ' + bind);
}