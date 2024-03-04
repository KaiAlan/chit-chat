import { io, Socket }  from "socket.io-client";
import { useState, useEffect } from 'react';
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

import Messages from "./Messages";
import AllUsers from "./AllUsers";
import SendMessageInput from "./SendMessageInput";
import ConnectionState  from "./ConnectionState";

import { ToastAction } from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";
import { Toaster } from "@/components/ui/toaster";

const URL = import.meta.env.VITE_SERVER_URL;


export type messageType = {
    text: string;
    user: string;
    createdAt: string;
}

export type userType = {
    id: string;
    username: string;
    room: string;
}

type errorFromServer = {
    status?: string;
    error: string;
}

const RoomNew = () => {
    const [socket, setSocket] = useState<Socket>();
    const [isConnected, setIsConnected] = useState(false)
    const [allMessages, setAllMessages] = useState<messageType[]>([]);
    const [allUsers, setAllUsers] = useState<userType[]>([]);
    const [errorFromServer, setErrorFromServer] = useState<errorFromServer>();

    const { roomid, username } = useParams();
    const [searchParams] = useSearchParams();
    const isAdmin = searchParams.get("isAdmin");
    const navigate = useNavigate();
    const { toast } = useToast();

    

    useEffect(() => {
        const newSocket: Socket = io(URL);
        setSocket(newSocket);
        setIsConnected(true)
        // Join a room with specific user
        newSocket.emit(
          "join",
          {
            username: username,
            room: roomid,
            isAdmin: isAdmin,
          },
          (error: errorFromServer) => {
            if (error) {
              setErrorFromServer(error);
            }
          }
        );

        function onMessageEvent(message: any) {
            setAllMessages((prevState: any) => [...prevState, message]);
        }

        function onRoomDataEvent( {users}: any) {
            setAllUsers([...users]);
        }
    
        newSocket.on('message', onMessageEvent);
        newSocket.on('roomData', onRoomDataEvent);


        // Close the socket when user leaves the page
        return () => {
          newSocket.close();
          setIsConnected(false)
        };
    }, [username, roomid]);

    useEffect(() => {

        if(errorFromServer) {
          console.log(errorFromServer.error)

          toast({
            variant: "destructive",
            title: `Uh oh, ${errorFromServer.error}`,
            description: "Use a different Username to Join the room.",
            action: <ToastAction onClick={() => navigate(-1)} altText="Try again">Try again</ToastAction>,
          })

          socket?.close();
          setIsConnected(false)
          setErrorFromServer(undefined);
        }
    }, [errorFromServer])


  return (
    <section>
    <div className="flex flex-col justify-center items-center h-screen w-full text-white bg-black">
        <ConnectionState isConnected={isConnected} />
        <AllUsers users={allUsers} />
        <Messages messages={allMessages} />
        <SendMessageInput socket={socket} />
    </div>
    <Toaster />
    </section>
  )
}

export default RoomNew