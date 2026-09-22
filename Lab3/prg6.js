import http from 'http';

const server = http.createServer((req, res) => {

    // Echo API - POST
    if (req.url === "/api/v1/echo" && req.method === "POST") {

        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {

            try {
                const data = JSON.parse(body);

                res.statusCode = 200;
                res.setHeader("Content-Type", "application/json");

                res.end(JSON.stringify({
                    message: "Echo API",
                    data: data
                }));

            } catch (error) {

                res.statusCode = 400;
                res.setHeader("Content-Type", "application/json");

                res.end(JSON.stringify({
                    message: "Invalid JSON"
                }));
            }
        });

    } else {

        res.statusCode = 404;
        res.end("Request not found");
    }
});

server.listen(5000, () => {
    console.log("prg6.js is running on port 5000");
});