import http from "http"
import fs from "fs"


const server = http.createServer((req,res) => {
    if(req.url === '/') {
        res.writeHead(200, "OK", {"content-Type": "text/html"});
        fs.readFile("./public/home.html", (error,data) => {
            if(error) throw error;
            res.end(data)
        });
    }else if(req.url === '/about'){
        res.writeHead(200, "OK", {"content-Type": "text/html"});
        fs.readFile("./public/about.html", (error,data) => {
            if(error) throw error;
            res.end(data)
        });
    }else{
        res.end("Something Error !!!")
    }
})

server.listen(8000, () => console.log("Server Running!!"))