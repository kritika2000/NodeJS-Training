// started operating system process
console.log("first");
setTimeout(() => {
  console.log("second");
}, 0);
/* Even if the time is 0, it will be offload from the callstack and 
pushed inside the callback queue and is pushed into the callback stack 
by the event loop once it becomes empty. 
*/
console.log("third");
// completed and exited operating system process
