const http = require('http');

// Define the port number
const PORT = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/plain'});

    // Send the response back to the client
    res.end('Node JS says Hello\n');
});

// Listen on the specified port
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
