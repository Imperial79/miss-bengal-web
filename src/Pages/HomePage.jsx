import React from "react";
import ContentArea from "../Components/ContentArea";
import Hero from "../Components/Hero";
import Carousel from "../Components/Carousel";

function HomePage() {
  return (
    <>
      <Hero />

      <ContentArea>
        <h1 className="text-[30px] font-bold text-gray-700 mb-2">
          Recent Castings
        </h1>
        <h1 className="text-[15px] text-gray-700">
          Checkout recent shows and the hall of fame
        </h1>

        <Carousel />
      </ContentArea>
    </>
  );
}

export default HomePage;
