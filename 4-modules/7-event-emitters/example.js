const EventEmitter = require('events');

const myEmitter = new EventEmitter();

setImmediate( () => {
    myEmitter.emit('TEST_EVENT');
});

myEmitter.on('TEST_EVENT' , () => {
    console.log('test event was fired');
});

myEmitter.on('TEST_EVENT' , () => {
    console.log('test event was fired');
});

myEmitter.on('TEST_EVENT' , () => {
    console.log('test event was fired');
});

// myEmitter.emit('TEST_EVENT');


// Streams are Event Emitters
// process.stdin, process.stdout
