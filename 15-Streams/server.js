const http = require("http");
const { readFileSync, readFile, createReadStream } = require("fs");
const server = http.createServer();

// Executed when the request event happens, server can listen to the request event.
server.on("request", (req, res) => {
  // sending file data by reading it in chunks as response to the browser using streaming.
  const stream = createReadStream("../content/big.txt", {
    highWaterMark: 10000,
    encoding: "utf8",
  });

  //   ---------------------One way using streams
  //   stream.on("data", (dataChunk) => {
  //     // This event will fire every time chunk of data is availbale to read
  //     res.write(dataChunk);
  //   });
  //   stream.on("end", () => {
  //     // this will execute when there is no more data to be read from the stream.
  //     res.end();
  //   });
  //   stream.on("error", (err) => {
  //     res.end(err);
  //   });

  stream.on("open", () => {
    // open event tells the Node JS when the file is openend to read the data from it.
    stream.pipe(res); //whatever data is read it is written to the output file mentioned in pipe method simultaneously.
    //Add a request header -> Transfer-Encoding: chunked
  });

  /** Reading(sync or async) and sending file data to the client without streaming as whole file is read */
  /*
    const text = readFileSync("../content/big.txt", "utf8");
    res.end(text); //The whole file data will be sent.
  */
  /*
  readFile("../content/big.txt", "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    res.end(data);
  });
  */
});

server.listen(5000);
