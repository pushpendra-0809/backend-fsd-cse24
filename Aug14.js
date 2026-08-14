const EventEmitter = require('events');
class MyEvent extends EventEmitter {}
const events = new EventEmitter();
events.once("greet", (name) => {
    console.log('hello CSE 24 my name is ${name}');  //template literals - ${var}
})
events.on("exit",()=>{})
events.emit("greet", "Pushpendra");
events.emit("exit");
