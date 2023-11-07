import React from "react";
import ContentArea from "../Components/ContentArea";
import { Link } from "react-router-dom";

function Declaration() {
  return (
    <ContentArea>
      <div className="bg-gray-100 p-5 rounded-lg md:w-[90%] mx-auto shadow-xl">
        <h1 className="font-semibold mb-5">Step 3/5</h1>
        <h1 className="font-semibold mb-5">Declaration & Joining</h1>

        <div className="h-80 overflow-y-auto my-5">
          **Terms and Conditions** ** 1. Acceptance of Terms** By accessing or
          using [Your Company Name] (referred to as "the Company") services, you
          agree to comply with and be bound by these terms and conditions. If
          you do not agree to these terms, please do not use our services. **2.
          Use of Services** You must be at least 18 years old to use our
          services. You are responsible for maintaining the confidentiality of
          your account information, including your username and password. You
          agree to accept responsibility for all activities that occur under
          your account. **3. Privacy** Your use of our services is subject to
          our Privacy Policy. Please review the policy to understand how we
          collect, use, and disclose information. **4. Intellectual Property**
          All content, logos, trademarks, and other materials on our website are
          the intellectual property of the Company and are protected by
          copyright and other intellectual property laws. You may not use our
          intellectual property without our prior written consent. **5. User
          Content** You are solely responsible for any content you submit or
          post on our website. You agree not to post any content that is
          illegal, defamatory, infringing on intellectual property rights, or
          otherwise harmful. The Company reserves the right to remove any
          content at its discretion. **6. Disclaimer of Warranties** Our
          services are provided on an "as-is" and "as-available" basis. The
          Company makes no warranties, express or implied, regarding the
          accuracy, reliability, or completeness of the content provided. We do
          not guarantee that our services will be error-free or uninterrupted.
          **7. Limitation of Liability** The Company shall not be liable for any
          direct, indirect, incidental, special, or consequential damages,
          including but not limited to loss of profits, data, or goodwill,
          arising from the use or inability to use our services. **8.
          Termination** The Company reserves the right to terminate or suspend
          your access to our services at its discretion, with or without cause
          and without notice. **9. Governing Law** These terms and conditions
          are governed by and construed in accordance with the laws of [Your
          Jurisdiction]. Any disputes or claims arising from these terms will be
          subject to the exclusive jurisdiction of the courts in [Your
          Jurisdiction]. **10. Changes to Terms and Conditions** The Company may
          update or modify these terms and conditions at any time. It is your
          responsibility to review these terms periodically. Your continued use
          of our services after any changes indicates your acceptance of the
          modified terms. **11. Contact Information** If you have any questions
          or concerns about these terms and conditions, please contact us at
          [Your Contact Information]. This is a generic sample, and you should
          adapt it to your specific business and legal requirements. It's
          essential to consult with a legal professional to ensure that your
          terms and conditions comply with applicable laws and regulations.
        </div>

        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="agree"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-cyan-300"
              required
            />
          </div>
          <label
            htmlFor="agree"
            className="ml-2 text-sm font-medium text-gray-900"
          >
            I agree.
          </label>
        </div>

        <div className="flex justify-between">
          <Link
            to="/terms"
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
            to="/upload-docs"
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
      </div>
    </ContentArea>
  );
}

export default Declaration;
