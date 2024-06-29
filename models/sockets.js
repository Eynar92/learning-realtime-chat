

class Sockets {

    constructor(io) {
        this.io = io;

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', (socket) => {
            console.log('Conectado', socket.id);

            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', (data) => {
                console.log(data);
                this.io.emit('mensaje-from-server', data);
            });

            socket.on('new-order', (data) => {
                console.log({ data });
                this.io.emit('new-order', data);
            });

        });
    }

}

module.exports = Sockets;