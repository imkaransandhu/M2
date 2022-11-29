import React from "react";
import CarArray from "./../../Cars/CarArray";
import Car from "./Car";

const CarGroup = ({ loader, carFilterType }) => {
  return (
    <div className="grid desktop:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1  gap-4 px-10 py-4">
      {!loader ? (
        !carFilterType ? (
          CarArray.map((car, index) => {
            return <Car key={index} car={car} />;
          })
        ) : (
          CarArray.map((car, index) => {
            if (car.type === carFilterType) {
              return <Car key={index} car={car} />;
            } else {
              return "";
            }
          })
        )
      ) : (
        <p>We are doing clever things please wait.</p>
      )}
    </div>
  );
};

export default CarGroup;
