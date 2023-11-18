import React from "react";
import ContentArea from "../Components/ContentArea";
import successIcon from "../assets/success.webp";
import { Link } from "react-router-dom";

function Confirmation() {
  return (
    <ContentArea>
      <div className="bg-gray-800/80 backdrop-blur-md border border-cyan-500 text-white p-10 rounded-lg md:w-[90%] mx-auto shadow-xl md:grid md:grid-cols-2 items-center gap-x-10">
        <img src={successIcon} alt="" className="max-h-96 md:mx-0 mx-auto" />

        <div className="md:text-start text-center">
          <h1 className="font-bold text-4xl text-cyan-300">
            Thank You! for participating
          </h1>
          <h1 className="font-medium mt-5 text-lg text-gray-200">
            You've been added to the wailist.
          </h1>
          <h1 className="font-medium mt-1 text-lg text-gray-200">
            For further processes you'll be contacted via email by our team
          </h1>

          <Link to="/">
            <div className="mt-5 cursor-pointer text-cyan-300 font-medium hover:text-cyan-500 hover:underline">
              Home
            </div>
          </Link>
        </div>
      </div>
    </ContentArea>
  );
}

export default Confirmation;
