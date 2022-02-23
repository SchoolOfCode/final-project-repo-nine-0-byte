import { useState, useEffect } from "react";

export default function useGetPOI(location) {
  const [pointsNearby, setPointsNearby] = useState();
  useEffect(() => {
    (async () => {
      const call = async () => {
        const res = await fetch(
          `https://short-circut-api.herokuapp.com/chargingstation?lat=${location[0]}&long=${location[1]}`
        ).then((res) => res.json());
        return await res;
      };

      setPointsNearby(await call());
    })();
  }, [location]);
  return [pointsNearby];
}
