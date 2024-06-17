const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT;

const home = fs.readFileSync("index.html","utf-8");

const server = http.createServer((req,res) => {
    if (req.url == '/about') {
        return res.end("About Page");
    }
    if (req.url == '/contact') {
        return res.end("Contact Page");
    }
    if (req.url == '/payment') {
        return res.end("Payment Page");
    }
    if (req.url == '/product') {
        return res.end("Product Page");
    }
    if (req.url == '/') {
        return res.end(home);
    }
     else {
        return res.end("<h1>404 Page Error</h1>");
    }

})

server.listen(PORT,() => {
    console.log(`server is working at http://${hostname}:${PORT}`);
});