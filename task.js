const http = require('http');

const routes = require('./routes');


PORT = 4000;

const server = http.createServer(routes.taskHandler);


server.listen(PORT,()=>{
    console.log(`server listening on Port ${PORT}`)
})