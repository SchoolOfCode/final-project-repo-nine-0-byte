import dynamic from "next/dynamic";
import useGeoLocation from "../utils/hooks/useGeoLocation";
import useGetPOI from "../utils/hooks/useGetPOI";
import useGetCoordsFromPostcode from "../utils/hooks/useGetCoordsFromPostcode";
import { useState } from "react";
import Image from "next/image";
import Style from "../styles/Home.module.css"
import Filter from "../components/Filter/Filter";

//import Map from "../components/Map";

export default function Home() {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  const [location, setLocation] = useGeoLocation(); // Location is either your current location or the default location of central london
  const [setPostcode] = useGetCoordsFromPostcode(setLocation);
  const [isLoading, setIsLoading] = useState(true);
  const [pointsNearby] = useGetPOI(location, setIsLoading);

  return (
    <>

    {null&&(<Filter />)}
    
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

//Dev6.0 !!
