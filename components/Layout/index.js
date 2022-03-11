import Header from "../Header";
import Footer from "../Footer";
import Head from "next/head";

function Layout({ children, ...pageProps }) {
  return (
    <>

      <Head>
        <title>Short Circuit</title>
        <meta name="keywords" content="shortcircuit" />{" "}
      </Head>

      <Header drawerFilterLoad={pageProps.drawerFilterLoad} />

      {children}
      <Footer />
    </>
  );
}

export default Layout;
