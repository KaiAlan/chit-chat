import React, {useEffect, useRef} from "react";
import { useParams } from "react-router-dom";
import { messageType } from "./RoomNew";
import SendMessageInput from "./SendMessageInput";
import bgNoise from "../../assets/bg-noise.png";
import OpenMenuButton from "../../assets/OpenMenubutton.svg"
import ChatBubble from '../../assets/Chat Bubble.svg'
// import "./Messages.scss";

// const MessageBox = ({children}: any) => {
//   return (
//     <>
//       <div className="box_parent">
//         <div className="box2 bg-[#1E1E26] h-[80px] w-[500px] flex flex-col justify-start items-start p-5">{children}</div>
//       </div>
//       <svg className="flt_svg" xmlns="http://www.w3.org/2000/svg">
//         <defs>
//             <filter id="flt_tag">
//                 <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
//                 <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
//                 <feComposite in="SourceGraphic" in2="flt_tag" operator="atop"/>
//             </filter>
//         </defs>
//     </svg>
//     </>
//   );
// };

const TopBar: React.FC<{ roomid: string | undefined; joinedUsers: number }> = ( { roomid, joinedUsers } ) => {

  return (
    <div
      className='flex justify-between items-center bg-[#1A262F] bg-opacity-50 w-full h-20 px-5 gap-3'
      style={{backdropFilter: 'blur(20px)'}}
    >
      <div className="flex justify-center items-center gap-2">

      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"></div>
      <div className="flex flex-col justify-start items-start">
        <p>{roomid}</p>
        <p className="text-[#1690AF] text-sm leading-3">{joinedUsers} joined</p>
      </div>
      </div>
      <div className="flex justify-center items-center gap-5">
        <img src={ChatBubble} alt="Chat Bubble" />
        <img src={OpenMenuButton} alt="Open Menu Button" />
      </div>
    </div>
  );
}

const Messages: React.FC<{ messages: messageType[]; socket: any; joinedUsers: number }> = ({
  messages,
  socket,
  joinedUsers
}) => {


  const { username, roomid } = useParams();
  
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length) {
      ref.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages.length]);
  
  return (
    <div
      className="h-screen w-full sm:w-3/5 overflow-hidden flex flex-col justify-between items-start bg-[#15161D] border border-[#252329] relative"
      style={{
        backgroundImage: `url( ${bgNoise} )`,
      }}
    >
      <TopBar roomid={roomid} joinedUsers={joinedUsers} />
      <div className="flex flex-col justify-start items-center h-full w-full p-5 overflow-y-auto gap-2 relative">
        {messages.map((message: messageType, index: number) => (
          <>
            {message.user === username?.toLowerCase() ? (
              <div className="flex flex-col items-end px-5 rounded-md w-full text-wrap">
                <p
                  key={index}
                  className="flex flex-col justify-start items-end font-normal text-white text-sm px-5 py-1 m-1 bg-[#1690AF] rounded-b-2xl rounded-tl-2xl relative leading-4"
                >
                  <span>{message.text}</span>
                  <span className="text-[10px]">{message.createdAt}</span>
                </p>
              </div>
            ) : message.user !== "Admin" ? (
              <div className="flex flex-col items-start px-5 rounded-md w-full text-wrap">
                <p className="text-[#1690AF]">{message.user}</p>
                <p
                  key={index}
                  className="flex flex-col justify-start items-start font-light text-white text-sm px-5 py-1 m-1 bg-[#1E1E26] rounded-b-2xl rounded-tr-2xl"
                >
                  <span>{message.text}</span>
                  <p className="flex justify-end items-end w-full text-[10px]">
                    {message.createdAt}
                  </p>
                </p>
              </div>
            ) : (
              <div className="flex justify-center items-center font-light text-white text-sm px-5 py-1 m-1 bg-slate-700 bg-opacity-25 rounded-full gap-3">
                <p className="text-white ">{message.user}</p>
                <p key={index}>
                  <span>{message.text}</span>
                  <span className="text-[10px] pl-2 text-slate-700">{message.createdAt}</span>
                </p>
              </div>
            )}
          </>
        ))}
      <div ref={ref} />
      </div>
      <SendMessageInput socket={socket} />
    </div>
  );
};

export default Messages;
