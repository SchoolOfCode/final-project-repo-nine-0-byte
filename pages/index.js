import dynamic from "next/dynamic";
import useGeoLocation from "../utils/hooks/useGeoLocation";
import useGetPOI from "../utils/hooks/useGetPOI";
import useGetCoordsFromPostcode from "../utils/hooks/useGetCoordsFromPostcode";
import { useState } from "react";
import Image from "next/image";
import Style from "../styles/Home.module.css";
import Filter from "../components/Filter/Filter";

//import Map from "../components/Map";

export default function Home() {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  const [location, setLocation] = useGeoLocation(); // Location is either your current location or the default location of central london
  const [setPostcode] = useGetCoordsFromPostcode(setLocation);
  const [isLoading, setIsLoading] = useState(true);
  const [pointsNearby] = useGetPOI(location, setIsLoading);
  const [markersOn, setMarkersOn] = useState();
  //Search pointsnearby, find all points with 3-pin
  //look at all indexes in pointsNearby
  //in each index, check connectors array
  // in each connector index, check ConnectorType
  //IF it's our 3-pin, filter it
  //Connectors.includes()

  let connectorsFilter = ["Type 2 Mennekes (IEC62196)"];
  const newArray = pointsNearby.filter((point) => {
    for (let i = 0; i < point.Connectors.length; i++) {
      if (connectorsFilter.includes(point.Connectors[i].ConnectorType)) {
        return true;
      }
    }
  });
  console.log("newArray", newArray);
  console.log("poinstsNearby", pointsNearby);

  return (
    <>
      <Filter />

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
