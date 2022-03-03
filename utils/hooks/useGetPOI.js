import { useState, useEffect } from "react";

export default function useGetPOI(location, setIsLoading, distance) {
  distance = distance ?? 10
  const [pointsNearby, setPointsNearby] = useState();
  useEffect(() => {
    (async () => {
      const call = async () => {
        setIsLoading(true);
        const res = undefined;

        try {
          console.log(`https://short-circut-api.herokuapp.com/chargingstation?lat=${location[0]}&long=${location[1]}&dist=${distance}`)
          res = await fetch(
            `https://short-circut-api.herokuapp.com/chargingstation?lat=${location[0]}&long=${location[1]}&dist=${distance}`
          ).then((res) => res.json());

          // if (typeof await res !== Array) { throw "Incorrect type back from API" }
        } catch (err) {
          console.error(err + " Check that Heroku has not crashed pls :D");
          res = undefined;
        }
        setIsLoading(false);
        return await res;
      };
      console.log(location);
      setPointsNearby(await call());
    })();
  }, [location]);
  return [pointsNearby];
}
