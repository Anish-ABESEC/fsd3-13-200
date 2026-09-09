import http from "http";

const server = http.createServer((req, res) => {
    //req method -> GET, POST, PUT, DELETE,PATCH 
 console.log("Method:", req.method);           
 console.log("URL:", req.url);           

//browser can request only GET method, so we can use GET method to send data to browser

});