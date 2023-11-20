import React, { useState, useEffect, useRef } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../constants/constants";


const MapComponent = ({ selectedLocation }) => {
  
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
  });

  

  const mapRef = useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
    console.log(mapRef)
  }, []);
  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  


  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    setZoom(15); // Cambia el zoom a 15 (o el valor que desees)
  }



  return (
    
    <div style={{ marginTop: "50px" }}>
      <GoogleMap
        mapContainerStyle={{
          height: "400px",
          width: "400px"
          
        }}
        center={selectedLocation}
        zoom={15}
        onLoad={onMapLoad}
        onClick={mapRef}
        disableDefaultUI=  {true}// Deshabilitar la interfaz de usuario predeterminada
        
      >
        
        <MarkerF
          position={selectedLocation}
          icon={"http://maps.google.com/mapfiles/ms/icons/blue-dot.png"}
        />
      </GoogleMap>
    </div>
  );
};

export default MapComponent;
