const http = require('http')

const server = http.createServer((req, res) => {
    // res.write('Welcome to the landing page')
    // res.end();
    if(req.url === '/'){
        res.end('Welcome to the landing Page')
    }
    if(req.url === '/about'){
        res.end("Here's our short History")
    }
    res.end(`<h1>Opps!</h1>
    <p>The page you are requesting is not found</p>
    <a href='/'>back home</a>
    `)
})

server.listen(5000);