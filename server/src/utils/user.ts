import { type userType } from '../../types/userTypes'

type RoomType = {
    roomid: string;
    // usersJoined: number;
}


const Users: Array<userType> = [];
const Rooms: Array<RoomType> = [];

export function addUser({ socketId, username, room, isAdmin }: {
    socketId: string;
    username: string;
    room: string;
    isAdmin: string;
}) {
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Validate the data

    if (!username || !room || !isAdmin) {
        return {
            error: {
                errorReason: 'Unfilled  fields.',
                errorSolution: 'Please Properly fill all the fields',
            }
        };
    }

    
    //Check for existing user and room
    const existingUser = Users.find((user) => user.room === room && user.username === username);
    const existingRoom = Rooms.find((existsRoom) => existsRoom.roomid === room);
    
    if (isAdmin === 'true') {
        if (!existingRoom) {
            Rooms.push({roomid: room});
        } else {
            return {
                error: {
                    errorReason: 'Room Id is in use!',
                    errorSolution: 'Try a different Room-Id'
                }
            };
        }

    }
    
    if (existingUser) {
        return {
            error: {
                errorReason: 'Username is in use!',
                errorSolution: 'Try a different Username.'
            }
        };
    }
    
    // Check if room if full or not
    if (Users.length === 10) {
        return {
            error: {
                errorReason: 'Room is full',
                errorSolution: 'Please Try again after sometimes'
            }
        };
    }
    
    // Store user
    const user: userType = {
        id: socketId,
        username,
        room
    };


    Users.push(user);
    return { user };
}

export const removeUser = (id: string) => {
    const index = Users.findIndex((user) => user.id === id);

    if (index !== -1) {
        return Users.splice(index, 1)[0];
    }
};

export const removeRoom = (room: string) => {
    const index = Rooms.findIndex((roomToBeDroped) => roomToBeDroped.roomid === room);

    if (index === -1) return;

    if (index !== -1) {
        return Rooms.splice(index, 1)[0];
    }
};

export const getUser = (id: string) => {
    const user = Users.find((user) => user.id === id);
    return user;
};

export const getUsersInRoom = (room: string) => {
    const usersInRoom = Users.filter(user => user.room === room);
    return usersInRoom;
};
