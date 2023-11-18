import React from "react";

const ImageGrid = ({ images, label, subLabel }) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
      {images.map((image, index) => (
        <div>
          <div className="h-[300px] bg-gray-800/80 border border-cyan-500 rounded-xl relative bg-opacity-50 backdrop-blur-sm">
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-contain z-[1]"
            />
          </div>
          <h1 className="text-white text-center mt-2 text-lg font-semibold">
            {label}
          </h1>
          <h1 className="text-white text-center text-sm font-normal">
            {subLabel}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
