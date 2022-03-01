import dynamic from "next/dynamic";
import useGeoLocation from "../utils/hooks/useGeoLocation";
import useGetPOI from "../utils/hooks/useGetPOI";
import useGetCoordsFromPostcode from "../utils/hooks/useGetCoordsFromPostcode";
import { useState } from "react";
import Image from "next/image";
import Style from "../styles/Home.module.css";
import Filter from "../components/Filter";
import dummyData from "../utils/dummy-data";

//import Map from "../components/Map";

export default function Home() {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  const [location, setLocation] = useGeoLocation(); // Location is either your current location or the default location of central london
  const [setPostcode] = useGetCoordsFromPostcode(setLocation);
  const [isLoading, setIsLoading] = useState(true);
  const [pointsNearby] = useGetPOI(location, setIsLoading);
  let connectorsFilter = [
    "3-pin Type G (BS1363)",
    "JEVS G105 (CHAdeMO) DC",
    "Type 1 SAEJ1772 (IEC 62196)",
    "Type 2 Mennekes (IEC62196)",
    "Type 3 Scame (IEC62196)",
    "CCS Type 2 Combo (IEC62196)",
    "Type 2 Tesla (IEC62196) DC",
    "Commando 2P+E (IEC60309)",
    "Commando 3P+N+E (IEC60309)",
  ];
  const [markersOn, setMarkersOn] = useState(connectorsFilter);

  function handleFilter(connectorType) {
    let index = connectorsFilter.indexOf(connectorType);
    setMarkersOn([
      ...connectorsFilter.slice(0, index),
      ...connectorsFilter.slice(index + 1),
    ]);
    console.log([
      ...connectorsFilter.slice(0, index),
      ...connectorsFilter.slice(index + 1),
    ]);
  }
  // handleFilter("Type 2 Mennekes (IEC62196)");
  // default that cotains all the connector arrays
  // when click on checkbox,
  // handleClick function that calls if box is checked
  //      - if in the array need to keep it, else remove it.
  //      - find the index and slice it (spread & slice & spread)

  const newArray = dummyData.filter((point) => {
    for (let i = 0; i < point.Connectors.length; i++) {
      if (connectorsFilter.includes(point.Connectors[i].ConnectorType)) {
        return true;
      }
    }
  });
  console.log("newArray", newArray);

  return (
    <>
      <Filter />
      <button onClick={() => handleFilter("Type 2 Mennekes (IEC62196)")}>
        Filter
      </button>

      {isLoading && (
        <div className={Style.robot}>
          <Image
            src="/shortcircuitrobot.gif"
            alt="loading robot"
            width="315"
            height="180"
          ></Image>
          <h1>Loading...</h1>
        </div>
      )}
      {!isLoading && (
        <Map
          location={location}
          setLocation={setLocation}
          setPostcode={setPostcode}
          pointsNearby={pointsNearby}
        />
      )}
    </>
  );
}

//Dev 7.0 !!
