import { Link } from "react-router-dom";

const navigationLink = [
  { path: "/", name: "Home" },
  { path: "aden/room/adens-room", name: "Room" },
  { path: "chat", name: "Chat" },
];

const Navbar = () => {
  return (

      <ul className="flex justify-center items-center w-screen h-10 gap-10 top-0 absolute">
        {navigationLink.map(({ path, name }, index) => (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>

  );
};

export default Navbar;
