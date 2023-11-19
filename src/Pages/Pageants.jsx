import React, { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import ImageGrid from "../Components/ImageGrid";
import ContentArea from "../Components/ContentArea";
import { dbObject } from "../Helper/Constants";

function Pageants() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await dbObject.get("/pageants/fetch-pageants.php");

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
          <ImageGrid data={data} />
        </div>
      </ContentArea>
    </>
  );
}

export default Pageants;
