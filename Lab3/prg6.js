import http from 'http'

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.statusCode = 200;
        res.end("send with 200");
    }
    else {
        res.statusCode = 404;
        res.end("request not found");
    }
});

server.listen(5000, () => console.log("prg6 is running"));