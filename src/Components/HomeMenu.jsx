import React from "react";
import { Link } from "react-router-dom";

function HomeMenu() {
  return (
    <div className="z-20 fixed w-full">
      <div
        id="home-menu"
        className="grid grid-cols-2 gap-4 shadow-2xl md:hidden p-5 bg-gray-800 rounded-b-xl"
      >
        <MenuButton to="/" label="Home" />
        <MenuButton to="/about-us" label="About Us" />
      </div>
    </div>
  );
}

export default HomeMenu;

function MenuButton({ to, label }) {
  return (
    <Link
      to={to}
      className="text-white text-center w-full bg-black rounded-lg px-5 py-3 mb-2 hover:bg-gray-700 transition-all"
    >
      {label}
    </Link>
  );
}
