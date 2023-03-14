// OS module provides information related to the operating system and hardware.

const os = require("os");

// info about the current user
const user = os.userInfo();
/**
 * give information of the current user {
  uid: 501,
  gid: 20,
  username: 'arya',
  homedir: '/Users/arya',
  shell: '/bin/zsh'
}
 */
console.log(user);

//method returns the system uptime in seconds.
//https://gaurav-cnwn1.medium.com/all-you-need-to-know-about-uptime-downtime-and-runtime-errors-51e9ebca1a69

console.log(`The system uptime is ${os.uptime()}s`); // uptime refers to the no. of seconds a computer is operational.

// info about the current OS of the system.
const currentOS = {
  name: os.type(), //returns name of os(linux, darwin etc)
  release: os.release(),
  totalMem: os.totalmem(), //Returns the total amount of system memory in bytes as an integer.
  freeMem: os.freemem(), // Returns the amount of free system/main memory in bytes as an integer.
  platform: os.platform(),
  architecture: os.arch(),
};

console.log(currentOS);
