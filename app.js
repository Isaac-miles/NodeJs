const http = require('http');

const routes = require('/routes');

const {log} = console;
const PORT = 5050;

const server = http.createServer(routes)

server.listen(PORT,()=>{
    log(`server running on port ${PORT}`)
})