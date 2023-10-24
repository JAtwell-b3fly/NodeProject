const http = require("http");

const fs = require("fs");

const server = http.createServer((req,res) => {
    res.setHeader("Content-Type","text/html");

    let path="./views";

    //setting the path
    switch(req.url){
        case "/": 
            path+="/index.html";
            res.statusCode = 200;
            break;

        case "/about":
            path+= "/about.html";
            res.statusCode = 200;
            break;

        default: 
            path += "/404.html";
            res.statusCode = 404;
            break;
    }

    //read the file, sending back to the browser
    fs.readFile(path, (err, data) => {
        if(err){
            console.log(err)
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })
});

const port = 8000;
server.listen(port, "localhost", ()=> {
    console.log(`listening request on port ${port}`);
});