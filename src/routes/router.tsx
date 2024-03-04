import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './error-page';
import App from '../App';
import Chat from '../components/Chat';
// import Room from '../pages/Room';
import Home from '@/pages/Home/Home';
import RoomNew from '@/pages/Room/RoomNew';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: "chat",
            element: <Chat />,
        },
        
      ]
    },
    {
      path: ":username/room/:roomid",
      // element: <Room />,
      element: <RoomNew />
    },
]);