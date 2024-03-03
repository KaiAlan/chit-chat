import React from "react";
import { messageType } from "./RoomNew";

const Messages: React.FC<{ messages: messageType[] }> = ({ messages }) => {
  return (
    <div className="h-1/2 w-2/3 overflow-hidden flex flex-col justify-start items-start bg-slate-700">
      <ul>
        {messages.map((message: messageType, index: number) => (
          <li key={index}>{message.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
