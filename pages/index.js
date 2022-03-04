import dynamic from "next/dynamic";
import useGeoLocation from "../utils/hooks/useGeoLocation";
import useGetPOI from "../utils/hooks/useGetPOI";
import useGetCoordsFromPostcode from "../utils/hooks/useGetCoordsFromPostcode";
import { useState, useEffect } from "react";
import Image from "next/image";
import Style from "../styles/Home.module.css";
import Filter from "../components/Filter";
import dummyData from "../utils/dummy-data";
import { markAssetError } from "next/dist/client/route-loader";

//import Map from "../components/Map";

export default function Home() {
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
  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  const [location, setLocation] = useGeoLocation(); // Location is either your current location or the default location of central london
  const [setPostcode] = useGetCoordsFromPostcode(setLocation);
  const [isLoading, setIsLoading] = useState(true);
  const [markersOn, setMarkersOn] = useState([]);
  const [pointsNearby] = useGetPOI(location, setIsLoading, setMarkersOn);
  const [filteredMarkers, setFilteredMarkers] = useState(connectorsFilter);
  const [price, setPrice] = useState(1);
  const [isAvailable, setIsAvailable] = useState(false);

  function handleFilter(connectorType) {
    if (filteredMarkers.includes(connectorType)) {
      let index = filteredMarkers.indexOf(connectorType);
      setFilteredMarkers([
        ...filteredMarkers.slice(0, index),
        ...filteredMarkers.slice(index + 1),
      ]);
      console.log([
        ...filteredMarkers.slice(0, index),
        ...filteredMarkers.slice(index + 1),
      ]);
    } else {
      setFilteredMarkers([...filteredMarkers, connectorType]);
      console.log([...filteredMarkers, connectorType]);
    }
  }

  // useEffect(() => {
  //   if (pointsNearby) {
  //     setMarkersOn(
  //       pointsNearby.filter((point) => {
  //         for (let i = 0; i < point.Connectors.length; i++) {
  //           if (filteredMarkers.includes(point.Connectors[i].ConnectorType)) {
  //             return true;
  //           }
  //         }
  //       })
  //     );
  //   }
  //   console.log(markersOn);
  //   return markersOn;
  // }, [filteredMarkers]);

  function handlePrice(newPrice) {
    setPrice(newPrice);
  }

  function handleAvail() {
    setIsAvailable(!isAvailable);
  }

  useEffect(() => {
    if (pointsNearby) {
      setMarkersOn(
        pointsNearby.filter((point) => {
          console.log("Price ", point.Price);
          const numPrice =
            point.Price === "Free"
              ? 0
              : +point.Price.replace(/(.)(.....)(....)/, "$2"); //£00.18/Kwh
          console.log(numPrice);

          for (let i = 0; i < point.Connectors.length; i++) {
            if (isAvailable) {
              if (
                filteredMarkers.includes(point.Connectors[i].ConnectorType) &&
                numPrice <= price &&
                point.Available === true
              ) {
                return true;
              }
            } else {
              if (
                filteredMarkers.includes(point.Connectors[i].ConnectorType) &&
                numPrice <= price
              ) {
                return true;
              }
            }
          }
        })
      );
    }
    console.log(markersOn);
    return markersOn;
  }, [filteredMarkers, price, isAvailable]);

  // handleFilter("Type 2 Mennekes (IEC62196)");
  // default that cotains all the connector arrays
  // when click on checkbox,
  // handleClick function that calls if box is checked
  //      - if in the array need to keep it, else remove it.
  //      - find the index and slice it (spread & slice & spread)

  return (
    <>
      {isLoading && (
        <div className={Style.robot}>
          <Image
            src="/shortcircuitrobot.gif"
            alt="loading-circle"
            width="315"
            height="180"
          ></Image>
          <h1>Loading...</h1>
        </div>
      )}
      {!isLoading && (
        <>
          <Filter
            handleFilter={handleFilter}
            handlePrice={handlePrice}
            handleAvail={handleAvail}
          />
          <Map
            location={location}
            setLocation={setLocation}
            setPostcode={setPostcode}
            pointsNearby={markersOn}
          />
        </>
      )}
    </>
  );
}

//Dev 7.0 !!
