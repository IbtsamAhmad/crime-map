import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Spin } from "antd";

const Place = ({clickedLatLng, setClickedLatLng}) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentPosition({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };


  const handleClick = (event) => {
    setClickedLatLng({
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    });
  };

  return (
    <div>
      <Spin spinning={loading}>
        <LoadScript googleMapsApiKey="AIzaSyCTEWtP6KeqpC0-FWrdcfqd0r5_fY02oUY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={currentPosition ? currentPosition : center}
            zoom={12}
            onClick={handleClick}
          >
           {clickedLatLng && <Marker position={clickedLatLng} />}
            {currentPosition && (
              <Marker
                position={currentPosition}
                icon={{
                  url: "/user.png",
                  // scaledSize: new window.google.maps.Size(30, 30),
                }}
              />
            )}
          </GoogleMap>
        </LoadScript>
      </Spin>
    </div>
  );
};

export default Place;
