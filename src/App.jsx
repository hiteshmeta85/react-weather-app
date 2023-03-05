import WeatherSection from "./components/WeatherSection/WeatherSection.jsx";
import React from "react";
import TopCitiesSection from "./components/TopCitiesSection/TopCitiesSection.jsx";

function App() {

  return (
    <div className='container'>
      <WeatherSection/>
      <TopCitiesSection/>
    </div>
  )
}

export default App
