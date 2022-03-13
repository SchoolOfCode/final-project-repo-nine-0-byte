import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineTwitter,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { SiNextdotjs } from "react-icons/si";
import { MdAlternateEmail } from "react-icons/md";
import Style from "./footer.module.css";
import { Popover } from "antd";

//Ukrainian flag
setTimeout(
  () =>
    console.log(
      "%c %c ",
      "border-right:10rem solid blue; font-size: 2rem",
      "border-right:10rem solid yellow; font-size: 2rem"
    ),
  4000
);
const aboutUs = (
  <div>
    <p>
      <FiUserCheck />
      {" Laura"}
    </p>
    <p>
      <FiUserCheck />
      {" Pyi"}
    </p>
    <p>
      <FiUserCheck />
      {" Callum"}
    </p>
    <p>
      <FiUserCheck />
      {" Aleks"}
    </p>
    <p>
      <FiUserCheck />
      {" Manni"}
    </p>
    <p>
      <FiUserCheck />
      {" Sam"}
    </p>
  </div>
);
const contactUs = (
  <div>
    Please feel free to drop us a line at{" "}
    <a href="mailto:nine.0.byteftw@gmail.com" style={{ color: "white" }}>
      nine.0.byteftw@gmail.com
    </a>
  </div>
);
const socials = (
  <div>
    Feel free to get in touch with us via any of the socials listed below
  </div>
);

export default function Footer() {
  return (
    // comment
    <footer className={Style.Foot}>
      <div className={Style.container}>
        <div className={Style.links}>
          <Popover
            content={aboutUs}
            title="Team Nine-0-Byte!"
            trigger="click"
            color="#f7b801ff"
          >
            <span>
              <a href="#">About</a>
            </span>
          </Popover>
          <Popover
            content={contactUs}
            title="Email us!"
            trigger="click"
            color="#7678edff"
          >
            <span>
              <a href="#">Contact Us</a>
            </span>
          </Popover>
          <Popover
            content={socials}
            title="Let's chat!"
            trigger="click"
            color="#f18701ff"
          >
            <span>
              <a href="#">Socials</a>
            </span>
          </Popover>
        </div>
        <div className={Style.socialIcons}>
          <AiOutlineFacebook className={Style.paddingIcon} alt="icon-face" />
          <AiOutlineInstagram className={Style.paddingIcon} alt="icon-ig" />
          <AiOutlineTwitter className={Style.paddingIcon} alt="icon-twit" />
          <AiOutlineLinkedin className={Style.paddingIcon} alt="icon-link" />

          <MdAlternateEmail className={Style.paddingIcon} alt="icon-email" />
        </div>
        <div className={Style.copyright}>
          <p>Made with</p>
          <SiNextdotjs
            size="1.3rem"
            className={(Style.paddingIcon, Style.nextIcon)}
            alt="icon-next"
          />
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
