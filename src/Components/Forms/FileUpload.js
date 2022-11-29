import { useState } from "react";
import CarTypeApi from "../../API/CarTypeApi";
import ImageToUrlAPI from "../../API/ImageToUrlAPI";

const FileUpload = ({
  handleCarFilterType,
  handleShowUrlImage,
  handleFileURL,
  handleLoader,
}) => {
  const [fileName, setFileName] = useState();

  function handleFileSubmit(e) {
    e.preventDefault();
    handleLoader();
    ImageToUrlAPI(
      fileName,
      handleCarFilterType,
      handleShowUrlImage,
      handleFileURL,
      CarTypeApi
    );
  }

  function handleFileChange(e) {
    let formData = new FormData();
    formData.append("image", e.target.files[0]);
    setFileName(formData);
  }

  return (
    <form
      onSubmit={handleFileSubmit}
      className="flex laptop:w-1/2 w-full px-10 py-4 justify-center h-20"
    >
      <input
        onChange={handleFileChange}
        required="required"
        type="file"
        placeholder="URL of image"
        className="w-full border-2  border-black rounded-none border-r-0 h-full flex py-2"
      />
      <button
        className="border-2 font-bold px-4 py-2 border-black border-l-0"
        type="submit"
      >
        Upload
      </button>
    </form>
  );
};

export default FileUpload;
