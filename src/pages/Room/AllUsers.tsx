import React from "react";
import { userType } from "../../../types/userTypes";

const AllUsers: React.FC<{ users: userType[] }> = ( { users } ) => {
  return (
    <div className="flex flex-col gap-2 text-[#1690AF] m-10">
      <ul>
        <span className="font-bold text-white">Users Joind : </span>
        {users.map((user: userType, index: number) => (
          <li className="px-10" key={index}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AllUsers;
