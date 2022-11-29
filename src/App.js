import { useState } from "react";
import "./App.css";
import Header from "./Components/Header";
import InputForm from "./Components/InputForm";

import CarTypeApi from "./API/CarTypeApi";
import CarGroup from "./Components/CarGroup/CarGroup";
import UrlCarImage from "./Components/UrlCarImage";

function App() {
  const [carFilterType, setCarFilterType] = useState("");
  const [showUrlImage, setShowUrlImage] = useState(false);
  const [loader, setLoader] = useState(false);
  const [URL, setURL] = useState("");

  function handleURL(e) {
    setShowUrlImage(false);
    setURL(e.target.value);
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
      <InputForm
        handleLoader={handleLoader}
        handleCarFilterType={handleCarFilterType}
        handleURL={handleURL}
        handleSubmit={handleSubmit}
      />
      {showUrlImage && <UrlCarImage carSrc={URL} />}
      <CarGroup loader={loader} carFilterType={carFilterType} />
    </div>
  );
}

export default App;
