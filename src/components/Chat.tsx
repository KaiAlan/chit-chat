import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3000");

const Chat = () => {
  // State for storing messages and current message
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [users, setUsers] = useState<any[]>([]);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);

  // Function to send a message
  const sendMessage = () => {
    if (currentMessage) {
      socket.emit("message", currentMessage);
      setCurrentMessage("");
    }
  };
  useEffect(() => {
    // Listen for incoming messages
    socket.on("message", (message: string) => {
      setMessages((prevMessages: string[]) => [...prevMessages, message]);
    });
    console.log(socket.id);

    return () => {
      socket.off("message");
    };
  }, []);

  useEffect(() => {
    socket.on("newUserResponse", (data) => {
      setUsers(data);
      console.log(data);
    });

    return () => {
      socket.off("newUserResponse");
    };
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-4/5 h-3/5 border-2 border-blue-400">
      <div className="flex flex-col justify-start items-start h-4/5 w-full bg-slate-900 p-5 overflow-y-auto gap-2">
        {messages.map((message: string, index: number) => (
          <>
            {message.substring(0, 4) === socket.id?.substring(0, 4) ? (
              <div className="flex flex-col items-end px-5 rounded-md w-2/3 text-wrap">
                <p className="text-green-700 rounded-md">you</p>
                <p
                  key={index}
                  className="flex justify-center items-center font-light text-white text-sm px-5 py-1 m-1 bg-green-700 bg-opacity-25 rounded-lg"
                >
                  {message.substring(7, message.length)}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-start px-5 rounded-md w-2/3 text-wrap">
                <p className="text-red-700">{message.substring(0, 4)}</p>
                <p
                  key={index}
                  className="flex justify-center items-center font-light text-white text-sm px-5 py-1 m-1 bg-red-700 bg-opacity-25 rounded-lg "
                >
                  {message.substring(7, message.length)}
                </p>
              </div>
            )}
          </>
        ))}
        <div ref={ref} />
      </div>
      <div className="flex justify-center items-center gap-3">
        <input
          type="text"
          placeholder="Type a message..."
          value={currentMessage}
          onChange={(e) => setCurrentMessage(e.target.value)}
          className="bg-transparent w-4/5 border border-blue-500"
        />
        <button
          onClick={sendMessage}
          className="flex justify-center items-center w-20 h-7 border rounded-full m-2 bg-blue-500 hover:bg-blue-900"
        >
          Send
        </button>
      </div>

      {users.map((user) => (
        <p key={user.socketID} className="text-white">
          {user.userName}
        </p>
      ))}
    </div>
  );
};

export default Chat;
