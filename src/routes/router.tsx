import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './error-page';
import App from '../App';
import Chat from '../components/Chat';
import Room from '../components/Room';
import JoinRoom from '../components/JoinRoom';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <JoinRoom />
        },
        {
            path: "chat",
            element: <Chat />,
        },
        {
            path: ":username/room/:roomid",
            element: <Room />,
        },
      ]
    },
]);