import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/router";

const divStyle = {
  width: "40vw",
  margin: "0.5em auto",
  color: "#f35b04ff",
};
const aTagStyle = {
  fontSize: "1.3rem",
  color: "#f35b04ff",
};

function Oops() {
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3100);
  }, []);

  return (
    <div style={divStyle}>
      <h1>Sorry this page cannot be found</h1>
      <Image
        src="/FunkyShortCircuitLogo.gif"
        width={500}
        height={400}
        alt="logo gif"
      />
      <br />
      <Link href="/">
        <a style={aTagStyle}>Click here to go back to Homepage</a>
      </Link>
    </div>
  );
}

export default Oops;
