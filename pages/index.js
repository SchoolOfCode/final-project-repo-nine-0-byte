import Searchbar from "../components/Searchbar";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import useGeoLocation from "../utils/hooks/useGeoLocation";

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
      <Map location={location} />
    </>
  );
}

//DEV Branch 0.2
