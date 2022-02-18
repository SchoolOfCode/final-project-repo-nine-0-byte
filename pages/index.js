import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Searchbar from "../components/Searchbar";
import dynamic from "next/dynamic";
//import Map from "../components/Map";

export default function Home() {
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
      <Map />
    </>
  );
}

//DEV Branch
