import React, { useState } from "react";
import "./App.css";
import SearchLocationInput from "./components/GooglePlcasesApi";
import MapComponent from "./components/Map";

function App() {
  const [selectedLocation, setSelectedLocation] = useState({
    lat: -35,
    lng: -71,
  });
  
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <SearchLocationInput setSelectedLocation={setSelectedLocation} />
      <MapComponent selectedLocation={selectedLocation} />
    </div>
  );
}

export default App;
