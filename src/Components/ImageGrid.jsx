import React from "react";

const ImageGrid = ({ images }) => {
  return (
    <div className="grid grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div className="h-[300px] bg-cyan-100 border border-cyan-500 rounded-xl relative bg-opacity-50 backdrop-blur-sm">
          <img
            key={index}
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-contain z-[1]"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
