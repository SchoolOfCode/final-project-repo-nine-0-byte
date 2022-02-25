import React from "react";
import logo from "../../public/shortcircuitlogo.png";
import Image from "next/image";
import Style from "./header.module.css";

export default function Header() {
  return (
    <header className={Style.container}>
      <div className={Style.header}>
        <h1>Short</h1>
        <div className={Style.logo}>
          <Image
            alt="logo"
            src={logo}
            width={50}
            height={50}
            objectFit="contain"
          />
        </div>
        <h1>Circuit</h1>
        {/* <p>To go or not to go</p> */}

        <button className={Style.login}>Log In</button>
      </div>
    </header>
  );
}
