import { Tooltip, Slider, Dropdown, Menu, Button, message } from "antd";
import {
  DownOutlined,
  MenuOutlined,
  CloseSquareTwoTone,
} from "@ant-design/icons";

import {ConnectionTypesMenu, listOfConnectors} from "./connectionTypesMenu";

import Style from "./Filter.module.css";
import { useState, useReducer } from "react";
import Link from "next/link";
import useBackend from "../../utils/hooks/useBackend";

export default function Filter({
  addUser,
  user,
  methods,

}) {

  const [filteredMarkers, setFilteredMarkers] = useState(connectorsFilter);
 

  const [filterMenu, setFilterMenu] = useState(false);
  
  const [filter, dispatchFilter] = useReducer(reduceFilter, {price:0040, connector_types: listOfConnectors, isAvailable:false})



//Return list of filtered pins when filter passed in
  const markersOn = pointsNearby.filter((point) => {
    const numPrice =
      point.Price === "Free"
        ? 0
        : +point.Price.replace(/(.)(.....)(....)/, "$2"); 

    for (let i = 0; i < point.Connectors.length; i++) {
      if (isAvailable) {
        if (
          filteredMarkers.includes(point.Connectors[i].ConnectorType) &&
          numPrice <= price &&
          point.Available === true
        ) {
          return true;
        }
      } else {
        if (
          filteredMarkers.includes(point.Connectors[i].ConnectorType) &&
          numPrice <= price
        ) {
          return true;
        }
      }
    }
  });


  useEffect(() => {
    console.log("User is ", user);
    if (!user) {
      return;
    } else {
      (async () => {
        const listOfFilters = await getUser(methods.FILTER);
        if (listOfFilters.length === 0) {
          return;
        }
        const latestFilter = listOfFilters[listOfFilters.length - 1];
        console.log("All filters :", listOfFilters);
        console.log("Latest filter is:", latestFilter);
        setFilteredMarkers(() => latestFilter.connector_type);
        console.log("connector type ", latestFilter.connector_type);
        console.log("Filteredmarkers ", filteredMarkers);
        setPrice(() => latestFilter.price);
        console.log("Price state ", price);
        setIsAvailable(() => latestFilter.availability);
        console.log("isAvailable  ", isAvailable);
      })();
    }
  }, [user]);




  function handleFilter(connectorType) {
    if (filteredMarkers.includes(connectorType)) {
      let index = filteredMarkers.indexOf(connectorType);
      setFilteredMarkers([
        ...filteredMarkers.slice(0, index),
        ...filteredMarkers.slice(index + 1),
      ]);
      console.log([
        ...filteredMarkers.slice(0, index),
        ...filteredMarkers.slice(index + 1),
      ]);
    } else {
      setFilteredMarkers([...filteredMarkers, connectorType]);
      console.log([...filteredMarkers, connectorType]);
    }
  }

  function handlePrice(newPrice) {
    setPrice(newPrice);
  }

  function handleAvail() {
    setIsAvailable(!isAvailable);
  }

  function handleSaveFilters() {
    const savedFilters = {};
    savedFilters.price = price;
    savedFilters.connector_type = [...filteredMarkers];
    console.log("savedconnectors", savedFilters.connector_type);
    savedFilters.availability = isAvailable;

    return savedFilters;
  }



  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  

  const marks = {
    0: "Free",
    0.25: "",
    0.5: "£0.50",
  };

  const filtersSuccess = () => {
    message.success("Your filters have been saved.", 2.2);
  };

  const connectionDropMenu=(
  <Map>
  {ConnectionTypesMenu.map((v)=>{
    return(
      <>
            <label className={Style.checkItem}>
        {v.name}
        <input
        type="checkbox"
        defaultChecked="true"
        onClick={()=> handleFilter(v.name)}
        />
      </label>
      <br/>
      </>
    )
  })}
  </Map>
  )

  return (
    <>
      {/* {hamburger && (
        <Tooltip title="Filters">
          <button className={Style.burgerMenu} onClick={handleHamburger}>
            <MenuOutlined />
          </button>
        </Tooltip>
      )} */}

      {filterMenu && (
        <form className={Style.filterContainer}>
          <div className={Style.closeBtn}>
            <h3 className={Style.filterHeader}>Filter:</h3>
            <CloseSquareTwoTone
              style={{ marginTop: "-1rem" }}
              onClick={() => {
                setFilterMenu(!filterMenu)
              }}
              aria-label="close-filter-button"
            />
          </div>

          <h4>Price/kwH</h4>
          <Slider
            marks={marks}
            className={Style.slider}
            min={0}
            max={0.5}
            defaultValue={price}
            step={0.05}
            onAfterChange={handlePrice}
          />

          <Dropdown overlay={connectionDropMenu}>
            <Button>
              Connection Types <DownOutlined />
            </Button>
          </Dropdown>

          <div>
            <label>
              Currently Available{" "}
              {isAvailable ? (
                <input type="checkbox" onClick={handleAvail} checked />
              ) : (
                <input type="checkbox" onClick={handleAvail} />
              )}
            </label>
          </div>

          {user ? (
            <button
              onClick={async (e) => {
                e.preventDefault();
                addUser(methods.FILTER, handleSaveFilters());
                filtersSuccess();
              }}
            >
              Save Filters
            </button>
          ) : (
            <button>
              <Link href="/api/auth/login">Login to save your filters</Link>
            </button>
          )}
        </form>
      )}
    </>
  );
}
