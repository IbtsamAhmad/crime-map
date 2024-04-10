import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import MyLocation from "./Location";

const Map = () => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [policeStations, setPoliceStations] = useState([]);

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


  useEffect(() => {
    if (currentPosition) {
      // Construct Nearby Search URL
      const apiKey = "AIzaSyCTEWtP6KeqpC0-FWrdcfqd0r5_fY02oUY";
      const radius = 5000; // Search radius in meters
      const keyword = "police station";
      const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentPosition.lat},${currentPosition.lng}&radius=${radius}&keyword=${keyword}&key=${apiKey}`;

      // Fetch nearby police stations
      fetch(url)
        .then((response) => console.log(response))
        .then((data) => {
          if (data.status === "OK") {
            setPoliceStations(data.results.map((result) => result.geometry.location));
          } else {
            console.error("Error fetching nearby police stations:", data.status);
          }
        })
        .catch((error) => {
          console.error("Error fetching nearby police stations:", error);
        });
    }
  }, [currentPosition]);



  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const center = {
    lat: -34.397,
    lng: 150.644,
  };

  return (
    <div>
      <MyLocation />
      <LoadScript googleMapsApiKey="AIzaSyCTEWtP6KeqpC0-FWrdcfqd0r5_fY02oUY">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={currentPosition ? currentPosition : center}
          zoom={8}
        >
          {currentPosition && (
            <Marker
              position={currentPosition}
              icon={{
                url: "/user.png",
                // scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          )}

          {policeStations.map((station, index) => (
            <Marker
              key={index}
              position={{ lat: station.lat, lng: station.lng }}
              icon={{
                url: "/police.png",
                // scaledSize: new window.google.maps.Size(30, 30),
              }}
            />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default Map;
