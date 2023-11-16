import React from "react";
import NavBar from "../Components/NavBar";
import ImageGrid from "../Components/ImageGrid";
import ContentArea from "../Components/ContentArea";

function Pageants() {
  const images = [
    {
      src: "https://img.freepik.com/free-photo/afro-young-adult-woman-exudes-confidence-generative-ai_188544-7654.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700006400&semt=ais",
      alt: "Image 1",
    },
    {
      src: "https://img.freepik.com/free-photo/afro-young-adult-woman-exudes-confidence-generative-ai_188544-7654.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700006400&semt=ais",
      alt: "Image 2",
    },
    {
      src: "https://img.freepik.com/free-photo/afro-young-adult-woman-exudes-confidence-generative-ai_188544-7654.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700006400&semt=ais",
      alt: "Image 2",
    },
    {
      src: "https://img.freepik.com/free-photo/afro-young-adult-woman-exudes-confidence-generative-ai_188544-7654.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700006400&semt=ais",
      alt: "Image 2",
    },
    {
      src: "https://img.freepik.com/free-photo/afro-young-adult-woman-exudes-confidence-generative-ai_188544-7654.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700006400&semt=ais",
      alt: "Image 2",
    },
    {
      src: "https://img.freepik.com/free-photo/afro-young-adult-woman-exudes-confidence-generative-ai_188544-7654.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700006400&semt=ais",
      alt: "Image 2",
    },
    {
      src: "https://img.freepik.com/free-photo/afro-young-adult-woman-exudes-confidence-generative-ai_188544-7654.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700006400&semt=ais",
      alt: "Image 2",
    },
    {
      src: "https://img.freepik.com/free-photo/afro-young-adult-woman-exudes-confidence-generative-ai_188544-7654.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1700006400&semt=ais",
      alt: "Image 2",
    },
  ];
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
          <ImageGrid images={images} />
        </div>
      </ContentArea>
    </>
  );
}

export default Pageants;
