export interface ServerToClientEvents {

    message: (data: {text: string, user: string, createdAt: string}) => void
    roomData: (data: {text: string, user: string, createdAt: string}) => void
}

export interface ClientToServerEvents {
    join: (data: {username: string, room: string, isAdmin: string}, callback: (error: {status: string, error: string} | void) => void) => void;
    sendMessage: (message: string, callback: (error: string | void) => void) => void
}


