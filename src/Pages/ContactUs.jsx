import React from "react";
import NavBar from "../Components/NavBar";
import ContentArea from "../Components/ContentArea";
import { Link } from "react-router-dom";

function ContactUs() {
  return (
    <>
      <NavBar />

      <ContentArea>
        <div className="mt-20 text-gray-200">
          <h1 className="text-5xl font-semibold">Contact Us</h1>
          <p className="mt-5">
            Thank you for your interest in [Your Company Name]! We're here to
            assist you and answer any questions you may have.
          </p>

          <h2 className="text-2xl font-semibold mt-10">General Inquiries</h2>
          <p className="mt-5">
            For general inquiries, please contact us at:
            <br />
            <br />
            Email:{" "}
            <span className="hover:text-cyan-400 font-medium cursor-pointer">
              inquiry@missbengal.in
            </span>
            <br />
            Phone:{" "}
            <span className="hover:text-cyan-400 font-medium cursor-pointer">
              +91 102010901920
            </span>
          </p>

          <h2 className="text-2xl font-semibold mt-10">Feedback</h2>
          <p className="mt-5">
            We value your feedback! Whether it's a suggestion, compliment, or
            concern, we want to hear from you. Use the form below to share your
            thoughts:
          </p>

          <div className="mt-10 bg-gray-800/80 backdrop-blur-md border border-cyan-500 lg:p-[10%] md:p-[5%] p-[5%] rounded-lg shadow-xl text-white">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
              }}
            >
              <div className="grid md:grid-cols-2 md:gap-4">
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-white/80"
                  >
                    Fullname
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                    placeholder="Vivek Verma"
                    required
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
                  />
                </div>
              </div>

              <div className="mb-6">
                <label
                  htmlFor="address"
                  className="block mb-2 text-sm font-medium text-white/80"
                >
                  Message
                </label>
                <textarea
                  type="address"
                  id="address"
                  className="bg-gray-700 border border-gray-500 text-white/80 text-sm focus:ring-cyan-500 focus:border-cyan-500 block w-full p-2.5"
                  placeholder=""
                  required
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
                <Link
                  to="/terms"
                  type="button"
                  className="text-white bg-cyan-700 hover:bg-cyan-300 hover:text-black focus:outline-none focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg transition-all text-sm px-5 py-2.5 text-center light:bg-blue-600 light:hover:bg-blue-700 light:focus:ring-blue-800 flex items-center"
                >
                  Post Inquiry
                </Link>
              </div>
            </form>
          </div>
        </div>
      </ContentArea>
    </>
  );
}

export default ContactUs;
