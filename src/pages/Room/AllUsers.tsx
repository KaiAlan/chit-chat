import React from "react";
import { userType } from "./RoomNew";

const AllUsers: React.FC<{ users: userType[] }> = ( { users } ) => {
  return (
    <div>
      <ul>
        {users.map((user: userType, index: number) => (
          <li key={index}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
