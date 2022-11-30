import axios from "axios";

const TurnerApi = (carType) => {
  let config = {
    method: "get",
    url: `https://api.bing.microsoft.com/v7.0/custom/images/search?q=${carType}&customconfig=e83a001d-b59b-40d2-9efc-d068c5aa8367&mkt=en-US`,
    headers: {
      "Ocp-Apim-Subscription-Key": "491aad535e234d61ac2c65bb02d41590",
    },
  };

  axios(config)
    .then((response) => {
      console.log(JSON.parse(JSON.stringify(response.data)));
    })
    .catch((error) => {
      console.log(error);
    });
};

export default TurnerApi;
