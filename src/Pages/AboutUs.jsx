import React from "react";
import ContentArea from "../Components/ContentArea";
import NavBar from "../Components/NavBar";

function AboutUs() {
  return (
    <>
      <NavBar />
      <div className="w-full md:h-[400px] h-[200px] mt-20">
        <img
          src="https://i.ytimg.com/vi/7Xm3ZvUGksg/maxresdefault.jpg"
          alt=""
          className="object-cover w-full h-full"
        />
      </div>
      <ContentArea>
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
