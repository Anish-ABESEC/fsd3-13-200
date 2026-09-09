import http from 'http';
const server = http.createServer((req, res) => {
    res.write("<h1>Hello Client!</h1>");
    res.end("<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>");
});

server.listen(4444, () => console.log("Server is running on port 4444..."));