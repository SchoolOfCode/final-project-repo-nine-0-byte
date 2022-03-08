import React, { useState } from "react";
import logo from "../../public/shortcircuitlogo.png";
import Image from "next/image";
import Style from "./header.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";
import { Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Drawers from "../Drawers";

export default function Header() {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const { user, error } = useUser();

  if (error) return <div>{error.message}</div>;

  // console.log("import filter in header", savedFilters);

  const userLogin = (
    <Menu>
      {!user && (
        <Menu.Item>
          <Link href="/api/auth/login">Login</Link>
        </Menu.Item>
      )}
      {user && (
        <>
          <Menu.Item>
            <Link href="/api/auth/logout">Logout</Link>
          </Menu.Item>
          <Menu.Item>
            <p onClick={showDrawer}>Saved Filters</p>
          </Menu.Item>
        </>
      )}
    </Menu>
  );
  return (
    <>
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

          <Dropdown overlay={userLogin} className={Style.authLink}>
            <a
              className="ant-dropdown-link"
              onClick={(e) => e.preventDefault()}
            >
              {!user && `User`}
              {user && `${user.name}`} <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </header>
      {visible ? <Drawers visible={visible} onClose={onClose} /> : null}
    </>
  );
}