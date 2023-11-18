import { useEffect, useState } from "react";

const ImageCarousel = () => {
  const slides = [
    { url: "https://boec.com/wp-content/uploads/2020/01/Untitled-1.jpg" },
    {
      url: "https://www.nyit.edu/files/events/Event_20201018_VirtualTalentShow_Hero.jpg",
    },
    {
      url: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/11/website-banner-1-1668605482.jpg",
    },
    { url: "https://i.ytimg.com/vi/sTmUOzH6hY4/maxresdefault.jpg" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLast = currentIndex == slides.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const autoChangeSlide = () => {
    nextSlide();
  };
  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const slideTimer = setInterval(autoChangeSlide, 2000); // Change slide every 5 seconds (adjust as needed)

    // Clean up the timer when the component unmounts
    return () => {
      clearInterval(slideTimer);
    };
  }, [currentIndex]);

  return (
    <div>
      <div className="max-w-[1400px] md:h-[500px] h-[200px] w-full mt-[20px] relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>

        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
        </div>

        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black text-white cursor-pointer"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
        </div>
      </div>

      <div className="flex top-4 justify-center py-2 items-center gap-2 h-5">
        {slides.map((slide, index) => (
          <div key={index}>
            <CarouselIndicator
              onClick={() => setCurrentIndex(index)}
              activeIndex={currentIndex}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;

function CarouselIndicator({ activeIndex, index, onClick }) {
  let clsName =
    activeIndex === index
      ? "h-3 w-3 bg-cyan-300 cursor-pointer rounded-full"
      : "cursor-pointer h-2 w-2 rounded-full bg-gray-800/80";
  return (
    <div
      onClick={onClick}
      className={
        clsName + " -translate-x-3 translate-y-3 transition-all duration-300"
      }
    ></div>
  );
}
