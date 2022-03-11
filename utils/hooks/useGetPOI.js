import { useState, useEffect } from "react";

export default function useGetPOI(location, setIsLoading) {
  const [pointsNearby, setPointsNearby] = useState([]);
  useEffect(() => {
    (async () => {
      const call = async () => {
        setIsLoading(true);
        const res = undefined;

        try {
          const req = `${process.env.NEXT_PUBLIC_BACKEND_URL}chargingstation?lat=${location[0]}&long=${location[1]}`
          res = await fetch(
            req
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
      // setMarkersOn(await call());
    })();
  }, [location]);
  return [pointsNearby];
}
