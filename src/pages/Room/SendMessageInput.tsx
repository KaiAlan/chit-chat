import React, { useState, useRef } from 'react';

const SendMessageInput: React.FC<{ socket : any }> = ({socket}) => {

  const [isLoading, setIsLoading] = useState(false);
  const messageRef = useRef<any>("");

  const sendMessageHandler = (event: any) => {
    event.preventDefault();
    setIsLoading(true);

    socket.emit("sendMessage", messageRef.current.value, (error: Error) => {
    setIsLoading(false);
      messageRef.current.value = ""; // Clear message
      messageRef.current.focus(); // Focus input

      if (error) {
        console.log(error);
      }
    });
  };

  return (
    <div>
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
            disabled={isLoading}
            className="flex justify-center items-center w-20 h-7 border rounded-full m-2 bg-blue-500 hover:bg-blue-900"
          >
            Send
          </button>
        </form>
    </div>
  )
}

export default SendMessageInput