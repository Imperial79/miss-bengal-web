import React from "react";

function ContentArea({ children }) {
  return (
    <div className="main-bg-image">
      <div className="md:px-[70px] px-[20px] py-[20px] z-10 md:pt-16 pt-10">
        {children}
      </div>
    </div>
  );
}

export default ContentArea;
