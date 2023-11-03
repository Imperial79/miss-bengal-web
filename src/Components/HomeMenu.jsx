import React from "react";

function HomeMenu() {
  return (
    <div
      id="home-menu"
      className="md:hidden block p-5 bg-cyan-950 mx-2 rounded-xl fixed w-[97%]"
    >
      <MenuButton label="Home" />
      <MenuButton label="Blogs" />
      <MenuButton label="About Us" />
    </div>
  );
}

export default HomeMenu;

function MenuButton(props) {
  return (
    <div className="w-full bg-black rounded-lg px-5 py-3 mb-2">
      {props.label}
    </div>
  );
}
