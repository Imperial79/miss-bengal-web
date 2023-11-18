import React from "react";
import NavBar from "../Components/NavBar";
import ContentArea from "../Components/ContentArea";

function EventsPage() {
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
        <div className="md:w-[80%] w-full mx-auto">
          <LargeCard index={0} />
          <LargeCard index={1} />
        </div>
      </ContentArea>
    </>
  );
}

export default EventsPage;

function LargeCard({ index }) {
  return (
    <div className="md:grid md:grid-cols-2 gap-2 items-center mb-36 mx-auto">
      <div className="h-[350px] md:w-auto w-[90%] mx-auto md:mb-0 mb-5 bg-gray-800/80 p-5">
        <img
          src="https://www.24x7review.com/wp-content/uploads/2019/06/Miss-West-Bengal-2019-Sushmita-Roy-2-819x1024.jpg"
          alt=""
          className="h-full w-full object-contain"
        />
      </div>
      <p
        className={`text-md font-medium text-gray-200 tracking-wider ${
          index % 2 != 0 ? "md:order-first" : "md:order-last"
        }`}
      >
        Lorem Ipsum, sometimes referred to as 'lipsum', is the placeholder text
        used in design when creating content. It helps designers plan out where
        the content will sit, without needing to wait for the content to be
        written and approved. It originally comes from a Latin text, but to
        today's reader, it's seen as gibberish.
        <br /> Lorem Ipsum, sometimes referred to as 'lipsum', is the
        placeholder text used in design when creating content. It helps
        designers plan out where the content will sit, without needing to wait
        for the content to be written and approved. It originally comes from a
        Latin text, but to today's reader, it's seen as gibberish.
        <br /> Lorem Ipsum, sometimes referred to as 'lipsum', is the
        placeholder text used in design when creating content. It helps
        designers plan out
      </p>
    </div>
  );
}
