import React from "react";
import FileUpload from "./FileUpload";
import InputForm from "./InputForm";

const FormGroup = ({
  handleCarFilterType,
  handleLoader,
  handleSubmit,
  handleURL,
  handleShowUrlImage,
  handleFileURL,
}) => {
  return (
    <div className="flex laptop:flex-row flex-col  w-full">
      <InputForm handleURL={handleURL} handleSubmit={handleSubmit} />
      <FileUpload
        handleLoader={handleLoader}
        handleCarFilterType={handleCarFilterType}
        handleShowUrlImage={handleShowUrlImage}
        handleFileURL={handleFileURL}
      />
    </div>
  );
};

export default FormGroup;
