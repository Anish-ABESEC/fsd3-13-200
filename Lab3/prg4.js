import http from 'http';

const server = http.createServer((req, res) => {

    if (req.url == '/api/products') {

        const product = {
            id: 1,
            name: 'Mobile',
            price: 4000,
            rating: 4.7,
            review: 225
        };

        res.end(JSON.stringify(product));
        return;
    }

    res.end('Hello Server');
});

server.listen(3000, () => {
    console.log('PRG4 is running at http://localhost:3000');
});