import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import dummyData from "../../utils/dummy-data/index.js";
import Style from "./map.module.css";
import Searchbar from "../Searchbar/index.js";
import { useState } from "react";

// const position = [51.505, -0.09];

const icon = L.icon({ iconUrl: "../../Icons/Bolt.svg" });
const iconEvcar = L.icon({ iconUrl: "../../Icons/evcar.svg" });

// function GetIcon(_iconSize) {
//   return L.icon( options: {
//     iconUrl: require("../Static/Icons/Bolt.svg"),
//     iconSize: [_iconSize]
//   })
// }

export default function Map({
  location,
  pointsNearby,
  setLocation,
  // searchSubmit,
  setPostcode,
}) {
  return (
    <>
      <div className={Style.searchOverlay}>
        <Searchbar
          setLocation={setLocation}
          // searchSubmit={searchSubmit}
          setPostcode={setPostcode}
        />
      </div>
      <div className={Style.mapContainer}>
        <MapContainer center={location} zoom={16} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={location} icon={iconEvcar}>
            <Popup>You are here.</Popup>
          </Marker>

          {pointsNearby &&
            pointsNearby.map((item, i) => (
              <Marker position={[item.lat, item.long]} icon={icon} key={i}>
                <Popup>
                  <p>{item.name}</p>
                  <p>Availability:{item.Available ? "Available" : "In-Use"}</p>
                  <p>Price:{item.Price}</p>
                  <p>Time:{item.ETA}</p>
                  {/* <p>{item.Subscriptions.Title}</p> } */}
                  {/* {/* <p>connectors</p>
                  <p>{item.Connectors[0].ConnectorType}</p> */}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </>
  );
}
