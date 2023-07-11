//https://nodesource.com/blog/understanding-streams-in-nodejs/
/**
 *  Streaming means consuming data in real time instead of downloading all of it
 *  and then consuming it later.
 *  Four types of streams:-
 *  Readable -> stream where we need to read.
 *  Writable -> stream where we need to write.
 *  Duplex, Transform.
 *  Every stream fires several events at different instances of time
 *  Eg:- data -> this event is fired when there is data available to read.
 *  end -> this event is fired when there is no more data is read.
 *  error -> this event is fired when there is any error receiving or writing data.
 *
 */
const { writeFileSync, createReadStream } = require("fs");
/*
Fill the data in big.txt
const path = require("path");
for (let i = 0; i < 10000; i++) {
  writeFileSync(
    path.join(__dirname, "..", "content", "big.txt"),
    `hello world ${i}\n`,
    { flag: "a" }
  );
}
*/
/* 
    With createReadStream we pass an options object with the below options:-
    encoding -> specify encoding for dataChunks/data. By default it will be in buffer.
    highWaterMark -> to control the size of chunk(by default it is 64kb in our case)
*/
const stream = createReadStream("../content/big.txt", {
  highWaterMark: 90000,
  encoding: "utf8",
});
stream.on("data", (dataChunk) => {
  console.log(dataChunk);
  // After reading every chunck 'Hello' will be consoled.
  console.log("Hello");
  /**
   * The data will be read in chunks.
   * <Buffer 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 32 0a 68 65 6c 6c 6f 20 77 6f ... 65486 more bytes>
     <Buffer 77 6f 72 6c 64 20 33 39 32 30 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 33 39 32 31 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 33 39 32 32 0a 68 65 6c 6c 6f ... 65486 more bytes>
     <Buffer 6f 72 6c 64 20 37 37 37 35 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 37 37 37 36 0a 68 65 6c 6c 6f 20 77 6f 72 6c 64 20 37 37 37 37 0a 68 65 6c 6c 6f 20 ... 37768 more bytes>
   * 
   */
});

// Runs when there is some error while reading the data stream.
stream.on("error", (err) => {
  console.log(err);
});

//Events are async.
