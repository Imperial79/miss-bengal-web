import React, { useEffect, useState } from "react";
import logo from "../assets/react.svg";
import menu from "../assets/menu.svg";
import HomeMenu from "./HomeMenu";

function NavBar() {
  // function handleShowMenu() {
  //   let menu = document.getElementById("menu");
  //   if (menu.classList.contains("hidden")) {
  //     menu.classList.remove("hidden");
  //   } else {
  //     menu.classList.add("hidden");
  //   }
  // }

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const closeMenuOnOutsideClick = (e) => {
      if (isMenuOpen && e.target.closest("#home-menu") === null) {
        setMenuOpen(!isMenuOpen);
      }
    };
    // if (isMenuOpen) {
    document.addEventListener("mousedown", closeMenuOnOutsideClick);
    // }
    return () => {
      document.removeEventListener("mousedown", closeMenuOnOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="py-[10px] px-[20px] bg-gray-800 h-20 text-white flex flex-wrap justify-between items-center fixed w-full z-20 top-0 left-0">
        <ul className="md:flex hidden gap-10 items-center">
          <li>Home</li>
          <li>Blogs</li>
          <li>About Us</li>
        </ul>
        <div className="flex items-center">
          <img src={logo} alt="" className="md:h-10 h-7 mr-3" />
          <div>
            <h1 className=" font-medium">Miss</h1>
            <h1 className=" font-medium text-lg">Bengal</h1>
          </div>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="text-black bg-[#00D8FF] hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-lg transition-all hover:shadow-none shadow-2xl shadow-[#00D8FF] text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
          >
            For Actors
          </button>

          <button
            onClick={toggleMenu}
            className="rounded-xl bg-black ml-5 p-[10px] md:hidden block"
          >
            <img src={menu} alt="" className="h-6" />
          </button>
        </div>
      </div>

      {isMenuOpen && <HomeMenu />}
    </>
  );
}

export default NavBar;
