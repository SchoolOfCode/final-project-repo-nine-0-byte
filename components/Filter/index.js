import { Tooltip, Slider, Dropdown, Menu, Button, message } from "antd";
import {
  DownOutlined,
  MenuOutlined,
  CloseSquareTwoTone,
} from "@ant-design/icons";

import Style from "./Filter.module.css";
import { useState } from "react";
import Link from "next/link";
import useBackend from "../../utils/hooks/useBackend";

export default function Filter({
  updateUser,
  handleFilter,
  handlePrice,
  handleAvail,
  isAvailable,
  handleSaveFilters,
  price,
  addUser,
  user,
  methods,
  filterMenu,
  handleFilterMenu,
  filteredMarkers,
  connectorsFilter,
}) {
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  {
    isAvailable ? (
      <input type="checkbox" onClick={handleAvail} checked />
    ) : (
      <input type="checkbox" onClick={handleAvail} />
    );
  }
  const connectiontypesMenu = ( //Menu Drop down
    <Menu className={Style.connectorMenu} onClick={handleMenuClick}>
      {connectorsFilter.map((connector) => {
        return (
          <>
            <br />
            <label className={Style.checkItem}>
              {connector}
              <input
                type="checkbox"
                defaultChecked={filteredMarkers.includes(connector)}
                onClick={() => handleFilter(connector)}
              />
            </label>
          </>
        );
      })}
    </Menu>
  );

  const marks = {
    0: "Free",
    0.25: "",
    0.5: "£0.50",
  };

  const filtersSuccess = () => {
    message.success("Your filters have been saved.", 2.2);
  };

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
                handleFilterMenu();
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

          <Dropdown overlay={connectiontypesMenu}>
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

              // onClick={
              //   async (e)=>{
              //     e.preventDefault()
              //     updateUser(methods.FILTER, {
              //       filter_id: 10,
              //       price: 0.4,
              //       connector_type: ["CCS Type 2 Combo (IEC62196)"], 
              //       availability: false,
              //       filter_name: "I have been updated smile",

              //     })
              //   }
              // }
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
