import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import MyLocation from "./MyLocation";
import { Spin } from "antd";
import axios from "axios";


const Map = ({ filteredCrimes, selectedCrime, handleCrimeClick, setSelectedCrime }) => {
  const [currentPosition, setCurrentPosition] = useState(null);
  const [policeStations, setPoliceStations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [clickedLatLng, setClickedLatLng] = useState(null);
  const [selectedStation, setSelectedStation] = useState(null);

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
      (async () => {
        try {
          setLoading(true);
          const apiKey = "AIzaSyCTEWtP6KeqpC0-FWrdcfqd0r5_fY02oUY";
          const radius = 3000;
          const keyword = "police station";
          const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${currentPosition.lat},${currentPosition.lng}&radius=${radius}&keyword=${keyword}&key=${apiKey}`;
          const { data } = await axios.get(url);
          if (data) {
            console.log("data", data);
            setPoliceStations(data?.results);
          }
        } catch (error) {
          console.log("error", error);
        } finally {
          setLoading(false);
        }
      })();
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

  const handleClick = (event) => {
    console.log("event.latLng.lat()", event.latLng.lat());
    setClickedLatLng({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  };

  const handleStationClick = (station) => {
    setSelectedStation(station);
  };

  return (
    <div>
      <Spin spinning={loading}>
        <MyLocation />
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

            {policeStations?.map((station, index) => (
              <Marker
                key={index}
                position={{
                  lat: station?.geometry?.location.lat,
                  lng: station?.geometry?.location.lng,
                }}
                icon={{
                  url: "/police.png",
                  // scaledSize: new window.google.maps.Size(30, 30),
                }}
                onClick={() => handleStationClick(station)}
              />
            ))}

            {filteredCrimes.length &&
              filteredCrimes?.map((crime, index) => {
                return (
                  <Marker
                    key={index}
                    position={{
                      lat: crime.lat,
                      lng: crime.lng,
                    }}
                    icon={{
                      url: "/crime2.png",
                      // scaledSize: new window.google.maps.Size(30, 30),
                    }}
                    onClick={() => handleCrimeClick(crime)}
                  />
                );
              })}

            {selectedStation && (
              <InfoWindow
                position={{
                  lat: selectedStation?.geometry?.location.lat,
                  lng: selectedStation?.geometry?.location.lng,
                }}
                onCloseClick={() => setSelectedStation(null)}
              >
                <div>
                  <h2 className="station-info">{selectedStation.name}</h2>
                  <p className="station-info">{selectedStation.vicinity}</p>
                </div>
              </InfoWindow>
            )}

            {selectedCrime && (
              <InfoWindow
                position={{
                  lat: selectedCrime?.lat,
                  lng: selectedCrime?.lng,
                }}
                onCloseClick={() => setSelectedCrime(null)}
              >
                <div>
                  <h2 className="station-info">{selectedCrime.type}</h2>
                  <p className="station-info">{selectedCrime.description}</p>
                  <p className="station-info">{selectedCrime.date.split('T')[0]}</p>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      </Spin>
    </div>
  );
};

export default Map;
