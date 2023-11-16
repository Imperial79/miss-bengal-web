import React from "react";
import { Link } from "react-router-dom";

function HomeMenu({ isOpen }) {
  return (
    <div
      className={`${
        isOpen ? "translate-y-20" : "-translate-y-full"
      } fixed top-0 left-0 z-40 w-full h-auto transition-transform light:bg-gray-800 light:border-gray-700`}
    >
      <div
        id="home-menu"
        className={`grid grid-cols-3 gap-4 shadow-2xl md:hidden p-5 bg-gray-800 rounded-b-xl`}
      >
        <MenuButton to="/" label="Home" />
        <MenuButton to="/about-us" label="About Us" />
        <MenuButton to="/events" label="Events" />
        <MenuButton to="/peageabts" label="Pageants" />
        <MenuButton to="/contact-us" label="Contact Us" />
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
