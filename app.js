const http = require('http');

const {log} = console;
const PORT = 5050;

const server = http.createServer((req,res)=>{
    res.end("hello ending the event")
    res.setHeader('Content-Type', 'text/html');
    // process.exit()
})

server.listen(PORT,()=>{
    log(`server running on port ${PORT}`)
})