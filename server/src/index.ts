import express, {type Request, type Response} from 'express';
import http from 'http';
import { Server, Socket } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

import  { addUser, getUsersInRoom, removeUser, getUser }  from './utils/user.js';
import { generateMessage } from './utils/messages.js'

import type {ServerToClientEvents, ClientToServerEvents} from '../../types/socketTypes.js'

dotenv.config();



const app = express();
app.use(cors({
    origin: ['http://127.0.0.1:5173/', 'http://localhost:3000']
}));
const server = http.createServer(app);
app.set('view engine', 'ejs');

// WebSocket Connection

const io = new Server(
    server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    }
);

io.on('connection', (socket: Socket<ClientToServerEvents, ServerToClientEvents>) => {

    // Listen on a 'join' event, which we will allocate the socket to a room on server
    socket.on("join", ({username, room, isAdmin}, callback) => {

        const {error, user} = addUser({ socketId: socket.id, username, room, isAdmin });

        if(error) {
            return callback({
                status: "Bad Request",
                error
              });
        }

        // Once a socket joins a room, then we can emit events to that room only
      // io.to(room).emit or socket.broadcast.to(room).emit
      socket.join(user.room);
      
      socket.emit('message', generateMessage('Admin', `Welcome ${user.username}!`));
      socket.broadcast.to(user.room).emit('message', generateMessage('Admin', `${user.username} has joined!`));
      
      // Event for communicating changes in connections for the room
      io.to(user.room).emit('roomData', {
        users: getUsersInRoom(user.room)
      });

        callback();
    });

    // Forward message to all connected clients
    // implement event acknoledgement with client callback
    socket.on('sendMessage', (message, callback) => {
      try {
        const user = getUser(socket.id);
        if(!user) {
          return callback('User not found');
        }
  
        io.to(user.room).emit('message', generateMessage(user.username, message));
        callback();
      } catch (error: any) {
        callback(error.message);
      }
    });

    // This is built-in socket.io event, all other clients should get message that current client disconnected
    socket.on('disconnect', () => {
        const user = removeUser(socket.id);
    
        if(user) {
          io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left!`));
          io.to(user.room).emit('roomData', {
            users: getUsersInRoom(user.room)
          });
        }
      });
})

app.get('/health', (req: Request, res: Response) => {
    res.json({
        message: 'Server running peacefully',
    })
})


app.get('/', (req: Request, res: Response) => {
    res.render('pages/index')
})

const PORT = process.env.DEPLOYMENT_LINK || 4000;

server.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
});