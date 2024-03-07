import express, {Request, Response} from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import dotenv from 'dotenv';

import  { addUser }  from './utils/user';
import { generateMessage } from './utils/messages'

dotenv.config();

interface ServerToClientEvents {

    join: (username: string, room: string, isAdmin: string, callback: () => any) => any;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
  
  interface InterServerEvents {
    ping: () => void;
  }
  
  interface SocketData {
    name: string;
    age: number;
  }

const app = express();
app.use(cors({
    origin: ['http://127.0.0.1:5173/', 'http://localhost:3000']
}));
const server = http.createServer(app);
app.set('view engine', 'ejs');

// WebSocket Connection

const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(
    server, {
        cors: {
            origin: '*',
            methods: ['GET', 'POST']
        }
    }
);

io.on('connection', (socket: any) => {

    // Listen on a 'join' event, which we will allocate the socket to a room on server
    socket.on("join", ({username, room, isAdmin}: { username: string, room: string, isAdmin: string }, callback: any) => {

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
    //   io.to(user.room).emit('roomData', {
    //     users: getUsersInRoom(user.room)
    //   });

        callback();
    });

    // This is built-in socket.io event, all other clients should get message that current client disconnected
    // socket.on('disconnect', () => {
    //     const user = removeUser(socket.id);
    
    //     if(user) {
    //       io.to(user.room).emit('message', generateMessage('Admin', `${user.username} has left!`));
    //       io.to(user.room).emit('roomData', {
    //         users: getUsersInRoom(user.room)
    //       });
    //     }
    //   });
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