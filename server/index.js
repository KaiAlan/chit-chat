const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');


let users = []

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
    // console.log('Message:', message);
    // Broadcast the message to all connected clients
    io.emit('message', `${socket.id.substr(0,4)} : ${message}`);
  });

  //  //Listens when a new user joins the server
  //  socket.on('newUser', (data) => {
  //   //Adds the new user to the list of users
  //   users.push(data);
  //   console.log(data);
  //   //Sends the list of users to the client
  //   io.emit('newUserResponse', users);
  // });


  socket.on('disconnect', () => {
    console.log('User disconnected');

    //  //Updates the list of users when a user disconnects from the server
    //  users = users.filter((user) => user.socketID !== socket.id);
    //  // console.log(users);
     //Sends the list of users to the client
     io.emit('newUserResponse', users);

  });
});


app.get('/', (req, res) => {
  res.json({
    message: 'Hello world',
  });
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});