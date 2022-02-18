import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Searchbar from "../components/Searchbar";
import dynamic from "next/dynamic";
import useGeoLocation from "../utils/hooks/useGeoLocation";
//import Map from "../components/Map";
import { useState, useEffect } from "react";

export default function Home() {
    const {latitude, longitude, error} = useGeoLocation()
    

  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  return (
    <>

      <Searchbar />
      <Map position={[latitude, longitude ]} />
    </>
  );
}

//DEV Branch
