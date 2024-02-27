import { useParams } from "react-router-dom";
import Chat from "./Chat";

const Room = () => {

  const { roomid, username } = useParams();

  return (
    <div className="flex flex-col justify-end items-center gap-6 h-screen w-screen relative">
      <p>{username}</p>
      <p>Room: {roomid}</p>
      <div className="w-4/5 h-3/5 bottom-0">

      <Chat />
      </div>
    </div>
  )
}

export default Room