const http = require('http');
const path = require('path');
const fs = require('fs');

const {log} = console;
const PORT = 5050;

const server = http.createServer((req,res)=>{
    const url = req.url;
    const method = req.method;

    if(url === '/'){
        res.write('<html')
        res.write('<header><title>Form Submit</title></header>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"/><button type="submit">send</button></form></body>')
        res.write('</html')
        return res.end();
    }
    if(url == '/message' && method ==='POST'){
        const body = [];
        req.on('data',(chunk)=>{
            body.push(chunk);
        })
       return req.on('end',()=>{
          const parsedBody = Buffer.concat(body).toString();
          const message = parsedBody.split('=')[1]
          fs.writeFile('message.txt',message,(err)=>{
            res.statusCode = 302;
            res.setHeader('Location','/')
            return res.end()
          });
        })
    }

    res.setHeader('Content-Type', 'text/html');
    res.write('<html')
    res.write('<body><h1>Hello Miles </h1></body>')
    res.write('</html')
    res.end()

    // process.exit()
})

server.listen(PORT,()=>{
    log(`server running on port ${PORT}`)
})