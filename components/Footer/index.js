import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { SiNextdotjs } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import Style from "./footer.module.css";

export default function Footer() {
  return (
    // comment
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

          <MdAlternateEmail className={Style.paddingIcon} />
        </div>
        <div className={Style.copyright}>
          <p>Made with</p>
          <SiNextdotjs className={Style.paddingIcon} />
          <p>Copyright ©️ Nine-O-Byte</p>
        </div>
      </div>
    </footer>
  );
}

// Create 3 links A tag
// About
// Contact Us
// Social (react icons)
