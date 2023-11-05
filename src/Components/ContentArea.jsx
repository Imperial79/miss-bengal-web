import React from "react";

function ContentArea(props) {
  return (
    <div className="main-bg-image">
      <div className="md:px-[70px] px-[20px] py-[20px] z-10 md:pt-16 pt-10">
        {props.children}
      </div>
    </div>
  );
}

export default ContentArea;
