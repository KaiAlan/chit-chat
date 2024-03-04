// In memory user store managing connected users/clients
// Not suitable for production builds but enough for demonstration
const users = [];

const rooms = [];

const addUser = ({socketId, username, room, isAdmin}) => {
  // Clean the data
  username = username.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // Validate the data
  if(!username || !room) {
    return {
      error: 'Username and room are required',
    };
  }

  // Check if room is full or not
  if(users.length === 10) {
    return {
      error: 'Room is full'
    };
  }

  // Check for existing user
  const existingUser = users.find((user) => user.room === room && user.username === username);
  const existingRoom = rooms.find((existsRoom) => existsRoom === room);
  if(existingUser) {
    return {
      error: 'Username is in use!'
    };
  }

  if(isAdmin === 'true'){
    if(existingRoom) {
      return {
        error: 'Room Id is in use!'
      };
    }
  }

  // Store user
  const user = {
    id: socketId,
    username,
    room
  };

  rooms.push(room);

  users.push(user);
  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if(index !== -1) {
    return users.splice(index, 1)[0];
  }
};
const removeRoom = (room) => {
  const index = rooms.findIndex((roomToBeDroped) => roomToBeDroped === room);

  if(index === undefined) return;

  if(index !== -1) {
    return rooms.splice(index, 1)[0];
  }
};

const getUser = (id) => {
  const user = users.find((user) => user.id === id);
  return user;
};

const getUsersInRoom = (room) => {
  const usersInRoom = users.filter(user => user.room === room);
  return usersInRoom;
};

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
  removeRoom
};