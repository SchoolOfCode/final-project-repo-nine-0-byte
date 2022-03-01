import React from 'react'
import {
    Dropdown,
    Menu,
    Button,
  } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import Style from "./radius.module.css"
  
function RadiusFilter() {
    const sideBar = (
        <Menu className={Style.sideBar}>
        <button  className= {Style.checkItem}>
          5 Miles
        </button>
        <button  className={Style.checkItem}>
          10 Miles
        </button>
        <button  className={Style.checkItem}>
          15 Miles        
        </button>
         <button  className={Style.checkItem}>
          20 Miles
        </button>
        </Menu>
      )
    
  return (
      <form>
    <Dropdown overlay={sideBar}>
        <Button>
          Distance <DownOutlined />
        </Button>
      </Dropdown>
      </form>
  )
}

export default RadiusFilter;