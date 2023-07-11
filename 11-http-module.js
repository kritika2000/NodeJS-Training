const http = require("http");

// create server method accepts a callback
const server = http.createServer((req, res) => {
  /* 
        req -> represents the incoming request. So for eg:- if a client
        requesting from webbrowser, then with req object we've the info of the 
        request like methods etc.
        res -> what we send back from the server.
    */
  //    Handling requests from client based upon the routes/url entered.
  if (req.url === "/") {
    res.end("Welcome to our home page");
  } else if (req.url === "/about") {
    res.end("Inside About page");
  } else
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you're looking for.</p>
      <a href="/">Home Page</a>
      `);
});
/* 
    we want our servers to be running always that's why if we run the file now, due to server.listen(port no.) the
    terminal will not exit. Web servers keep on listening requests always.
*/
server.listen(5000);
