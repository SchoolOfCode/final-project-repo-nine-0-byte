import React from "react";

function Searchbar() {
  let location = {
    lat: 52.475429,
    long: -1.884163,
    postcode: "B9 4AA",
  };
  return (
    <form>
      <input placeholder="Search Bar" />
      <button>Search</button>
    </form>
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
