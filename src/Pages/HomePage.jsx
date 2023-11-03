import React from "react";
import ContentArea from "../Components/ContentArea";
import Hero from "../Components/Hero";
import ImageCarousel from "../Components/ImageCarousel";

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

        <ImageCarousel />

        <h1 className="text-[30px] font-bold text-gray-700 mb-2 mt-4">
          Upcoming auditions
        </h1>
        <h1 className="text-[15px] text-gray-700">
          Checkout the upcoming auditions so that you do not miss them
        </h1>

        <div className="grid md:grid-cols-2 mt-5 gap-10">
          <div>
            <div className="h-[300px] bg-gray-200 rounded-lg">
              <img
                src="https://www.nyit.edu/files/events/Event_20201018_VirtualTalentShow_Hero.jpg"
                alt=""
                className="h-full w-full rounded-lg object-cover"
              />
            </div>
            <h1 className="mt-2 font-semibold text-black text-lg">
              Post title
            </h1>
            <h1 className="font-medium text-gray-400 text-sm">
              Posted{" "}
              <span
                className="font-semibold
           text-cyan-600"
              >
                2 days ago
              </span>
            </h1>
            <div className="flex items-center justify-between">
              <h1 className="font-medium mt-4 text-sm">200+ Applications</h1>
              <h1 className="font-medium mt-4 text-sm">500 Openings</h1>
            </div>
            <h1 className="mt-2 font-normal text-black text-md">
              Post description Post description Post description Post Post
              description Post description Post description Post description
              Post description Post description Post description description
              Post description Post description
            </h1>

            <button className="mt-2 bg-cyan-600 text-white px-4 py-2 rounded-full shadow-cyan-400 shadow-2xl hover:shadow-none transition-all duration-200 hover:bg-cyan-300 hover:text-black">
              Apply Now
            </button>
          </div>
          <div className="md:mt-0 mt-5">
            <div className="flex justify-between mb-5">
              <h1>Upcoming auditions</h1>
              <button>
                <h1 className="font-semibold text-cyan-600">See All</h1>
              </button>
            </div>
            <OtherPostsTile />
            <OtherPostsTile />
            <OtherPostsTile />
            <OtherPostsTile />
          </div>
        </div>
      </ContentArea>
    </>
  );
}

export default HomePage;

function OtherPostsTile() {
  return (
    <div className="flex items-center mb-5">
      <div className="md:w-[300px] w-1/3">
        <img
          src="https://i.ytimg.com/vi/sTmUOzH6hY4/maxresdefault.jpg"
          alt=""
          className="object-cover h-full w-full rounded-lg"
        />
      </div>
      <div className="ml-4 md:w-full w-2/3">
        <h1 className="font-semibold text-black text-md">Post Title</h1>
        <h1 className="font-medium text-gray-400 text-sm">
          Posted{" "}
          <span
            className="font-semibold
           text-cyan-600"
          >
            2 days ago
          </span>
        </h1>
        <h1 className="mt-2 font-normal text-black text-md max2lines">
          Post description Post description Post description Post Post
          description Post description Post description Post description Post
          description Post descripti
        </h1>
      </div>
    </div>
  );
}
