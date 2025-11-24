import http from "http"

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.end("Hello World, Home Page")
    }else if(req.url === '/about'){
        res.end("Hello World, About Page")
    }else if(req.url === '/contact'){
        res.end("Hello World, Contact Page")
    }else{
        res.end("Hello World, Page Not Found")
    }
})


server.listen(8000, () => console.log('Server is running!!' ))