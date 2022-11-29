import React from "react";

const UrlCarImage = ({ carSrc }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center ">
      <img
        className="laptop:w-1/3 tablet:w-2/5 w-3/4 h-auto"
        src={carSrc}
        alt="givens"
      />
      <p className="p-2 text-2xl font-bold uppercase bg-slate-2s00 laptop:w-1/3 tablet:w-2/5 w-3/4">
        Uploaded Car
      </p>
    </div>
  );
};

export default UrlCarImage;
