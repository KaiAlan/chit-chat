interface ServerToClientEvents {

    join: (username: string, room: string, isAdmin: string, callback: () => any) => any;
}

interface ClientToServerEvents {
    hello: () => void;
}

interface InterServerEvents {
    ping: () => void;
}

interface SocketData {
    name: string;
    age: number;
}
