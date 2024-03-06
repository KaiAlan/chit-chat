type UserType = {
    id: string;
    username: string;
    room: string;
};

type RoomType = {
    roomid: string;
    // usersJoined: number;
}


const Users: Array<UserType> = [];
const Rooms: Array<RoomType> = [];

export function addUser({ socketId, username, room, isAdmin }: {
    socketId: string;
    username: string;
    room: string;
    isAdmin: string;
}): any {
    username = username.trim().toLowerCase();
    room = room.trim().toLowerCase();

    //Validate the data

    if (!username || !room || !isAdmin) {
        return {
            error: 'Unfilled  fields.',
            // errorSolution: 'Please Properly fill all the fields',
        };
    }

    // Check if room if full or not
    if (Users.length === 10) {
        return {
            error: 'Room is full',
            // errorSolution: 'Please Try again after sometimes'
        };
    }

    //Check for existing user and room
    const existingUser = Users.find((user) => user.room === room && user.username === username);
    const existingRoom = Rooms.find((existsRoom) => existsRoom.roomid === room);

    if (existingUser) {
        return {
            error: 'Username is in use!',
            // errorSolution: 'Try a different Username.'
        };
    }

    if (isAdmin === 'true') {
        if (existingRoom) {
            return {
                error: 'Room Id is in use!',
                // errorSolution: 'Try a different Room-Id'
            };
        }
    }

    // Store user
    const user: UserType = {
        id: socketId,
        username,
        room
    };

    Rooms.push({ roomid: room });

    Users.push(user);
    return {user} ;
}
