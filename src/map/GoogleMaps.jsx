
import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const GoogleMaps = ({ selectedLocation }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_KEY
  });

  const mapRef = React.useRef();
  const onMapLoad = React.useCallback((map) => {
    mapRef.current = map;
  }, []);

  if (loadError) return "Error";
  if (!isLoaded) return "Maps";

  return (
    <>
      <div style={{ marginTop: "50px", paddingBottom: "1rem" }}>
        <GoogleMap
          mapContainerStyle={{
            height: "400px"
          }}
          center={selectedLocation}
          zoom={13}
          onLoad={onMapLoad}
        >
          <Marker position={selectedLocation} />
        </GoogleMap>
      </div>
      
    </>
  );
};

export default GoogleMaps;
