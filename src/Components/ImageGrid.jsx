import React from "react";

const ImageGrid = ({ data }) => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-2 gap-4">
      {data.map((data, index) => (
        <div key={data.id}>
          <div className="h-[300px] bg-gray-800/80 border border-cyan-500 rounded-xl relative bg-opacity-50 backdrop-blur-sm">
            <img
              key={index}
              src={data.image}
              className="w-full h-full object-contain z-[1]"
            />
          </div>
          <h1 className="text-white text-center mt-2 text-lg font-semibold">
            {data.fullname}
          </h1>
          <h1 className="text-white text-center text-sm font-normal">
            {data.caption}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default ImageGrid;
