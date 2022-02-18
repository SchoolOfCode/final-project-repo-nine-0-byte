import React from "react";
import { useState, useEffect } from "react";

function Searchbar({ setPostcode, searchSubmit }) {
  const [input, setInput] = useState("");
  function inputSearch(e) {
    setInput(e.target.value);
    console.log("setPostcode", e.target.value);
  }
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <input onChange={inputSearch} placeholder="Search Bar" />
      <button onClick={() => setPostcode(input)}>Search</button>
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
