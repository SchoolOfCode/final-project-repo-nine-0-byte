import dynamic from "next/dynamic";
import useGeoLocation from "../utils/hooks/useGeoLocation";
import useGetPOI from "../utils/hooks/useGetPOI";
import useGetCoordsFromPostcode from "../utils/hooks/useGetCoordsFromPostcode";
import { useState, useEffect } from "react";
import Style from "../styles/Home.module.css";
import Filter from "../components/Filter";
import dummyData from "../utils/dummy-data";
import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

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
  // const [markersOn, setMarkersOn] = useState([]);
  const [pointsNearby] = useGetPOI(location, setIsLoading);
  const [filteredMarkers, setFilteredMarkers] = useState(connectorsFilter);
  const [price, setPrice] = useState(0.45);
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

  function handlePrice(newPrice) {
    setPrice(newPrice);
  }

  function handleAvail() {
    setIsAvailable(!isAvailable);
  }

  function handleSaveFilters() {
    const savedFilters = {};
    // savedFilters.userId = "";
    savedFilters.price = price;
    savedFilters.connectorType = [...filteredMarkers];
    savedFilters.availability = isAvailable;

    return savedFilters;
  }

  // useEffect(() => {
  //   if (pointsNearby) {
  //     setMarkersOn(
  const markersOn = pointsNearby.filter((point) => {
    const numPrice =
      point.Price === "Free"
        ? 0
        : +point.Price.replace(/(.)(.....)(....)/, "$2"); //£00.18/Kwh
    // console.log(numPrice);

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
  });
  // );
  // }
  // console.log(markersOn);
  //   return markersOn;
  // }, [filteredMarkers, price, isAvailable]);

  const antIcon = <LoadingOutlined style={{ fontSize: 56 }} spin />;

  return (
    <>
      {isLoading && (
        <div className={Style.robot}>
          <Spin alt="loading-circle" indicator={antIcon} className={Style.loader} />
          <h1>Loading...</h1>
        </div>
      )}
      {!isLoading && (
        <>
          <Filter
            handleFilter={handleFilter}
            handlePrice={handlePrice}
            handleAvail={handleAvail}
            isAvailable={isAvailable}
            handleSaveFilters={handleSaveFilters}
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
