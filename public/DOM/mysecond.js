
const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('/Users/roopesh.t/Desktop/automationdashboard/html/page1.html', (err, data) => {
    if (err) {
      res.writeHead(500, {'Content-Type': 'text/plain'});
      res.end('Error loading index.html');
    } else {
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.end(data);
    }
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
