import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { io, Socket }  from "socket.io-client";




const Chat = () => {
  const [socket, setSocket] = useState<any>();
  const [sending, setSending] = useState<any>(false);
  const [allMessages, setAllMessages] = useState<any>([]);
  const [allUsers, setAllUsers] = useState<any>([]);
  const [error, setError] = useState<Error>();
  const messageRef = useRef<any>("");
  const { roomid, username } = useParams();



  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (allMessages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [allMessages.length]);

  useEffect(() => {
    const newSocket: Socket = io("http://localhost:3000");
    setSocket(newSocket);
    // Join a room with specific user
    newSocket.emit(
      "join",
      {
        username: username,
        room: roomid,
      },
      (error: Error) => {
        if (error) {
          setError(error);
        }
      }
    );

    // Listen for any messages coming from the connected server
    newSocket.on("message", (message) => {
      setAllMessages((prevState: any) => [...prevState, message]);
    });

    // listen for any room info updates coming from the connected server
    newSocket.on("roomData", ({ users }) => {
      setAllUsers([...users]);
    });

    // Close the socket when user leaves the page
    return () => {
      newSocket.close();
    };
  }, [username, error]);

  const sendMessageHandler = (event: any) => {
    event.preventDefault();
    setSending(true);

    socket.emit("sendMessage", messageRef.current.value, (error: Error) => {
      setSending(false);
      messageRef.current.value = ""; // Clear message
      messageRef.current.focus(); // Focus input

      if (error) {
        console.log(error);
      }
    });
  };

  const users = allUsers.map((user: any, idx: number) => (
    <li key={`user-${idx}`}>{user.username}</li>
  ));

  return (
    <div className="flex justify-between items-start w-full h-full">
      <ul className="flex flex-col">
        <span className=" text-yellow-300 font-bold">Users joined : </span>
        {users}
      </ul>
      <div className="flex flex-col justify-center items-center w-4/5 h-4/5 border-2 border-blue-400">
        <div className="flex flex-col justify-start items-start h-4/5 w-full bg-slate-900 p-5 overflow-y-auto gap-2">
          {allMessages.map((message: any, index: number) => (
            <>
              {message.user === username ? (
                <div className="flex flex-col items-end px-5 rounded-md w-full text-wrap">
                  <p className="text-green-700 rounded-md">{message.user}</p>
                  <p
                    key={index}
                    className="flex justify-center items-center font-light text-white text-sm px-5 py-1 m-1 bg-green-700 bg-opacity-25 rounded-lg gap-3"
                  >
                    <span className="text-[10px]">{message.createdAt}</span>
                    <span>{message.text}</span>
                  </p>
                </div>
              ) : (
                <div className="flex flex-col items-start px-5 rounded-md w-2/3 text-wrap">
                  <p className="text-red-700">{message.user}</p>
                  <p
                    key={index}
                    className="flex justify-center items-center font-light text-white text-sm px-5 py-1 m-1 bg-red-700 bg-opacity-25 rounded-lg gap-3"
                  >
                    <span className="text-[10px]">{message.createdAt}</span>
                    <span>{message.text}</span>
                  </p>
                </div>
              )}
            </>
          ))}
          <div ref={ref} />
        </div>
        <form
          onSubmit={sendMessageHandler}
          className="flex justify-center items-center gap-3"
        >
          <input
            type="text"
            placeholder="Type a message..."
            ref={messageRef}
            className="bg-transparent w-4/5 border border-blue-500"
          />
          <button
            type="submit"
            disabled={sending}
            className="flex justify-center items-center w-20 h-7 border rounded-full m-2 bg-blue-500 hover:bg-blue-900"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Chat;
