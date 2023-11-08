import React from "react";
import ContentArea from "../Components/ContentArea.jsx";
import { Link } from "react-router-dom";

function Signup1() {
  return (
    <ContentArea>
      <div className="bg-gray-100 p-5 rounded-lg md:w-[90%] mx-auto shadow-xl">
        <h1 className="font-semibold mb-5">Step 1/5</h1>
        <h1 className="font-semibold mb-5">Personal Details</h1>

        <form action="">
          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Fullname
              </label>
              <input
                type="text"
                id="name"
                className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Vivek Verma"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Vivek Verma"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="mb-6">
              <label
                htmlFor="height"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Height (in feet)
              </label>
              <input
                type="number"
                id="height"
                className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Eg. 5.6 (in feet)"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="qualification"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Eg. Higher Secondary"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Address
            </label>
            <textarea
              type="address"
              id="address"
              className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
              placeholder=""
              required
            />
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="mb-6">
              <label
                htmlFor="aadhaar"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Aadhaar Number
              </label>
              <input
                type="text"
                id="aadhaar"
                maxLength={11}
                className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Eg. 12345678900"
                required
              />
            </div>
            <div className="mb-6">
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
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Previously participated anywhere? Please mention
            </label>
            <textarea
              type="address"
              id="address"
              className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
              placeholder="(Optional)"
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-gray-900"
            >
              I concent that all the above details are true and not fake.
            </label>
          </div>

          <div className="flex justify-end">
            <Link
              to="/terms"
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
        </form>
      </div>
    </ContentArea>
  );
}

export default Signup1;
