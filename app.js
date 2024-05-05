const http = require('http');

const routes = require('./routes');

const {log} = console;
const PORT = 4000;

const server = http.createServer(routes.taskHandler)

server.listen(PORT,()=>{
    log(`server running on port ${PORT}`)
})