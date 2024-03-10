import React, { useState, useRef } from "react";
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";

import happy from "../../assets/Happy.svg";
import sent from "../../assets/Sent.svg";

const SendMessageInput: React.FC<{ socket: any }> = ({ socket }) => {
  const [isLoading, setIsLoading] = useState(false);
  const messageRef = useRef<any>("");

  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleEmojiSelect = (emoji: any) => {
    // Update message content with the selected emoji (optional)
    messageRef.current.value += emoji.native;
    messageRef.current.focus(); // Focus input
    setShowEmojiPicker(false);
  };

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
    <div className="flex flex-col justify-center sm:justify-start items-center sm:items-start w-full">
      <div className="sm:mx-20 lg:mx-28 bg-transparent w-full">
        {showEmojiPicker && (
          <Picker
            data={data}
            onEmojiSelect={handleEmojiSelect}
            navPosition="up"
            previewPosition="none"
            emojiVersion="14"
            theme="dark"
            autoFocus="true"
            set="native"
          />
        )}
      </div>
      <div className="flex justify-center items-center w-full gap-3 my-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 from-10% via-purple-500 via-30% to-pink-500 to-90%"></div>
        <form
          onSubmit={sendMessageHandler}
          className="flex justify-center items-center bg-[#1C1C24] border border-[#1A262F] rounded-md w-4/5 gap-1"
        >
          <button
            type="button"
            className="flex justify-center items-center m-2"
            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
          >
            <img src={happy} alt="Emoji button" />
          </button>
          <input
            type="text"
            placeholder="Type a message..."
            ref={messageRef}
            className="bg-transparent w-4/5 border-none focus:border-none focus:outline-none"
          />
          <button
            type="submit"
            disabled={isLoading}
            className="flex justify-center items-center m-2"
          >
            <img src={sent} alt="Send button" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMessageInput;