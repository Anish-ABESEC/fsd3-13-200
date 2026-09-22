import http from 'http'

const server = http.createServer((req, res) => {
   
    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        res.end("GET Request");
    }

    else if (req.url === "/" && req.method === "POST") {
        //console.log("Request:", req);
        let body = ' '
        req.on('data', (chunk) => {
            body += chunk

        })
        req.on("end", () => {
            const product = JSON.parse(body);
            console.log("received products:", product);
            res.statusCode = 201;
        res.end(JSON.stringify({msg:'product added',product}));
        });
        
    }

    else if (req.url === "/" && req.method === "PUT") {
        res.statusCode = 200;
        res.end("PUT Request");
    }

    else if (req.url === "/" && req.method === "DELETE") {
        res.statusCode = 200;
        res.end("DELETE Request");
    }

    else {
        res.statusCode = 404;
        res.end("Request not found");
    }
});

server.listen(5000, () => console.log("prg6 is running"));


