import React, { useEffect, useState } from "react";
import ContentArea from "../Components/ContentArea";
import Hero from "../Components/Hero";
import ImageCarousel from "../Components/ImageCarousel";
import { Link } from "react-router-dom";
import { dbObject } from "../Helper/Constants";

function HomePage() {
  const [loading, setloading] = useState(false);
  const [data, setdata] = useState([]);
  const [carouselList, setcarouselList] = useState([]);

  async function fetchCarousels() {
    try {
      setloading(true);
      const response = await dbObject.get("/carousels/fetch-carousels.php");

      if (!response.data.error) {
        setcarouselList(response.data.response);
      }
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  }

  async function fetchAuditions() {
    try {
      setloading(true);
      const response = await dbObject.get("/auditions/fetch-auditions.php");

      if (!response.data.error) {
        setdata(response.data.response);
      }
      setloading(false);
    } catch (error) {
      setloading(false);
    }
  }

  useEffect(() => {
    fetchCarousels();
    fetchAuditions();
  }, []);

  return (
    <>
      <Hero />

      <ContentArea isLoading={loading}>
        <h1 className="text-[30px] font-bold text-white mb-2">
          Recent Castings
        </h1>
        <h1 className="text-[15px] text-white">
          Checkout recent shows and the hall of fame
        </h1>
        {carouselList.length > 0 ? (
          <ImageCarousel slides={carouselList} />
        ) : (
          <></>
        )}

        <h1 className="text-[30px] font-bold text-white mb-2 mt-4">
          Upcoming auditions
        </h1>
        <h1 className="text-[15px] text-white">
          Checkout the upcoming auditions so that you do not miss them
        </h1>

        {data.map((data, index) => (
          <div key={data.id}>
            <PostCard data={data} />
          </div>
        ))}

        {/* <div className="grid md:grid-cols-2 mt-5 gap-10">
          <HeroPost />
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
        </div> */}
      </ContentArea>
    </>
  );
}

export default HomePage;

function PostCard({ data }) {
  return (
    <>
      <div className="md:flex text-white items-start p-5 bg-gray-200 bg-opacity-20 backdrop-blur-sm rounded-lg gap-4 mt-5">
        <img
          src={data.image}
          alt=""
          className="h-full md:w-1/5 w-full rounded-lg object-contain"
        />

        <div>
          <h1 className="font-semibold text-white text-lg md:mt-0 mt-2">
            {data.title}
          </h1>
          <h1 className="font-medium mt-2 text-sm">
            {data.participants} Participants
          </h1>
          <h1 className="mt-2 font-normal text-gray-200 text-md">
            {data.description}
          </h1>
          <div className="flex justify-end">
            <button className="bg-cyan-200 text-black font-semibold px-4 py-2 rounded-full shadow-cyan-400 shadow-2xl hover:shadow-none transition-all duration-200 hover:bg-cyan-300 hover:text-black md:w-auto w-full mt-4">
              Participate
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
