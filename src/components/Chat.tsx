import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const Chat = () => {

  // State for storing messages and current message
  const [messages, setMessages] = useState<string[]>([]);
  const [currentMessage, setCurrentMessage] = useState('');

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
      socket.emit('message', currentMessage);
      setCurrentMessage('');
    }
  };
  useEffect(() => {
    // Listen for incoming messages
    socket.on('message', (message) => {
      setMessages((prevMessages: string[]) => [...prevMessages, message]);
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-4/5 h-3/5 border-2 border-blue-400">
      <div className="flex flex-col justify-start items-start h-4/5 w-full bg-slate-900 p-5 overflow-y-auto">
        {messages.map((message : string, index: number) => (
            <li key={index} className='font-bold text-white'>{message}</li>
        ))}
        <div ref={ref} />
      </div>
      <div className='flex justify-center items-center gap-3'>
      <input
        type="text"
        placeholder="Type a message..."
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
        className='bg-transparent w-4/5 border border-blue-500'
      />
      <button onClick={sendMessage} className='flex justify-center items-center w-20 h-7 border rounded-full m-2 bg-blue-500 hover:bg-blue-900'>Send</button>
      </div>
    </div>
  )
}

export default Chat