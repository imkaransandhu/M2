import React from "react";

const Car = ({ car }) => {
  return (
    <div className=" cursor-pointer">
      <img
        className="h-64 w-full"
        src={`./car/${car.type}/${car.srcUrl}`}
        alt="card"
      />
      <div className="px-6 py-6 bg-slate-800 text-white">
        <p className="mt-2 flex capitalize text-xl w-full">{car.name}</p>
        <p className="mt-2 flex text-xl w-full">
          BODY :{" "}
          <span className="text-right ml-auto capitalize font-bold">
            {car.type}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Car;
