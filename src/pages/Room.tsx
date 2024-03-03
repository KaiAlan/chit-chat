import { useParams } from "react-router-dom";
import Chat from "../components/Chat";
import { Toaster } from "@/components/ui/toaster";

const Room = () => {

  const { roomid, username } = useParams();

  return (
    <div className="flex flex-col justify-end items-center gap-6 h-screen w-screen bg-[#15161D] text-white relative">
      <p>{username}</p>
      <p>Room: {roomid}</p>
      <div className="w-4/5 h-3/5 bottom-0">

      <Chat />
      </div>
      <Toaster />
    </div>
  )
}

export default Room