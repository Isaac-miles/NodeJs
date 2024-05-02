const http = require('http');

const {log} = console;
const PORT = 5050;

const server = http.createServer((req,res)=>{
    res.end("hello ending the event")
    process.exit()
})

server.listen(PORT,()=>{
    log(`server running on port ${PORT}`)
})