import {
  Switch,
  Slider,
  Dropdown,
  Menu,
  Button,
  message,
  Checkbox,
} from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import Style from "./Filter.module.css";

export default function Filter() {
  function handleMenuClick(e) {
    message.info("Click on menu item.");
    console.log("click", e);
  }

  const subscriptionMenu = ( //Menu Drop down
    <Menu onClick={handleMenuClick}>
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
      <input type="checkbox" />
    </Menu>
  );

  const connectiontypesMenu = ( //Menu Drop down
    <Menu className={Style.connectorMenu} onClick={handleMenuClick}>
      <label className={Style.checkItem}>
        3-pin Type G (BS1363)
        <input type="checkbox" defaultChecked="true" />
      </label>
      <br />
      <label className={Style.checkItem}>
        JEVS G105 (CHAdeMO) DC
        <input type="checkbox" defaultChecked="true" />
      </label>
      <br />
      <label className={Style.checkItem}>
        Type 1 SAEJ1772 (IEC 62196)
        <input type="checkbox" defaultChecked="true" />
      </label >
      <br />
      <label className={Style.checkItem}>
        Type 2 Mennekes (IEC62196){" "}
        <input type="checkbox" defaultChecked="true" />
      </label >
      <br />
      <label className={Style.checkItem}>
        Type 3 Scame (IEC62196)
        <input type="checkbox" defaultChecked="true" />
      </label>
      <br />
      <label className={Style.checkItem}>
        CCS Type 2 Combo (IEC62196)
        <input type="checkbox" defaultChecked="true" />
      </label>
      <br />
      <label className={Style.checkItem}>
        Type 2 Tesla (IEC62196) DC
        <input type="checkbox" defaultChecked="true" />
      </label>
      <br />
      <label className={Style.checkItem}>
        Commando 2P+E (IEC60309)
        <input type="checkbox" defaultChecked="true" />
      </label >
      <br />
      <label className={Style.checkItem}>
        Commando 3P+N+E (IEC60309)
        <input type="checkbox" defaultChecked="true" />
      </label>
    </Menu>
  );

  const marks = {
    0: "Free",
    0.2: "£0.20/kwH",
    0.5: "£0.50/kwH",
    0.8: "£0.80/kwH",
    1: "Any",
  };

  return (
    <div className={Style.bg}>

<form className={Style.filterContainer}>
      <h1>Filter:</h1>
      <Switch />
      <Slider marks={{
        0:"1mile",
        25:"25miles",
        50:"50miles"
      }}className={Style.slider} max={50} defaultValue={10} step={5} />
      <Slider
        marks={marks}
        className={Style.slider}
        min={0}
        max={1}
        defaultValue={0.45}
        step={0.05}
      />

      <Dropdown overlay={connectiontypesMenu}>
        <Button>
          Connection Types <DownOutlined />
        </Button>
      </Dropdown>

      <Dropdown overlay={subscriptionMenu}>
        <Button>
          Subscriptions <DownOutlined />
        </Button>
      </Dropdown>
    </form>
    </div>

  );
}

{
  /* 
    Filter toggle?
    Location (Slider int),
    Price(Int),
    Connection type(String, drop down),
    Subscriptions */
}
