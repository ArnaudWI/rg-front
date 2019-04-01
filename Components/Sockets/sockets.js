// import des sockets côté front
import socketIOClient from "socket.io-client";
// connection avec le backend sur l'ip spécifiée ci-dessous
const io = socketIOClient('http://'+ipAddress+':3000/');
//export de la variable io
export default io;
