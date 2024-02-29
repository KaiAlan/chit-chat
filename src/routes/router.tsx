import { createBrowserRouter } from 'react-router-dom';

import ErrorPage from './error-page';
import App from '../App';
import Chat from '../components/Chat';
import Room from '../components/Room';
import Home from '@/pages/Home';

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
        {
            path: ":username/room/:roomid",
            element: <Room />,
        },
      ]
    },
]);