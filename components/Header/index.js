import React from "react";
import logo from "../../public/shortcircuitlogo.png";
import Image from "next/image";
import css from "../../styles/Home.module.css";

export default function Header() {
  return (
    <header>
      <Image alt="logo" src={logo} width="40" height="40" />
      <h1>Short Circuit</h1>
      <p>To go or not to go</p>
    </header>
  );
}
