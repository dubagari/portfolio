import React from "react";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import Feature from "./components/Featuresectio";

const App = () => {
  return (
    <>
      <Header />
      <div className=" max-w-7xl mx-auto pt-10 lg:px-30 px-6">
        <Herosection />
        <Feature />
      </div>
    </>
  );
};

export default App;
