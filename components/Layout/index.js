import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head";

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Short Circuit</title>
        <meta name="keywords" content="shortcircuit" />{" "}
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
