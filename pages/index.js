import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Searchbar from "../components/Searchbar";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
//import Map from "../components/Map";

export default function Home() {
  //state and useEffect that is handling our fetching from API poctocdes.io
  const [postcode, setPostcode] = useState("WC2R 2PP");
  useEffect(() => {
    async function getApiLocation() {
      let request = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`
      );
      const data = await request.json();
      console.log(data.result);
      setLocation([data.result.latitude, data.result.longitude]);
    }
    getApiLocation();
  }, [postcode]);

  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  const [location, setLocation] = useState([51.505, -0.09]);
  function searchSubmit(lat, long) {
    setLocation([lat, long]);
    console.log("Submitted", lat, long);
  }
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      <Searchbar
        setLocation={setLocation}
        searchSubmit={searchSubmit}
        setPostcode={setPostcode}
      />
      <Map location={location} />
    </>
  );
}

//DEV Branch
