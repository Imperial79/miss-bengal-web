import React from "react";
import { Link } from "react-router-dom";
import ContentArea from "../Components/ContentArea";

function UploadDocs() {
  return (
    <ContentArea>
      <div className="bg-gray-100 p-5 rounded-lg md:w-[90%] mx-auto shadow-xl">
        <h1 className="font-semibold mb-5">Step 4/5</h1>
        <h1 className="font-semibold">Upload Documents</h1>
        <h1 className="text-red-600 font-semibold mb-5 text-sm">
          <span className="text-red-600">*</span> All the documents are required
        </h1>

        <form action="">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Upload recent selfie
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-white light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
              id="selfie"
              type="file"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Upload Aadhaar ID <span className="text-red-600">*</span>
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-white light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Upload Voter Card <span className="text-red-600">*</span>
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-white light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Upload PAN Card <span className="text-red-600">*</span>
            </label>
            <input
              class="block w-full text-sm text-gray-900 border border-gray-300 cursor-pointer bg-white light:text-gray-400 focus:outline-none light:bg-gray-700 light:border-gray-600 light:placeholder-gray-400"
              id="file_input"
              type="file"
            />
          </div>

          <div className="flex justify-between">
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              Previous
            </Link>
            <Link
              to=""
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </form>
      </div>
    </ContentArea>
  );
}

export default UploadDocs;
