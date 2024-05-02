const http = require('http');

const {log} = console;
const PORT = 5050;

const server = http.createServer((req,res)=>{
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