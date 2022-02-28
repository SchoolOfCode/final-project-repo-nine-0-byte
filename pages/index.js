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

  const newArray = pointsNearby.filter((point) => {
    console.log(
      point.Connectors.map((connector) => {
        return connector.ConnectorType === "3-pin Type G (BS1363)";
      })
    );
    return point.Connectors.map(
      (connector) => connector.ConnectorType === "3-pin Type G (BS1363)"
    );
  });
  console.log("Our array:", newArray);

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
