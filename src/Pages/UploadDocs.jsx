import React, { useState } from "react";
import { Link } from "react-router-dom";
import ContentArea from "../Components/ContentArea";

function UploadDocs() {
  const [showDropdown, setShowDropdown] = useState();
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDopdownSelect = (e) => {
    document.getElementById("dropdownText").innerHTML = e.target.textContent;
    toggleDropdown();
  };

  return (
    <ContentArea>
      <div className="bg-gray-800/80 backdrop-blur-md border border-cyan-500 p-5 rounded-lg md:w-[90%] mx-auto shadow-xl text-white">
        <h1 className="font-semibold mb-5">Step 4/5</h1>
        <h1 className="font-semibold">Upload Documents</h1>
        <h1 className="text-red-300 font-medium mb-5 text-sm">
          <span className="text-red-300">*</span>Documents are required
        </h1>

        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-100"
          >
            Choose recent selfie <span className="text-red-300">*</span>
          </label>
          <input
            className="block w-full text-sm text-gray-200 border border-gray-500 cursor-pointer bg-gray-700 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
            id="file_input"
            type="file"
          />
        </div>
        <div className="md:flex items-end md:gap-4">
          <div className="md:w-1/5 w-full relative">
            <button
              id="dropdownDefaultButton"
              onClick={toggleDropdown}
              data-dropdown-toggle="dropdown"
              className="w-full text-gray-100 bg-gray-700 hover:bg-gray-600 focus:ring-1 focus:outline-none font-medium border border-gray-500 text-sm px-5 py-2.5 text-center h-10 inline-flex items-center justify-between md:mb-0 mb-5"
              type="button"
            >
              <h1 id="dropdownText">Choose Document</h1>
              <svg
                className="w-2.5 h-2.5 ml-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            <div
              id="dropdown"
              className={`z-10 w-full ${
                showDropdown ? "absolute" : "hidden"
              } bg-gray-700 divide-y divide-gray-100 rounded-lg shadow`}
            >
              <ul
                className="py-2 text-sm text-gray-100 "
                aria-labelledby="dropdownDefaultButton"
              >
                <DropdownBtn
                  onClick={(e) => {
                    handleDopdownSelect(e);
                  }}
                  label="Aadhaar Card"
                />
                <DropdownBtn
                  onClick={(e) => {
                    handleDopdownSelect(e);
                  }}
                  label="PAN Card"
                />
                <DropdownBtn
                  onClick={(e) => {
                    handleDopdownSelect(e);
                  }}
                  label="Voter ID"
                />
              </ul>
            </div>
          </div>

          <div className="md:w-4/5">
            <div className="">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-100"
              >
                Choose Document <span className="text-red-300">*</span>
              </label>
              <input
                className="block w-full text-sm text-gray-200 border border-gray-500 cursor-pointer bg-gray-700 light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
                id="file_input"
                type="file"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-5">
          <Link
            to="/declaration"
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
            to="/verification"
            type="button"
            className="text-white bg-cyan-700 hover:bg-cyan-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg transition-all text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800 flex items-center"
          >
            Next{" "}
            <svg
              class="w-3.5 h-3.5 ml-2"
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
          </Link>
        </div>
      </div>
    </ContentArea>
  );
}

export default UploadDocs;

function DropdownBtn({ onClick, label }) {
  return (
    <li>
      <button
        onClick={onClick}
        className="text-start w-full px-4 py-2 hover:bg-gray-600"
      >
        {label}
      </button>
    </li>
  );
}
