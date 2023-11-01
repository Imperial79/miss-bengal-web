import React from "react";

function ContentArea(props) {
  return (
    <div className="md:px-[70px] px-[20px] py-[20px]">{props.children}</div>
  );
}

export default ContentArea;
