import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const JoinRoom = () => {

    const [ username, setUsername ] = useState<string>();
    const [  roomId, setRoomId ] = useState<string>();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!username || !roomId) return;


        navigate(`/${username}/room/${roomId}`);

    }
  return (
    <div className="flex flex-col justify-center items-center gap-6">
        <h1>Join Room</h1>
        <Link to="/chat" className="flex justify-center items-center w-20 h-8 bg-blue-600 rounded-full">Chat</Link>
        <Link to="aden/room/adens-room" className="flex justify-center items-center w-20 h-8 bg-blue-600 rounded-full">Room</Link>

        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-3">
            <input type="text" placeholder="Your name" onChange={(e) => setUsername(e.target.value)} className="bg-transparent w-4/5 border border-blue-500"/>
            <input type="text" placeholder="Enter room code" onChange={(e) => setRoomId(e.target.value)} className="bg-transparent w-4/5 border border-blue-500"/>
            <button className="flex justify-center items-center w-52 h-8 bg-blue-600 rounded-full">Create Room</button>
        </form>
    </div>
  )
}

export default JoinRoom