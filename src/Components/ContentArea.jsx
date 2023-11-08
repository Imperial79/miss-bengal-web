import React from "react";
import mainBg from "../assets/main-bg.jpg";

function ContentArea({ children }) {
  return (
    <div style={{ backgroundImage: `url(${mainBg})` }}>
      <div className="md:px-[70px] px-[20px] py-[20px] z-10 md:pt-16 pt-10">
        {children}
      </div>
    </div>
  );
}

export default ContentArea;
