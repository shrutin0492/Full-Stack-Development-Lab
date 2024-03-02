const http = require('http');
const fs = require('fs');

const PORT = 3001;

const server = http.createServer((req, res) => {
    // Read the HTML file
    fs.readFile("C:\\Users\\shrut\\OneDrive\\Desktop\\shruti_biodata.html", 'utf8', (err, data) => {
        if (err) {
            // If an error occurs while reading the file, send an error response
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('Error reading HTML file');
            return;
        }
        
        // If the file is read successfully, send the content as the response
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end(data);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
