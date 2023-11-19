import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import ContentArea from "../Components/ContentArea";
import { dbObject } from "../Helper/Constants";

function EventsPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await dbObject.get(
        "/events-blogs/fetch-events-blogs.php"
      );

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
        <div className="md:w-[80%] w-full mx-auto">
          {data.map((data, index) => (
            <div key={data.id}>
              <LargeCard index={index} data={data} />
            </div>
          ))}
        </div>
      </ContentArea>
    </>
  );
}

export default EventsPage;

function LargeCard({ index, data }) {
  return (
    <div className="md:grid md:grid-cols-2 gap-2 items-center md:mb-36 mb-20 mx-auto">
      <div className="h-[350px] md:w-auto w-[90%] mx-auto md:mb-0 mb-5 bg-gray-800/80 p-5">
        <img src={data.image} alt="" className="h-full w-full object-contain" />
      </div>

      <div className={`${index % 2 != 0 ? "md:order-first" : "md:order-last"}`}>
        <h1 className="font-semibold text-xl text-white mb-2">{data.title}</h1>
        <p className="text-md font-normal text-gray-200 tracking-wider">
          {data.content}
        </p>
      </div>
    </div>
  );
}
