import React from "react";
import mainBg from "../assets/bg.jpg";

import Loading from "../Components/Loading";

function ContentArea({ children, isLoading }) {
  return (
    <>
      <div className="relative">
        <div
          className={`w-screen z-50 min-h-full bg-black/50 backdrop-blur-md ${
            isLoading ? "absolute" : "hidden"
          }`}
        >
          <Loading />
        </div>
        <div style={{ backgroundImage: `url(${mainBg})` }}>
          <div className="md:px-[70px] px-[20px] py-[20px] z-10 md:pt-16 pt-10 min-h-screen">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentArea;
