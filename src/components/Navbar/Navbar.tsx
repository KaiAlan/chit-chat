import { Link } from "react-router-dom";

import logo from "../../assets/Chit-chat-logo.svg";
import menu from "../../assets/Menu Squared.svg";
import { useState } from "react";

const navigationLink = [
  { path: "/", name: "Home" },
  { path: "/games", name: "Games" },
  { path: "/about-us", name: "About Us" },
];

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="flex justify-start items-center w-full sm:px-10 top-0 sticky z-20 left-0 bg-[#15161D] bg-opacity-5 backdrop-blur-lg border-b-2 border-[#15161D] border-opacity-5">
      {!menuOpened && (
        <>
        <img
          src={menu}
          alt="Chit-Chat-logo"
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

      <ul className="hidden md:flex justify-center items-center w-full h-20 gap-10 mx-auto">
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
