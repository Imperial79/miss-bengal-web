import React from "react";

function HomeMenu() {
  return (
    <div className="z-20 fixed w-full ">
      <div
        id="home-menu"
        className="grid grid-cols-3 gap-4 shadow-2xl md:hidden p-5 bg-gray-800 rounded-b-xl"
      >
        <MenuButton label="Home" />
        <MenuButton label="Blogs" />
        <MenuButton label="About Us" />
      </div>
    </div>
  );
}

export default HomeMenu;

function MenuButton(props) {
  return (
    <div className="text-center w-full bg-black rounded-lg px-5 py-3 mb-2 hover:bg-gray-700 transition-all">
      {props.label}
    </div>
  );
}
