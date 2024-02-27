import { Outlet, Link } from "react-router-dom";

const navigationLink = [
  { path: "/", name: "Home" },
  { path: 'aden/room/adens-room', name: "Room"},
  { path: 'chat', name: "Chat"}
]

const App = () => {
  return (
    <main className='flex flex-col justify-center items-center h-screen w-screen bg-[#1b1b1b] text-white'>
      <ul className="flex justify-center items-center w-screen h-10 gap-10 top-0 absolute">
          {
            navigationLink.map(({path, name}, index) => (
              <li key={index}>
                <Link to={path}>{name}</Link>
              </li>
            ))
          }
        </ul>
      <div className='flex justify-center items-center w-4/5 h-4/5 border'>
        <Outlet />
      </div>
    </main>
  )
}

export default App