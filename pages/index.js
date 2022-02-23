import Searchbar from "../components/Searchbar";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import useGeoLocation from "../utils/hooks/useGeoLocation";
import {API} from "../config.js"

//import Map from "../components/Map";

export default function Home() {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  const [location, setLocation] = useGeoLocation(); // Location is either your current location or the default location of central london

  //state and useEffect that is handling our fetching from API poctocdes.io
  const [postcode, setPostcode] = useState("WC2R 2PP");
  useEffect(() => {
    async function getApiLocation() {
      try {
        let request = await fetch(
          `https://api.postcodes.io/postcodes/${postcode}`
        );
        const data = await request.json();
        if (data.status !== 200) {
          throw "Post code not found";
        }
        setLocation([data.result.latitude, data.result.longitude]);
      } catch (err) {
        alert(err);
      }
    }
    getApiLocation();
  }, [postcode]);

  
  const [pointsNearby, setPointsNearby] = useState()
  useEffect(async ()=>{

    const call = async ()=> {
      const res = await fetch(`https://short-circut-api.herokuapp.com/chargingstation?lat=${location[0]}&long=${location[1]}`).then(res=>res.json())
      return await res
    }

    setPointsNearby( await call())
  },[location])

 

  function searchSubmit(lat, long) {
    setLocation([lat, long]);
    console.log("Submitted", lat, long);
  }

  return (
    <>
      <Searchbar
        setLocation={setLocation}
        searchSubmit={searchSubmit}
        setPostcode={setPostcode}
      />
      <Map 
      location={location} 
      pointsNearby={pointsNearby}
        />
    </>
  );
}

//Plugging in backend
