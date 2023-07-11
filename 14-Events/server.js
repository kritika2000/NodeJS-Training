import http from "http";

/* 
    The createServer method creates a server on your computer.
    http.createServer(requestListener);
    requestListener(callback function)-Optional. Specifies a function to be executed every time the server
    gets a request from the client i.e. browser. This function is called a requestListener, and handles request from the user, 
    as well as response back to the user.
*/
const server = http.createServer();

// Executed when the request event happens, server can listen to the request event.
server.on("request", (req, res) => {
  res.write("Hello World!");
  res.end();
});

server.listen(5000);
