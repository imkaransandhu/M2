import React from "react";

const ApiError = ({ apiError }) => {
  console.log(apiError.length);
  return (
    apiError.length !== 0 && (
      <div className="flex flex-col text-red-500 font-bold">
        <h1>🔥{apiError.response.data.message}🔥</h1>
        <h1>Please try again</h1>
      </div>
    )
  );
};

export default ApiError;
