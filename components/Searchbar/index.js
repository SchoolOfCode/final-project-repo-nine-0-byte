import React from "react";
import { useState } from "react";
import Style from "./style.module.css";
import { Input, Tooltip } from "antd";
// import { FilterTwoTone } from "@ant-design/icons";
import { FcFilledFilter, FcSearch } from "react-icons/fc";
import Filter from "../Filter";
import cities from "../../utils/dummy-data/cities";

//Check if the input includes number
//if yes carry on with the existing logic
//else we have to map through cities array and find the matching cities
//return the postcode
//use setInput with the returned postcode

//function hasNumber(myString) {
//   return /\d/.test(myString);
// }

function Searchbar({ setPostcode }) {
  const [input, setInput] = useState("");
  function inputSearch(e) {
    if (/\d/.test(e.target.value)) {
      setInput(e.target.value);
    } else {
      setInput("L1 8JQ");
      // for (let i = 0; i < cities.length; i++)
      // {
      //   if (e.target.value === cities[i].Postcode) {
      //     return setInput(cities[i].Postcode);
      //   }
      // }
    }
    console.log("setPostcode", e.target.value);
  }
  console.log("London Flag", input);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setPostcode(input);
      }}
    >
      <Input
        onChange={inputSearch}
        placeholder="Search a new location"
        autoFocus
        className={Style.searchInput}
        prefix={
          <Tooltip title={"Click to open filters"}>
            <FcFilledFilter
              size="1.5rem"
              style={{ color: "green" }}
              onClick={() => console.log("click the Tooltip")}
            />
          </Tooltip>
        }
        suffix={
          <Tooltip title="Search" placement="bottom">
            <FcSearch size="1.5rem" onClick={() => setPostcode(input)} />
          </Tooltip>
        }
      />
      {/* <button onClick={() => setPostcode(input)}>Search</button> */}
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
