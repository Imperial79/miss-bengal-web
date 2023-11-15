import React, { useEffect, useState } from "react";
import logo from "../assets/react.svg";
import menu from "../assets/menu.svg";
import HomeMenu from "./HomeMenu";
import { Link } from "react-router-dom";
import logo2 from "../assets/logo2.png";

function NavBar() {
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
      <div className="md:py-0 py-[10px] px-[20px] bg-gray-800 text-white flex flex-wrap justify-between items-center fixed w-full z-20 top-0 left-0 h-20">
        <div className="flex items-center">
          <img src={logo2} alt="" className="md:h-16 h-14 mr-3" />
        </div>
        <ul className="md:flex hidden gap-10 items-center">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about-us" className="hover:underline">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/events" className="hover:underline">
              Events
            </Link>
          </li>
          <li>
            <Link to="" className="hover:underline">
              Peageants
            </Link>
          </li>
          <li>
            <Link to="" className="hover:underline">
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex items-center">
          <Link
            to="/signup"
            type="button"
            className="text-black bg-[#00D8FF] hover:bg-cyan-300 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-lg transition-all hover:shadow-none shadow-2xl shadow-[#00D8FF] text-sm px-5 py-2.5 text-center font-semibold"
          >
            Join
          </Link>

          <button
            onClick={toggleMenu}
            className="rounded-xl bg-black ml-5 p-[10px] md:hidden block"
          >
            <img src={menu} alt="" className="h-6" />
          </button>
        </div>
      </div>

      <HomeMenu isOpen={isMenuOpen} />
    </>
  );
}

export default NavBar;
