const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');


const app = express();
app.use(cors({
    origin: ['http://127.0.0.1:5173/', 'http://localhost:3000']
}));
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: "http://127.0.0.1:5173"
    }
  });
io.on('connection', (socket) => {
  console.log('User connected');
  // Listen for incoming messages
  socket.on('message', (message) => {
    console.log('Message:', message);
    // Broadcast the message to all connected clients
    io.emit('message', message);
  });
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});