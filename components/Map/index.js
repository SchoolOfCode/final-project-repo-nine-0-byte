import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import css from "./map.module.css";

const position = [51.505, -0.09];

export default function Map() {
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      className={css.map}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
