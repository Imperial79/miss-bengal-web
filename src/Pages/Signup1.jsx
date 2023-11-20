import React, { useContext, useState } from "react";
import ContentArea from "../Components/ContentArea.jsx";
import { Context } from "../Helper/ContextProvider.jsx";

function Signup1() {
  const { signupDetails, setsignupDetails, _id } = useContext(Context);
  const [step1FormData, setstep1FormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
    height: "",
    qualification: "",
    address: "",
    aadhaarNumber: "",
    ppaRemark: "",
  });
  const handleInputChange = (e) => {
    setstep1FormData({
      ...step1FormData, // Preserve existing values
      [e.target.id]: e.target.value,
    });
  };
  function setFirstStep() {
    setsignupDetails(step1FormData);
    setsignupDetails({ fullname: "Avishek" });
    console.log(signupDetails);
    // console.log(signupDetails);
    // if (_id("password").value === _id("confirmPassword").value) {
    //   // console.log(step1FormData);
    //   // setsignupDetails(step1FormData);
    //   setsignupDetails({ fullname: "Avishek" });
    //   setsignupDetails({ phone: "909304878347" });
    //   console.log(signupDetails);
    // } else {
    //   console.log("Password and Confirm Password must be same");
    // }
  }

  return (
    <ContentArea>
      <div className="bg-gray-800/80 backdrop-blur-md border border-cyan-500 p-5 rounded-lg md:w-[90%] mx-auto shadow-xl text-white">
        <h1 className="font-semibold mb-5">Step 1/5</h1>
        <h1 className="font-semibold mb-5">Personal Details</h1>

        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            setFirstStep();
          }}
        >
          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="mb-6">
              <label
                htmlFor="fullname"
                className="block mb-2 text-sm font-medium text-white/80"
              >
                Fullname
              </label>
              <input
                type="text"
                id="fullname"
                className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Vivek Verma"
                required
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white/80"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Vivek Verma"
                required
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="mb-6">
              <label
                htmlFor="height"
                className="block mb-2 text-sm font-medium text-white/80"
              >
                Height (in feet)
              </label>
              <input
                type="number"
                id="height"
                className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Eg. 5.6 (in feet)"
                required
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="qualification"
                className="block mb-2 text-sm font-medium text-white/80"
              >
                Qualification
              </label>
              <input
                type="text"
                id="qualification"
                className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Eg. Higher Secondary"
                required
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="address"
              className="block mb-2 text-sm font-medium text-white/80"
            >
              Address
            </label>
            <textarea
              type="address"
              id="address"
              className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
              placeholder=""
              required
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="mb-6">
              <label
                htmlFor="aadhaarNumber"
                className="block mb-2 text-sm font-medium text-white/80"
              >
                Aadhaar Number
              </label>
              <input
                type="number"
                id="aadhaarNumber"
                className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Eg. 12345678900"
                required
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-white/80"
              >
                Phone
              </label>
              <input
                type="number"
                id="phone"
                className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Eg. 909XXX1234"
                required
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 md:gap-4">
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block mb-2 text-sm font-medium text-white/80"
              >
                Create password
              </label>
              <input
                type="password"
                id="password"
                className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Create a new password"
                required
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block mb-2 text-sm font-medium text-white/80"
              >
                Confirm Password
              </label>
              <input
                type="text"
                id="confirmPassword"
                className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                placeholder="Confirm the password"
                required
                onChange={(e) => {
                  handleInputChange(e);
                }}
              />
            </div>
          </div>

          <div className="mb-6">
            <label
              htmlFor="ppaRemark"
              className="block mb-2 text-sm font-medium text-white/80"
            >
              Previously participated anywhere? Please mention
            </label>
            <textarea
              type="text"
              id="ppaRemark"
              className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
              placeholder="(Optional)"
              onChange={(e) => {
                handleInputChange(e);
              }}
            />
          </div>

          <div className="flex items-start mb-6">
            <div className="flex items-center h-5">
              <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-500 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300"
                required
              />
            </div>
            <label
              htmlFor="remember"
              className="ml-2 text-sm font-medium text-white/80"
            >
              I concent that all the above details are true and not fake.
            </label>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="text-white bg-cyan-700 hover:bg-cyan-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg transition-all text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800 flex items-center"
            >
              Next{" "}
              <svg
                className="w-3.5 h-3.5 ml-2"
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
            </button>
          </div>
        </form>
      </div>
    </ContentArea>
  );
}

export default Signup1;
