import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import dummyData from "../../utils/dummy-data/index.js";
import Style from "./map.module.css";
import Searchbar from "../Searchbar/index.js";

// const position = [51.505, -0.09];

export default function Map({ location, pointsNearby }) {
  return (
    <>
      <div className={Style.searchOverlay}>
        <Searchbar />
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




          {pointsNearby&&pointsNearby.map((item, i) => (
            <Marker position={[item.lat, item.long]} key={i}>
              <Popup>
               <p>{item.name}</p>
              </Popup>
            </Marker>
          ))}









        </MapContainer>
      </div>
    </>
  );
}
