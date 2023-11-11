import React from "react";
import ContentArea from "../Components/ContentArea";
import successIcon from "../assets/success.webp";

function Confirmation() {
  return (
    <ContentArea>
      <div className="bg-gray-100 p-10 rounded-lg md:w-[90%] mx-auto shadow-xl md:grid md:grid-cols-2 items-center gap-x-10">
        <img src={successIcon} alt="" className="max-h-96 md:mx-0 mx-auto" />

        <div className="md:text-start text-center">
          <h1 className="font-bold text-4xl text-cyan-700">
            Thank You! for participating
          </h1>
          <h1 className="font-medium mt-5 text-lg text-gray-600">
            You've been added to the wailist.
          </h1>
          <h1 className="font-medium mt-1 text-lg text-gray-600">
            For further processes you'll be contacted via email by our team
          </h1>
        </div>
      </div>
    </ContentArea>
  );
}

export default Confirmation;
