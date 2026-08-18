const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on('click', () => {
    console.log('Click event triggered!');
});
emitter.on('mouseover', () => {
    console.log('Mouseover event triggered!');
});
emitter.emit('click');
emitter.emit('mouseover');
    