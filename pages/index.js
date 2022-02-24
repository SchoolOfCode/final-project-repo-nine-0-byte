import dynamic from "next/dynamic";
import useGeoLocation from "../utils/hooks/useGeoLocation";
import useGetPOI from "../utils/hooks/useGetPOI";
import useGetCoordsFromPostcode from "../utils/hooks/useGetCoordsFromPostcode";

//import Map from "../components/Map";

export default function Home() {
  const Map = dynamic(() => import("../components/Map"), { ssr: false });
  const [location, setLocation] = useGeoLocation(); // Location is either your current location or the default location of central london
  const [setPostcode] = useGetCoordsFromPostcode(setLocation)
  const [pointsNearby] = useGetPOI(location);
  return (
    <>
      <Map
        location={location}
        setLocation={setLocation}
        setPostcode={setPostcode}
        pointsNearby={pointsNearby}
      />
    </>
  );
}

//Investgating render issues
