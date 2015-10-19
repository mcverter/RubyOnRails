/**
 * Created by mitchell on 2/27/14.
 */
var  EventEmitter = require('events').EventEmitter;
var logger = new EventEmitter();
logger.on('error', function(message) {
    console.log('ERR: ' + message);
});

logger.emit('error', 'spilled milk');
logger.emit('error', 'eggs cracked');