import { useState, useEffect } from "react";

export default function useGetPOI(location) {
  const [pointsNearby, setPointsNearby] = useState();
  useEffect(() => {
    (async () => {
      const call = async () => {
        const res = undefined

        try {
          res = await fetch(
            `https://short-circut-api.herokuapp.com/chargingstation?lat=${location[0]}&long=${location[1]}`
          ).then((res) => res.json());

          if (typeof await res !== Array) { throw "Incorrect type back from API" }
        } catch (err) {
          console.error(err + " Check that Heroku has not crashed pls :D")
          res = undefined
        }

        return await res;
      };

      setPointsNearby(await call());
    })();
  }, [location]);
  return [pointsNearby];
}
