import { Link } from "react-router-dom";

import logo from "../../assets/chit-chat-logo.svg";
import menu from "../../assets/Menu Squared.svg";
import { useState } from "react";

const navigationLink = [
  { path: "/", name: "Home" },
  { path: "/about-us", name: "About Us" },
  { path: "/chat", name: "Chat" },
  { path: "/games", name: "Games" },
];

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="flex justify-start items-center w-full sm:px-10 top-0 absolute h-20 z-20 left-0 bg-black border-b-zinc-900 border-x-0 border-t-0 border border-opacity-50 overflow-hidden">
      {!menuOpened && (
        <>
        <img
          src={menu}
          alt="menu"
          className="h-12 md:hidden px-5"
          onClick={() => setMenuOpened(!menuOpened)}
        />
        <img src={logo} alt="Chit-Chat-logo" className="h-20 md:h-28" />
        </>
      )}

      {menuOpened && (
        <div className="md:hidden flex justify-start items-start p-10 w-full h-screen bg-black bg-opacity-50 backdrop-blur-lg border-r-2 border-[#A725D4] border-opacity-20">
        <ul className="flex flex-col justify-start items-start gap-10 w-full font-bold">
          {navigationLink.map(({ path, name }, index) => (
            <li key={index}>
              <Link to={path} onClick={() => setMenuOpened(!menuOpened)}>{name}</Link>
            </li>
          ))}
        </ul>
          <button onClick={() => setMenuOpened(!menuOpened)}>close</button>
        </div>
      )}

      <ul className="hidden md:flex justify-center items-center w-full h-20 gap-20 font-light mx-auto">
        {navigationLink.map(({ path, name }, index) => (
          <li key={index}>
            <Link to={path}>{name}</Link>
          </li>
        ))}
      </ul>
      <div className="w-[178px]" />
    </div>
  );
};

export default Navbar;
