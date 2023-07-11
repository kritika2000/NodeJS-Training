const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.end("Home Page");
    return;
  }
  if (req.url === "/about") {
    //BLOCKING CODE!!!
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
        /* The about page(any other page(or other code) will also not 
        render while this for loop is executing) will not render unless 
        this sync fo loop done executing.
        */
      }
    }
    res.end("About Page");
    return;
  }
  res.end("Error Page");
});

// Here we are asking the event loop to keep listening to the user's request and the server will not be stopped.
server.listen(5000, () => {
  // listen is async
  //   This callback will run only one time, when the server starts.
  console.log("Server listening on port : 5000....");
});
