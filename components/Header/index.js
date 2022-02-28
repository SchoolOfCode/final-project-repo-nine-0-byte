import React from "react";
import logo from "../../public/shortcircuitlogo.png";
import Image from "next/image";
import Style from "./header.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import Link from "next/link";

export default function Header() {
  const { user, error, isLoading } = useUser();
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  // if (!user) {
  //   return <a href="/api/auth/login">Login</a>;
  // }
  // if (user) {
  //   return (
  //     <div>
  //       Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
  //     </div>
  //   );
  // }

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

        <div className={Style.authLink}>
          {!user && (
            <div>
              <p>Login to save your filters</p>
              <Link href="/api/auth/login">Login</Link>
            </div>
          )}
          {user && (
            <div>
              <p>Howdy {user.name}</p>
              <Link href="/api/auth/logout">Logout</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
