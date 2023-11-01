import React from "react";
import NavBar from "./NavBar";

function Hero() {
  return (
    <div className="bg-gray-800 text-white">
      <NavBar />
      <div className="md:px-[80px] px-[20px] md:py-[70px] py-[20px] mt-20">
        <div className="mb-10">
          <h1 className="md:text-6xl text-[40px] font-bold">
            You're the Talent
          </h1>
          <h1 className="md:text-4xl text-[18px] mt-2">we're looking for !</h1>
        </div>

        <div className="grid md:grid-cols-3 md:gap-10 gap-5">
          <HeroCards
            title="Best talents in one place"
            subtitle="we're looking forwe're looking forwe're looking forwe're looking forwe're looking for"
          />
          <HeroCards
            title="Best talents in one place"
            subtitle="we're looking forwe're looking forwe're looking forwe're looking forwe're looking for"
          />
          <HeroCards
            title="Best talents in one place"
            subtitle="we're looking forwe're looking forwe're looking forwe're looking forwe're looking for"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

function HeroCards(props) {
  return (
    <>
      <div className="bg-black text-slate-50 p-[15px] w-full rounded-xl">
        <h1 className="font-medium">{props.title}</h1>
        <h1 className="font-normal text-sm mt-1 max2lines text-slate-300">
          {props.subtitle}
        </h1>
      </div>
    </>
  );
}
