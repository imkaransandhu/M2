const ImageToUrlAPI = (
  fileName,
  handleCarFilterType,
  handleShowUrlImage,
  handleFileURL,
  CarTypeApi
) => {
  let requestOptions = {
    method: "POST",
    body: fileName,
    redirect: "follow",
  };

  fetch(
    "https://api.imgbb.com/1/upload?key=358a2c285b59f44dbf3b26394f15017c",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => {
      const res = JSON.parse(result);
      handleFileURL(res.data.image.url);
      CarTypeApi(res.data.image.url, handleCarFilterType, handleShowUrlImage);
    })
    .catch((error) => console.log("error"));
};

export default ImageToUrlAPI;
