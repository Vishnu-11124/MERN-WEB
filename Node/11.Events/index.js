import EventEmitter from 'events';

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// 1. on: listen/register an event
eventEmitter.on('response', (name, id)=> {
    console.log(`user: ${name} and id: ${id}`)
})

// 2. once: listen/register an event only once

// 3. emit: emit/call an event
eventEmitter.emit('response', 'john', 34);