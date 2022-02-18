import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Searchbar from "../components/Searchbar";
import dynamic from "next/dynamic";
//import Map from "../components/Map";
import { useState, useEffect } from "react";

export default function Home() {
  const [position, setPosition] = useState([]);
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [status, setStatus] = useState("");

  const getLocation = () => {
    if (!navigator.geolocation) {
      setStatus("Geolocation is not supported by your browser");
    } else {
      setStatus("Locating...");
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setStatus(null);
          setLat(position.coords.latitude);
          setLng(position.coords.longitude);
        },
        () => {
          setStatus("Unable to retrieve your location");
        }
      );
    }
  };

  useEffect(() => {
    getLocation();
    setPosition([Number(lat), Number(lng)]);
  }, []);

  

  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  return (
    <>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
        integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
        crossOrigin=""
      />
      <Searchbar />
      <Map position={[lat, lng]} />
    </>
  );
}

//DEV Branch
