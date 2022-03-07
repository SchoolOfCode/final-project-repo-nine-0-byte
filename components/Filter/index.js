import { Tooltip, Slider, Dropdown, Menu, Button, message } from "antd";
import {
  DownOutlined,
  MenuOutlined,
  CloseSquareTwoTone,
} from "@ant-design/icons";

import Style from "./Filter.module.css";
import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Filter({
  handleFilter,
  handlePrice,
  handleAvail,
  isAvailable,
  handleSaveFilters,
  filterMenu,
}) {
  const { user } = useUser();

  // const [hamburger, setHamburger] = useState(true);

  // export function handleHamburger() {
  //   setHamburger(!hamburger);
  // }

  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const connectiontypesMenu = ( //Menu Drop down
    <Menu className={Style.connectorMenu} onClick={handleMenuClick}>
      <label className={Style.checkItem}>
        3-pin Type G (BS1363)
        <input
          type="checkbox"
          defaultChecked="true"
          onClick={() => handleFilter("3-pin Type G (BS1363)")}
        />
      </label>
      <br />
      <label className={Style.checkItem}>
        JEVS G105 (CHAdeMO) DC
        <input
          type="checkbox"
          defaultChecked="true"
          onClick={() => handleFilter("JEVS G105 (CHAdeMO) DC")}
        />
      </label>
      <br />
      <label className={Style.checkItem}>
        Type 1 SAEJ1772 (IEC 62196)
        <input
          type="checkbox"
          defaultChecked="true"
          onClick={() => handleFilter("Type 1 SAEJ1772 (IEC 62196)")}
        />
      </label>
      <br />
      <label className={Style.checkItem}>
        Type 2 Mennekes (IEC62196)
        <input
          type="checkbox"
          defaultChecked="true"
          onClick={() => handleFilter("Type 2 Mennekes (IEC62196)")}
        />
      </label>
      <br />
      <label className={Style.checkItem}>
        Type 3 Scame (IEC62196)
        <input
          type="checkbox"
          defaultChecked="true"
          onClick={() => handleFilter("Type 3 Scame (IEC62196)")}
        />
      </label>
      <br />
      <label className={Style.checkItem}>
        CCS Type 2 Combo (IEC62196)
        <input
          type="checkbox"
          defaultChecked="true"
          onClick={() => handleFilter("CCS Type 2 Combo (IEC62196)")}
        />
      </label>
      <br />
      <label className={Style.checkItem}>
        Type 2 Tesla (IEC62196) DC
        <input
          type="checkbox"
          defaultChecked="true"
          onClick={() => handleFilter("Type 2 Tesla (IEC62196) DC")}
        />
      </label>
      <br />
      <label className={Style.checkItem}>
        Commando 2P+E (IEC60309)
        <input
          type="checkbox"
          defaultChecked="true"
          onClick={() => handleFilter("Commando 2P+E (IEC60309)")}
        />
      </label>
      <br />
      <label className={Style.checkItem}>
        Commando 3P+N+E (IEC60309)
        <input
          type="checkbox"
          defaultChecked="true"
          onClick={() => handleFilter("Commando 3P+N+E (IEC60309)")}
        />
      </label>
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
            <p>Filter:</p>
            <CloseSquareTwoTone
              style={{ marginTop: "-1rem" }}
              // onClick={() => {
              //   setHamburger(true);
              // }}
            />
          </div>

          <h4>Price/kwH</h4>
          <Slider
            marks={marks}
            className={Style.slider}
            min={0}
            max={0.5}
            defaultValue={0.45}
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
              onClick={(e) => {
                e.preventDefault();
                console.log(handleSaveFilters());
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
