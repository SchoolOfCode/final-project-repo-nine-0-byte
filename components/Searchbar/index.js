import React from "react";
import { useState } from "react";
import Style from "./style.module.css";
import { Input, Tooltip } from "antd";
// import { FilterTwoTone } from "@ant-design/icons";
import { FcFilledFilter, FcSearch } from "react-icons/fc";
import Filter from "../Filter";

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
