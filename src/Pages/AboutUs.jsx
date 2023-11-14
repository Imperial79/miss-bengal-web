import React from "react";
import ContentArea from "../Components/ContentArea";
import { Link } from "react-router-dom";
import NavBar from "../Components/NavBar";

function AboutUs() {
  return (
    <>
      {" "}
      <NavBar />
      <div className="w-full md:h-full h-[200px] mt-20">
        <img
          src="https://static.wixstatic.com/media/47cf01_60f833161964479e9590d0f4f4fc195b~mv2.png/v1/fill/w_1899,h_625,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/47cf01_60f833161964479e9590d0f4f4fc195b~mv2.png"
          alt=""
          className="object-cover w-full md:h-full h-[200px]"
        />
      </div>
      <ContentArea>
        {/* <div className="bg-gray-100 p-5 rounded-lg md:w-[90%] mx-auto shadow-xl">
          <h1 className="font-semibold mb-5">About Us</h1>
          <h1 className="font-semibold mb-5">Verify your phone</h1>
          <div className="flex items-center mb-6 gap-2">
            <div className="md:w-[200px] w-full">
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
            <button className="rounded-md min-w-max bg-cyan-700 text-white px-2.5 py-1.5 text-sm font-medium hover:bg-cyan-600">
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
              className="bg-white border border-gray-300 text-gray-900 text-sm focus:ring-cyan-500 focus:border-cyan-500 block md:w-[200px] w-full p-2.5"
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
              to="/confirmation"
              type="button"
              className="text-white bg-cyan-700 hover:bg-cyan-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg transition-all text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800"
            >
              Verify & Register
            </Link>
          </div>
        </div> */}
        <div className="md:w-[60%] w-full mx-auto text-center">
          <h1 className="tracking-widest font-bold md:text-5xl text-2xl text-cyan-800">
            WHO WE ARE
          </h1>
          <p className="mt-4 text-lg font-medium">
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
            text used in design when creating content. It helps designers plan
            out where the content will sit, without needing to wait for the
            content to be written and approved. It originally comes from a Latin
            text, but to today's reader, it's seen as gibberish.
          </p>

          <h1 className="mt-20 tracking-widest font-bold md:text-5xl text-2xl text-cyan-800">
            WHAT DRIVES US
          </h1>
          <p className="mt-4 text-lg font-medium">
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
            text used in design when creating content. It helps designers plan
            out where the content will sit, without needing to wait for the
            content to be written and approved. It originally comes from a Latin
            text, but to today's reader, it's seen as gibberish.
          </p>

          <div className="grid grid-cols-3 md:gap-10 gap-5 mt-20">
            <div className="bg-black">
              <img
                src="https://www.24x7review.com/wp-content/uploads/2019/06/Miss-West-Bengal-2019-Sushmita-Roy-2-819x1024.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="bg-black">
              <img
                src="https://www.24x7review.com/wp-content/uploads/2019/06/Miss-West-Bengal-2019-Sushmita-Roy-2-819x1024.jpg"
                alt=""
                className="object-cover"
              />
            </div>
            <div className="bg-black">
              <img
                src="https://www.24x7review.com/wp-content/uploads/2019/06/Miss-West-Bengal-2019-Sushmita-Roy-2-819x1024.jpg"
                alt=""
                className="object-cover"
              />
            </div>
          </div>

          <h1 className="mt-20 tracking-widest font-bold md:text-5xl text-2xl text-cyan-800">
            OUR INITIATIVES
          </h1>
          <p className="mt-4 text-lg font-medium">
            Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder
            text used in design when creating content. It helps designers plan
            out where the content will sit, without needing to wait for the
            content to be written and approved. It originally comes from a Latin
            text, but to today's reader, it's seen as gibberish.
          </p>
        </div>
      </ContentArea>
    </>
  );
}

export default AboutUs;
