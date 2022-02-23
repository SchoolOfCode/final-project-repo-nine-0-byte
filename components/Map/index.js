import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import dummyData from "../../utils/dummy-data/index.js";
import Style from "./map.module.css";
import Searchbar from "../Searchbar/index.js";

// const position = [51.505, -0.09];

export default function Map({
  location,
  setLocation,
  searchSubmit,
  setPostcode,
}) {
  return (
    <>
      <div className={Style.searchOverlay}>
        <Searchbar
          setLocation={setLocation}
          searchSubmit={searchSubmit}
          setPostcode={setPostcode}
        />
      </div>
      <div className={Style.mapContainer}>
        <MapContainer center={location} zoom={16} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={location}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily (ustomizable.
            </Popup>
          </Marker>
          {dummyData.map((item, i) => (
            <Marker position={[item.lat, item.long]} key={i}>
              <Popup>
                A pretty Callum popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </>
  );
}
