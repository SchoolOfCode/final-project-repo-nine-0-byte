import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import Style from "./map.module.css";
import Searchbar from "../Searchbar/index.js";
import { useState } from "react";
import { DownOutlined, ThunderboltFilled } from "@ant-design/icons";
import { FullscreenControl } from "react-leaflet-fullscreen";
import "react-leaflet-fullscreen/dist/styles.css";
import { Typography, Rate, Tooltip } from "antd";

// const position = [51.505, -0.09];

const iconFast = L.icon({
  iconUrl: "../../Icons/BoltFast.svg",
  iconAnchor: [36, 30],
});
const iconSlow = L.icon({
  iconUrl: "../../Icons/BoltSlow.svg",
  iconAnchor: [36, 30],
});
const iconRapid = L.icon({
  iconUrl: "../../Icons/BoltRapid.svg",
  iconAnchor: [36, 30],
});

const iconEvcar = L.icon({
  iconUrl: "../../Icons/evcar.svg",
  iconAnchor: [37, 35],
});

const { Paragraph } = Typography;

export default function Map({
  location,
  pointsNearby,
  setLocation,
  filterMenu,
  handleFilterMenu,
  // searchSubmit,
  setPostcode,
}) {
  const [editableStr, setEditableStr] = useState(
    "Comment about this charge point"
  );

  console.log(pointsNearby);
  return (
    <>
      <div className={Style.searchOverlay}>
        <Searchbar
          setLocation={setLocation}
          // searchSubmit={searchSubmit}
          setPostcode={setPostcode}
          filterMenu={filterMenu}
          handleFilterMenu={handleFilterMenu}
        />
      </div>
      <div className={Style.mapContainer}>
        <MapContainer center={location} zoom={15} scrollWheelZoom={false}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibmluZS1vLWJ5dGUiLCJhIjoiY2wwNjIyMjJnMDJ5NTNib2MzZWY0ZW41eiJ9.usTwdk_9xWVtXNDBVk78dw`}
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <Tooltip title="Full-screen" placement="bottomRight">
            <FullscreenControl forceSeparateButton />
          </Tooltip>
          <Marker position={location} icon={iconEvcar} alt="user-position">
            <Popup editable>You are here.</Popup>
          </Marker>

          {pointsNearby &&
            pointsNearby.map((item, i) => (
              <Marker
                position={[item.lat, item.long]}
                icon={item.SLOW ? iconSlow : item.FAST ? iconFast : iconRapid}
                key={i}
                alt="charger-position"
              >
                <Popup>
                  <h4>{item.name}</h4>

                  <p>
                    <b>Availability:</b>{" "}
                    {item.Available ? `Available` : `In-Use`}
                  </p>
                  <p>
                    <b>Time Left:</b>{" "}
                    {item.ETA > 0 ? `${item.ETA} min` : `None`}
                  </p>
                  <p>
                    <b>Price:</b>
                    {item.Price ? ` ${item.Price}` : ` Check at chargepoint`}
                  </p>
                  <p>
                    <b>Subscriptions: </b>
                    {item.Subscriptions ? item.Subscriptions.Title : ""}
                  </p>

                  <div className={Style.dropdown}>
                    <button className={Style.dropbtn}>
                      Connectors [{item.Connectors.length}]<DownOutlined />
                    </button>
                    <div className={Style.dropContent} id="connectorDrop">
                      {item.Connectors.map((connector, i) => (
                        <p key={i}>{connector.ConnectorType}</p>
                      ))}
                    </div>
                  </div>
                  <div className={Style.commentRating}>
                    <p>
                      <b>Rate this point: </b>
                      <Rate
                        character={<ThunderboltFilled />}
                        defaultValue={3}
                      />
                    </p>
                    <Paragraph editable={{ onChange: setEditableStr }}>
                      {editableStr}
                    </Paragraph>
                  </div>
                  {/* </div> */}
                </Popup>
              </Marker>
            ))}
        </MapContainer>
      </div>
    </>
  );
}
