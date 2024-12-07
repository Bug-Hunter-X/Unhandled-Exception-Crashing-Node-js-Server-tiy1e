```javascript
const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

server.listen(8080);
console.log('Server is running on port 8080');

//Unhandled exception
//This will lead to the server crashing without any proper error handling
throw new Error('Something went wrong!');
```