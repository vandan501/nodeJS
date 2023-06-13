const http=require('http');

 const server=http.createServer((req,res)=>{
    if(req.url =='/')
    {
        res.write("<h1>Hello i am vandan raval and this is my first node JS server file</h1>");
    }
    else if(req.url=='/about'){
        res.write("<h1>About us page</h1>");
    }
    res.end();
})

server.listen(5001);

console.log("The HTTP server is running on port 5001")