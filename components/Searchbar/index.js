import React from "react";
import { useState, useEffect } from "react";
import Style from "./style.module.css";

function Searchbar({ setPostcode }) {
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
      <input
        onChange={inputSearch}
        placeholder="Enter your postcode"
        autoFocus
        className={Style.searchInput}
      />
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
