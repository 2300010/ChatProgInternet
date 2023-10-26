const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 3000 });

wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(message) {
        console.log('received: %s', message);
    });

 ws.send('Bienvenue sur le chat Gekkode!');
});

console.log('Server started on port 3000');