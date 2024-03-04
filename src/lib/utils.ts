import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

import { messageType } from "@/pages/Room/RoomNew";

export function CheckIfRoomInactive(messages: messageType[]) {
  const lastMessageTime = messages[messages.length - 1].text

  if(lastMessageTime) {
    console.log(lastMessageTime)
  }
}