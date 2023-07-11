/*  
    We use events module to listen and handle events 
    which exports a class, and to register event we create an 
    instance of that class.
    We can create custom events which needs to be emitted or fired using emit menthod.
    Events are built-in block of node.
    Lot of built-in modules rely on them like http.

*/
import EventEmitter from "events";
const customEmitter = new EventEmitter();

// on method -> listen for an event and execute the event handler associated with it.
// emit method -> emit/trigger an event for on to listen.

// Can create multiple listeners for the same event. And on emit all the event handlers will be executed.
customEmitter.on("response", (name, id) =>
  console.log(`Data Received - ${name} ${id}`)
);

/*
    customEmitter.on("response", () => {
    console.log("Some other logic here...");
});
*/

// An event should be emitted after the listener is created.
// customEmitter.emit("response");

// Passing arguments on emitting events and these can be accessed inside the event handler.
customEmitter.emit("response", "john", 34);
