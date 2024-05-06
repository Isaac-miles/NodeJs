const http = require('http');

const express = require('express');
const {log} = console;

let PORT = 4000;
const app = express();

app.use((req,res,next)=>{
    log('in the first middleware')
})

const server = http.createServer(app);

server.listen(PORT,()=>`server running on port ${PORT}`)