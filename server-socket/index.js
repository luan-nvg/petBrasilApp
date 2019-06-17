var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
   
        var data = new Date();
        var reponse = 'Data : ' + data + ' Numero: ' + msg.valor;

        postaData = {
            valor: msg.valor,
            data: reponse
        };
        io.emit('chat message', postaData);
        socket.broadcast.emit('chat message', msg + 'LONX');
        console.log('Celular: ' + msg.valor);
    });
});
http.listen(3000, () => {
    console.log('Rodando na porta *:3000');
});