import axios from "axios";

const CarTypeApi = (URL, handleCarFilterType, handleShowUrlImage) => {
  const data = JSON.stringify({
    Url: URL,
  });

  const config = {
    method: "post",
    url: "https://m2-training.cognitiveservices.azure.com/customvision/v3.0/Prediction/7a16515b-4190-43c1-9875-8a3f4b899a7b/classify/iterations/Iteration5/url",
    headers: {
      "Prediction-Key": "355f450cec734bb8a04e768406c6d8c1",
      "Content-Type": "application/json",
    },
    data: data,
  };

  axios(config)
    .then((response) => {
      const result = JSON.parse(JSON.stringify(response.data));
      //TurnerApi(result.predictions[0].tagName);
      handleCarFilterType(result.predictions[0].tagName);
      handleShowUrlImage();
    })
    .catch((error) => {
      console.log("error1");
      //handleApiError(error);
    });
};
export default CarTypeApi;
