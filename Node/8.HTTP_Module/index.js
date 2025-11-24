import http from 'http'

// create our server
const server = http.createServer((req, res) => {
    // console.log(req)
    res.setHeader("Content-Type", "text/html")
    res.write("<h1>Hello World</h1>")
});

// server listening in port 8000
server.listen(8000, () => console.log('Server is running!!'))