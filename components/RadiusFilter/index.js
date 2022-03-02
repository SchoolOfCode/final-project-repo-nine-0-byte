import React, { useEffect, useState } from "react";
import { Dropdown, Menu, Button } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

import Style from "./radius.module.css";

function RadiusFilter({setDistance, postcode}) {



const [selectedValue, setSelectedValue] = useState()

  const [activeList, setActiveList] = useState([
    { value: 5, bool: false },
    { value: 10, bool: false },
    { value: 15, bool: false },
    { value: 20, bool: false },
    {value:3000, bool:true}
  ]);


  useEffect(()=>{
    setDistance(()=>selectedValue )
    console.log("SET DISTANCE")
  },[postcode])


  function toggleActive(index) {
    const newArray = activeList.map((v, i) =>
      i === index ? { value: v.value, bool: true } : { value: v.value, bool: false }
    );
    setActiveList(()=>newArray);
    setSelectedValue(()=>activeList.filter((v)=>v.bool === true)[0].value)
  }

  const sideBar = (
    <Menu className={Style.sideBar}>
 
    
   { activeList.map((v,i)=>{
      return( 
      <button 
      onClick={(e) => {
          e.preventDefault()
          toggleActive(i);
        }} 
      className={activeList[i].bool === true ? Style.button + " " + Style.buttonSelected : Style.button} >
        {v.value + " Miles"}
        {console.log(v.value)}
      </button>
      )})
    }  
    </Menu>
      
      );

  return (
    <div>
      <Dropdown overlay={sideBar}>
        <Button>
          Distance <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default RadiusFilter;
