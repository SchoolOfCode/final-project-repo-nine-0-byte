import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SiFacebook, SiNextdotjs } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import Style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={Style.Foot}>
      <div>
        <a href="#">About</a>
        <a href="#">Contact Us</a>
        <a href="#">Socials</a>

        <AiOutlineFacebook />
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <AiOutlineLinkedin />
        <SiNextdotjs />
        <MdAlternateEmail />
      </div>
      <p>Copyright ©️ N-O-B</p>
    </footer>
  );
}

// Create 3 links A tag
// About
// Contact Us
// Social (react icons)
