import React from "react";
import { useState, useEffect } from "react";

function Searchbar({ setLocation, searchSubmit }) {
  const [postcode, setPostcode] = useState("");
  useEffect(() => {
    async function getApiLocation() {
      let request = await fetch(
        `https://api.postcodes.io/postcodes/${postcode}`
      );
      const data = await request.json();
      setLocation(data.result.latitude, data.result.longitude);
    }
    getApiLocation();
  }, [postcode]);
  function inputSearch(e) {
    setPostcode(e.target.value);
    console.log("setPostcode", e.target.value);
  }

  let location = {
    lat: 52.475429,
    long: -1.884163,
    postcode: "B9 4AA",
  };
  return (
    <div>
      <input placeholder="Search Bar" onChange={inputSearch} />
      <button onClick={() => searchSubmit(location.lat, location.long)}>
        Search
      </button>
    </div>
  );
}

export default Searchbar;

/*
create dummy data
input takes dummy data 
then converts it into lat&long
use dummy data to test states
switch dummy data with fetch command 
test that's working correctly 
*/
