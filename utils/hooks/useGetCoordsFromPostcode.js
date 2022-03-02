import React,{useState, useEffect} from "react";



export default function useGetCoordsFromPostcode(setLocation){

  //state and useEffect that is handling our fetching from API poctocdes.io
  const [postcode, setPostcode] = useState("WC2R 2PP");
  useEffect(() => {
      
      if(postcode === "WC2R 2PP"){return} // Need another way to detect if this is the first post 

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


  return [postcode, setPostcode]
  
}