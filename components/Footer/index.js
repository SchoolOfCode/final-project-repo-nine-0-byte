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
        <div className={Style.links}>
          <span>
            <a href="#">About</a>
          </span>
          <span>
            <a href="#">Contact Us</a>
          </span>
          <span>
            <a href="#">Socials</a>
          </span>
        </div>
        <div className={Style.socialIcons}>
          <AiOutlineFacebook className={Style.paddingIcon} />
          <AiOutlineInstagram className={Style.paddingIcon} />
          <AiOutlineTwitter className={Style.paddingIcon} />
          <AiOutlineLinkedin className={Style.paddingIcon} />
          <SiNextdotjs className={Style.paddingIcon} />
          <MdAlternateEmail className={Style.paddingIcon} />
          <div>
            <p className={Style.copyright}>Copyright ©️ Nine-O-Byte</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Create 3 links A tag
// About
// Contact Us
// Social (react icons)
