import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

function Oops() {
  // const router = useRouter();
  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push("/");
  //   }, 2200);
  // }, []);

  return (
    <div style={{"margin-left": "2rem"}}>
      <h2>Sorry this page cannot be found</h2>
      <Image
        src="/FunkyShortCircuitLogo.gif"
        width={500}
        height={380}
        alt="logo gif"
      />
      <br />
      <Link href="/">
        <a>Click here to go back to Homepage</a>
      </Link>
    </div>
  );
}

export default Oops;