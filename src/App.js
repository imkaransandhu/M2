import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";

import CarTypeApi from "./API/CarTypeApi";
import CarGroup from "./Components/CarGroup/CarGroup";
import UrlCarImage from "./Components/UrlCarImage";
import FormGroup from "./Components/Forms/FormGroup";

function App() {
  const [carFilterType, setCarFilterType] = useState("");
  const [showUrlImage, setShowUrlImage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [URL, setURL] = useState("");

  function handleURL(e) {
    setShowUrlImage(false);
    setURL(e.target.value);
  }

  function handleFileURL(fileUrl) {
    setURL(fileUrl);
  }

  function handleShowUrlImage() {
    setShowUrlImage(true);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLoader();
    setShowUrlImage(false);

    CarTypeApi(URL, handleCarFilterType, handleShowUrlImage);
  }

  function handleCarFilterType(carType) {
    setCarFilterType(carType);
    setLoader(false);
  }

  function handleLoader() {
    setLoader(!loader);
  }

  return (
    <div className="App">
      <Header />
      <FormGroup
        handleLoader={handleLoader}
        handleCarFilterType={handleCarFilterType}
        handleURL={handleURL}
        handleSubmit={handleSubmit}
        handleShowUrlImage={handleShowUrlImage}
        handleFileURL={handleFileURL}
      />

      {showUrlImage && <UrlCarImage carSrc={URL} />}
      <CarGroup loader={loader} carFilterType={carFilterType} />
    </div>
  );
}

export default App;
