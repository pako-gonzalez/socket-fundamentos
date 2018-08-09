var socket = io();
// Escuchar eventos
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
});

// Enviar información
socket.emit('enviarMensaje', {
    usuario: 'Pako',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Resp server: ', resp);
});

// Escuchar informacion
socket.on('enviarMensaje', function(resp) {
    console.log('Servidor: ', resp);
});