const express = require('express');
const req = require('/express/lib/request');
const res = require('/express/lib/response');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods : ["GET", "POST"]
    }
});

app.use('/', express.static(__dirname + '/'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/Index.html');
});

io.on('connection', (socket) => {
    console.log('Connected!!');

    socket.on('messages', (msg) => {
        io.emit('messages', msg);
    });
    
    socket.on('disconnect', () => {
        console.log('Disconnected!!');
    });
});

server.listen(3000,()=> {
    console.log('Server listening on port 8080');
});