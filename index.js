const Server = require("./models/server");
require('dotenv').config();

const server = new Server();

server.execute();




// io.on('connection', (socket) => {
//     // Emitir un evento
//     // socket.emit('mensaje-bienvenida', {
//     //     msg: 'Bienvenido al server',
//     //     feacha: new Date()
//     // });

//     // Escuchar un evento
//     // socket.on('mensaje-evento', (data) => {
//     //     console.log(data);
//     // });

//     socket.on('mensaje-to-server', (data) => {
//         console.log(data);

//         io.emit('mensaje-from-server', data);
//     });

// });

