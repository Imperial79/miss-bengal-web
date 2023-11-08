import React from "react";
import ContentArea from "../Components/ContentArea";
import { Link } from "react-router-dom";

function Verification() {
  return (
    <ContentArea>
      <div className="bg-gray-100 p-5 rounded-lg md:w-[90%] mx-auto shadow-xl">
        <h1 className="font-semibold mb-5">Step 5/5</h1>
        <h1 className="font-semibold mb-5">Verify your phone</h1>
        <div className="flex items-center mb-6 gap-2">
          <div className="w-[200px]">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Phone
            </label>
            <input
              type="phone"
              id="phone"
              className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
              placeholder="Eg. 909XXX1234"
              required
            />
            <button className="text-cyan-600 font-semibold text-sm mt-1 hover:underline">
              Edit?
            </button>
          </div>
          <button className="rounded-md bg-cyan-700 text-white px-2.5 py-1.5 text-sm font-medium hover:bg-cyan-600">
            Send OTP
          </button>
        </div>

        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Enter OTP
          </label>
          <input
            type="phone"
            id="phone"
            className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-[200px] p-2.5"
            placeholder=""
            required
          />
        </div>

        <div className="flex justify-between">
          <Link
            to="/upload-docs"
            type="button"
            className="text-white bg-cyan-700 hover:bg-cyan-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg transition-all text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800 flex items-center"
          >
            <svg
              class="w-3.5 h-3.5 mr-2 rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            Previous
          </Link>

          <Link
            to=""
            type="button"
            className="text-white bg-cyan-700 hover:bg-cyan-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg transition-all text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
          >
            Verify & Register
          </Link>
        </div>
      </div>
    </ContentArea>
  );
}

export default Verification;
