import React, { useContext, useEffect, useState } from "react";
import ContentArea from "../Components/ContentArea";
import NavBar from "../Components/NavBar";
import { dbObject } from "../Helper/Constants";

function AboutUs() {
  const [data, setData] = useState({
    id: "",
    image1: "",
    image2: "",
    image3: "",
    wwr: "",
    wdu: "",
    ou: "",
  });
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await dbObject.get("/about-us/fetch-about-content.php");

      if (!response.data.error) {
        setData(response.data.response);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

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
      <ContentArea isLoading={loading}>
        <div className="md:w-[60%] w-full mx-auto text-center text-[#3dc0c3]">
          <h1 className="tracking-widest font-bold md:text-5xl text-2xl ">
            WHO WE ARE
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-50">{data.wwr}</p>

          <h1 className="mt-20 tracking-widest font-bold md:text-5xl text-2xl ">
            WHAT DRIVES US
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-50">{data.wdu}</p>

          <div className="grid grid-cols-3 md:gap-10 gap-5 mt-20">
            <AboutImageCard url={data.image1} />
            <AboutImageCard url={data.image2} />
            <AboutImageCard url={data.image3} />
          </div>

          <h1 className="mt-20 tracking-widest font-bold md:text-5xl text-2xl">
            OUR INITIATIVES
          </h1>
          <p className="mt-4 text-lg font-medium text-gray-50">{data.ou}</p>
        </div>
      </ContentArea>
    </>
  );
}

export default AboutUs;

function AboutImageCard({ url }) {
  return (
    <div className="bg-gray-800/80 p-3">
      <img src={url} alt="" className="object-cover h-full w-full" />
    </div>
  );
}
