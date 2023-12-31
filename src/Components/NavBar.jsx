import React, { useEffect, useState } from "react";
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
    document.addEventListener("mousedown", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("mousedown", closeMenuOnOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <>
      <div className="md:py-0 py-[10px] px-[20px] bg-gray-800 text-white flex flex-wrap justify-between items-center fixed w-full z-20 top-0 left-0 h-20">
        <div className="flex items-center">
          <Link to="/">
            <img
              src={logo2}
              alt=""
              className="md:h-16 h-14 mr-3 cursor-pointer"
            />
          </Link>
        </div>
        <ul className="md:flex hidden gap-10 items-center">
          <NavBtn to="/" label="Home" />
          <NavBtn to="/about-us" label="About Us" />
          <NavBtn to="/events" label="Events" />
          <NavBtn to="/pageants" label="Pageants" />
          <NavBtn to="/contact-us" label="Contact Us" />
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

function NavBtn({ to, label }) {
  return (
    <li>
      <Link
        to={to}
        className={`hover:underline active:bg-black px-3 py-2 rounded-xl ${
          window.location.pathname.replace("/", "").replace("-", " ") ===
          label.toLowerCase()
            ? "bg-black"
            : ""
        }`}
      >
        {label}
      </Link>
    </li>
  );
}
